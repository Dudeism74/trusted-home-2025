import os
import json
import datetime
import uuid
from dotenv import load_dotenv
from openai import OpenAI
from amazon_paapi import AmazonApi
# Note: sanity-runner is not strictly needed if we use raw HTTP requests, 
# which is often more stable for simple scripts. Let's use raw requests here.
import requests

# 1. Load keys
load_dotenv(".env") # Try loading .env (local)

# 2. Setup Config
SANITY_PROJECT_ID = os.getenv("NEXT_PUBLIC_SANITY_PROJECT_ID")
SANITY_DATASET = os.getenv("NEXT_PUBLIC_SANITY_DATASET")
SANITY_TOKEN = os.getenv("SANITY_TOKEN")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Amazon Config
AMAZON_ACCESS_KEY = os.getenv("AMAZON_ACCESS_KEY")
AMAZON_SECRET_KEY = os.getenv("AMAZON_SECRET_KEY")
AMAZON_PARTNER_TAG = os.getenv("AMAZON_PARTNER_TAG")
AMAZON_COUNTRY = "US" # Force US region to fix the error

# 3. Helpers
def generate_key():
    return str(uuid.uuid4())

def get_amazon_products(search_term):
    print(f"🛒 Searching Amazon for: {search_term}...")
    try:
        amazon = AmazonApi(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_PARTNER_TAG, AMAZON_COUNTRY, throttling=1)
        items = amazon.search_items(keywords=search_term)
        product_list = []
        
        for item in items.items[:3]:
            try:
                product = {
                    "_key": generate_key(), # IMPORTANT: The fix for missing keys
                    "_type": "object",
                    "name": item.item_info.title.display_value,
                    "url": item.detail_page_url,
                    "affiliateTag": AMAZON_PARTNER_TAG,
                    "notes": "Top rated choice."
                }
                product_list.append(product)
            except:
                continue
        return product_list
    except Exception as e:
        print(f"⚠️ Amazon Error (Skipping products): {e}")
        return [] # Return empty list so script doesn't crash

# 4. The Writer
def generate_article(topic):
    print(f"🤖 Writing article about: {topic}...")
    client = OpenAI(api_key=OPENAI_API_KEY)
    
    # Get products first
    products = get_amazon_products(topic)
    product_names = [p['name'] for p in products]
    
    prompt = f"""
    Write a home maintenance article about: "{topic}".
    Use these Amazon products: {product_names}
    
    Return strictly valid JSON with this schema:
    {{
        "title": "Title",
        "quickAnswer": "40-60 word summary",
        "difficulty": "Easy", 
        "estimatedTime": "30 mins",
        "problemIntro": "Intro paragraph",
        "tools": ["Tool 1", "Tool 2"],
        "steps": ["Step 1 text", "Step 2 text"],
        "faq": [{{"question": "Q", "answer": "A"}}]
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4o", # Using the new fast model
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    content = json.loads(response.choices[0].message.content)
    content['products'] = products
    return content

# 5. The Publisher (Using Raw API to avoid library conflicts)
def push_to_sanity(data):
    print("🚀 Uploading to Sanity...")
    
    # 1. Fetch Author ID (We need to link it to 'Aerion Solaris')
    # For now, we will grab the first author found to keep it simple
    query_url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='author'][0]._id"
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    author_res = requests.get(query_url, headers=headers).json()
    author_id = author_res['result'] if 'result' in author_res else None

    # 2. Fetch Category ID
    cat_query_url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='category'][0]._id"
    cat_res = requests.get(cat_query_url, headers=headers).json()
    category_id = cat_res['result'] if 'result' in cat_res else None

    # 3. Build the Body with Keys (THE FIX)
    body_blocks = [
        {
            "_type": "block",
            "_key": generate_key(),
            "style": "normal",
            "children": [{"_type": "span", "_key": generate_key(), "text": data["problemIntro"]}]
        }
    ]
    
    # 4. Build Steps with Keys
    step_blocks = []
    for step in data["steps"]:
        step_blocks.append({
            "_type": "block",
            "_key": generate_key(),
            "style": "normal",
            "children": [{"_type": "span", "_key": generate_key(), "text": step}]
        })

    # 5. Build Tools with Keys
    # Note: If tools is defined as array of strings in schema, it doesn't need keys. 
    # If it is array of objects, it does. Based on your schema it was strings, so we leave it raw.
    
    # 6. Build FAQ with Keys
    faq_blocks = []
    for item in data["faq"]:
        faq_blocks.append({
            "_key": generate_key(),
            "question": item["question"],
            "answer": item["answer"]
        })

    # Construct Final Document
    doc = {
        "_type": "post",
        "title": data["title"],
        "slug": {"_type": "slug", "current": data["title"].lower().replace(" ", "-").replace("?", "")},
        "publishedAt": datetime.datetime.now().isoformat(),
        "quickAnswer": data["quickAnswer"],
        "difficulty": data["difficulty"],
        "estimatedTime": data["estimatedTime"],
        "problemIntro": data["problemIntro"],
        "body": body_blocks,
        "steps": step_blocks,
        "tools": data["tools"],
        "products": data["products"], # Already has keys from function above
        "faq": faq_blocks
    }

    # Add References if found
    if author_id:
        doc["author"] = {"_type": "reference", "_ref": author_id}
    if category_id:
        doc["category"] = {"_type": "reference", "_ref": category_id} # This fixes the category issue!

    # POST to Sanity
    post_url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutations/{SANITY_DATASET}"
    mutation = {"mutations": [{"create": doc}]}
    
    response = requests.post(post_url, headers=headers, json=mutation)
    
    if response.status_code == 200:
        print(f"✅ SUCCESS! Article Published: {data['title']}")
    else:
        print(f"❌ Error uploading: {response.text}")

if __name__ == "__main__":
    topic = input("Enter a topic: ")
    article = generate_article(topic)
    push_to_sanity(article)