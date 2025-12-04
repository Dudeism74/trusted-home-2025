import os
import json
import datetime
import uuid
import requests
import random
from dotenv import load_dotenv
from openai import OpenAI
from amazon_paapi import AmazonApi
from duckduckgo_search import DDGS

# 1. Load keys
load_dotenv(".env")

SANITY_PROJECT_ID = os.getenv("NEXT_PUBLIC_SANITY_PROJECT_ID")
SANITY_DATASET = os.getenv("NEXT_PUBLIC_SANITY_DATASET")
SANITY_TOKEN = os.getenv("SANITY_TOKEN")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

AMAZON_ACCESS_KEY = os.getenv("AMAZON_ACCESS_KEY")
AMAZON_SECRET_KEY = os.getenv("AMAZON_SECRET_KEY")
AMAZON_PARTNER_TAG = os.getenv("AMAZON_PARTNER_TAG")
# Hardcode Region/Country to US to fix region errors
AMAZON_COUNTRY = "US" 
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1' # Safety fix for some boto3 underlying issues

# 2. Helpers
def generate_key():
    return str(uuid.uuid4())

# 3. The Researcher (With Backup)
def find_winning_topic():
    print("🕵️  Scanning the web for Home Repair topics...")
    
    backup_topics = [
        "How to Fix a Running Toilet Fill Valve",
        "Best Cordless Drills for Homeowners 2025",
        "How to Patch Drywall Like a Pro",
        "Water Heater Maintenance Checklist",
        "Unclogging a Kitchen Sink Drain"
    ]
    
    titles = []
    try:
        search_queries = ["diy home repair guides", "common house problems fixes", "home maintenance tips 2025"]
        query = random.choice(search_queries)
        print(f"   Searching for: {query}")
        
        # Robust Search with Try/Except
        results = list(DDGS().text(query, max_results=5))
        if results:
            titles = [r['title'] for r in results]
            print(f"   Found {len(titles)} articles via Search.")
        else:
            print("   Search returned 0 results.")
            
    except Exception as e:
        print(f"   (Search failed: {e})")
    
    # THE SAFETY NET: If search fails or returns nothing, use backup
    if not titles:
        print("   ⚠️ Search found nothing or failed. Switching to Backup Topics.")
        titles = backup_topics

    print("   Checking duplicates and picking topic...")
    
    # Pick Topic
    try:
        client = OpenAI(api_key=OPENAI_API_KEY)
        prompt = f"""
        Potential topics: {titles}
        
        Task: Pick ONE topic related to PHYSICAL HOME REPAIR.
        Return ONLY the Title string. No "Here is the topic".
        """
        
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}]
        )
        
        topic = response.choices[0].message.content.strip().replace('"', '')
        print(f"🎯 Selected Topic: {topic}")
        return topic
    except Exception as e:
        print(f"   Error picking topic: {e}")
        return random.choice(backup_topics) # Ultimate fallback

# 4. Amazon Helper
def get_amazon_products(tool_name):
    print(f"   🛒 Shopping Amazon for '{tool_name}'...")
    try:
        # Full Try/Except for Amazon
        amazon = AmazonApi(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_PARTNER_TAG, AMAZON_COUNTRY, throttling=1)
        items = amazon.search_items(keywords=tool_name, item_count=1) 
        if items and items.items:
            item = items.items[0]
            return {
                "_key": generate_key(),
                "_type": "object",
                "name": item.item_info.title.display_value,
                "url": item.detail_page_url,
                "affiliateTag": AMAZON_PARTNER_TAG,
                "notes": "Top Rated"
            }
    except Exception as e:
        print(f"   (Amazon error: {e})")
    
    # Fallback product object
    return {
        "_key": generate_key(),
        "_type": "object",
        "name": f"Search: {tool_name}",
        "url": f"https://www.amazon.com/s?k={tool_name}&tag={AMAZON_PARTNER_TAG}",
        "affiliateTag": AMAZON_PARTNER_TAG,
        "notes": "Check Price"
    }

# 5. The Writer
def generate_article(topic):
    print(f"🤖 Writing content for: {topic}...")
    client = OpenAI(api_key=OPENAI_API_KEY)
    
    prompt = f"""
    Write a guide for: "{topic}".
    JSON Schema: {{ 
        "title": "{topic}", 
        "quickAnswer": "40 words", 
        "difficulty": "Easy", 
        "estimatedTime": "30 mins", 
        "problemIntro": "Intro", 
        "tools": ["Tool1", "Tool2"], 
        "steps": ["Step1", "Step2"], 
        "faq": [{{"question":"Q", "answer":"A"}}] 
    }}
    Ensure 'steps' is an array of strings.
    """

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    data = json.loads(response.choices[0].message.content)
    
    print("💰 Monetizing...")
    real_products = []
    # Limit to 3 tools to save time/api calls
    for tool in data.get("tools", [])[:3]: 
        real_products.append(get_amazon_products(tool))
    data['products'] = real_products
    return data

# 6. The Publisher
def push_to_sanity(data):
    print("🚀 Publishing...")
    
    # Construct blocks with unique keys
    body_blocks = [
        {
            "_type": "block", 
            "_key": generate_key(), 
            "style": "normal", 
            "children": [
                {"_type": "span", "_key": generate_key(), "text": data["problemIntro"]}
            ]
        }
    ]
    
    step_blocks = []
    for s in data.get("steps", []):
        step_blocks.append({
            "_type": "block", 
            "_key": generate_key(), 
            "style": "normal", 
            "children": [
                {"_type": "span", "_key": generate_key(), "text": s}
            ]
        })
        
    faq_blocks = []
    for q in data.get("faq", []):
        faq_blocks.append({
            "_key": generate_key(), 
            "question": q["question"], 
            "answer": q["answer"]
        })

    doc = {
        "_type": "post",
        "title": data["title"],
        "slug": {"_type": "slug", "current": data["title"].lower().replace(" ", "-").replace(":", "").replace("?", "")},
        "publishedAt": datetime.datetime.now().isoformat(),
        "quickAnswer": data["quickAnswer"],
        "difficulty": data["difficulty"],
        "estimatedTime": data["estimatedTime"],
        "problemIntro": data["problemIntro"],
        "body": body_blocks,
        "steps": step_blocks,
        "tools": data["tools"],
        "products": data["products"],
        "faq": faq_blocks
    }

    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    # CORRECTED URL: data/mutate instead of data/mutations
    url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/{SANITY_DATASET}"
    
    # Fetch Author ID (Optional safety)
    try:
        q_url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='author'][0]._id"
        author_res = requests.get(q_url, headers=headers).json()
        if 'result' in author_res and author_res['result']:
            doc["author"] = {"_type": "reference", "_ref": author_res['result']}
    except Exception as e:
        print(f"   (Author fetch failed: {e})")

    # Sanity Mutate API expects 'mutations' array wrapper
    payload = {"mutations": [{"create": doc}]}
    
    try:
        res = requests.post(url, headers=headers, json=payload)
        
        if res.status_code == 200:
            print(f"✅ SUCCESS! Article Published: {data['title']}")
            print(f"   Response: {res.json()}")
        else:
            print(f"❌ Error {res.status_code}: {res.text}")
    except Exception as e:
        print(f"❌ Publishing failed: {e}")

if __name__ == "__main__":
    try:
        topic = find_winning_topic() 
        article_data = generate_article(topic)
        push_to_sanity(article_data)
    except Exception as e:
        print(f"❌ Fatal Script Error: {e}")