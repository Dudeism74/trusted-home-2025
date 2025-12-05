import os
import json
import datetime
import uuid
import requests
import random
import warnings
from dotenv import load_dotenv
from openai import OpenAI
from amazon_paapi import AmazonApi
from duckduckgo_search import DDGS

# Silence warnings
warnings.filterwarnings("ignore")

# 1. Load keys
load_dotenv(".env") 

SANITY_PROJECT_ID = os.getenv("NEXT_PUBLIC_SANITY_PROJECT_ID")
SANITY_DATASET = os.getenv("NEXT_PUBLIC_SANITY_DATASET")
SANITY_TOKEN = os.getenv("SANITY_TOKEN")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

AMAZON_ACCESS_KEY = os.getenv("AMAZON_ACCESS_KEY")
AMAZON_SECRET_KEY = os.getenv("AMAZON_SECRET_KEY")
AMAZON_PARTNER_TAG = os.getenv("AMAZON_PARTNER_TAG")
AMAZON_COUNTRY = "US"

# 3. The Researcher (Now Generates Infinite Topics)
def find_winning_topic():
    print("🕵️  Scanning for fresh Home Repair topics...")
    client = OpenAI(api_key=OPENAI_API_KEY)
    
    # Get existing topics to avoid duplicates
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    try:
        query_url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='post'].title"
        existing_posts = requests.get(query_url, headers=headers).json().get('result', [])
    except:
        existing_posts = []

    # Try Web Search
    titles = []
    try:
        query = random.choice(["diy home repair common problems", "household maintenance guide", "fix it yourself home repair"])
        # Add backend='api' to try to bypass some blocks
        with DDGS() as ddgs:
            results = [r for r in ddgs.text(query, max_results=5, backend="api")]
            titles = [r['title'] for r in results]
    except: pass
    
    # THE FIX: If search fails, ask AI to INVENT a topic instead of using a static list
    search_context = f"Found these trending online: {titles}" if titles else "Web search failed, please invent a trending topic."

    prompt = f"""
    Context: {search_context}
    My Existing Articles (DO NOT REPEAT): {existing_posts}

    Task: Generate ONE unique, specific, high-value home repair topic.
    It must be a physical fix (Plumbing, Electrical, Carpentry, Appliance).
    Examples of good topics: "How to Replace a Faulty Light Switch", "Fixing a Slow Draining Bathtub".
    
    Return ONLY the Title string.
    """
    
    response = client.chat.completions.create(model="gpt-4o", messages=[{"role": "user", "content": prompt}])
    return response.choices[0].message.content.strip().replace('"', '')

# 4. Amazon Helper
def generate_key(): return str(uuid.uuid4())

def get_amazon_products(tool_data):
    # tool_data is: {'name': 'Generic Name', 'model': 'Specific Brand Model'}
    search_query = tool_data['model'] 
    
    print(f"   🛒 Shopping Amazon for '{search_query}'...")
    try:
        amazon = AmazonApi(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_PARTNER_TAG, AMAZON_COUNTRY, throttling=1)
        items = amazon.search_items(keywords=search_query, item_count=1) 
        if items.items:
            item = items.items[0]
            return {
                "_key": generate_key(), "_type": "object",
                "name": item.item_info.title.display_value[:60] + "...", # Truncate title
                "url": item.detail_page_url,
                "affiliateTag": AMAZON_PARTNER_TAG,
                "notes": f"Top Rated: {tool_data['model']}"
            }
    except: pass
    
    # Fallback
    search_url = f"https://www.amazon.com/s?k={search_query.replace(' ', '+')}&tag={AMAZON_PARTNER_TAG}"
    return {
        "_key": generate_key(), "_type": "object",
        "name": f"Recommended: {tool_data['model']}",
        "url": search_url,
        "affiliateTag": AMAZON_PARTNER_TAG,
        "notes": "Check Price"
    }

# 5. The Writer (Fixing the Repetition & Formatting)
def generate_article(topic):
    print(f"🤖 Writing EXPERT content for: {topic}...")
    client = OpenAI(api_key=OPENAI_API_KEY)
    
    prompt = f"""
    You are a Class A Maintenance Mechanic. Write a guide for: "{topic}".
    
    CRITICAL FORMATTING RULES:
    1. **Tool Logic:** Return a list of objects. "name" = Generic (e.g. Drill). "model" = Specific Brand (e.g. DeWalt 20V).
    2. **Body Text:** Write a single, cohesive "Deep Dive" section (3-4 paragraphs). Do NOT number the paragraphs. Do NOT repeat the "Problem Intro". Focus on the "Why" and the mechanics of the fix.
    3. **Quick Answer:** 40-60 words. Pure fact. No brands.
    4. **FAQ:** Exactly 3 questions.
    
    JSON Schema: 
    {{ 
        "title": "{topic}", 
        "quickAnswer": "Direct answer...", 
        "categoryName": "Repairs",
        "difficulty": "Intermediate", 
        "estimatedTime": "45 mins", 
        "problemIntro": "2 sentences on symptoms.", 
        "contentBody": "Full text of the deep dive section. Write this as one long string with \\n\\n for paragraph breaks.",
        "tools": [
            {{ "name": "Generic Tool", "model": "Specific Brand Model" }}
        ], 
        "steps": ["Step 1", "Step 2", "Step 3"], 
        "faq": [
            {{"question":"Q1", "answer":"A1"}},
            {{"question":"Q2", "answer":"A2"}},
            {{"question":"Q3", "answer":"A3"}}
        ] 
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    data = json.loads(response.choices[0].message.content)
    
    print("💰 Monetizing...")
    data['products'] = [get_amazon_products(tool) for tool in data.get("tools", [])[:3]]
    return data

# 6. Category Manager
def get_category_id(cat_name):
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    try:
        query = f"*[_type=='category' && title=='{cat_name}'][0]._id"
        url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query={query}"
        res = requests.get(url, headers=headers).json()
        if res.get('result'): return res['result']
    except: pass

    try:
        print(f"   ✨ Creating Category: {cat_name}")
        doc = {"_type": "category", "title": cat_name}
        url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/{SANITY_DATASET}"
        res = requests.post(url, headers=headers, json={"mutations": [{"create": doc}]})
        return res.json()['results'][0]['id']
    except: return None

# 7. The Publisher
def push_to_sanity(data):
    print("🚀 Publishing...")
    
    # Fix Body Text (Split by newlines so it's not one giant block)
    body_paragraphs = data["contentBody"].split("\n\n")
    body_blocks = []
    for p in body_paragraphs:
        if p.strip():
            body_blocks.append({
                "_type": "block", "_key": generate_key(), "style": "normal", 
                "children": [{"_type": "span", "_key": generate_key(), "text": p.strip()}]
            })
            
    step_blocks = [{"_type": "block", "_key": generate_key(), "style": "normal", "children": [{"_type": "span", "_key": generate_key(), "text": s}]} for s in data["steps"]]
    faq_blocks = [{"_key": generate_key(), "question": q["question"], "answer": q["answer"]} for q in data.get("faq", [])]
    cat_id = get_category_id(data.get("categoryName", "General"))

    # Display Tools: Only show the Generic Name to the reader
    display_tools = [t['name'] for t in data.get("tools", [])]

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
        "tools": display_tools, 
        "products": data["products"],
        "faq": faq_blocks
    }

    if cat_id: doc["category"] = {"_type": "reference", "_ref": cat_id}
    
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/{SANITY_DATASET}"
    
    # Author Link (Optional)
    try:
        q = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='author'][0]._id"
        res = requests.get(q, headers=headers).json()
        if 'result' in res: doc["author"] = {"_type": "reference", "_ref": res['result']}
    except: pass

    res = requests.post(url, headers=headers, json={"mutations": [{"create": doc}]})
    
    if res.status_code == 200:
        print(f"✅ SUCCESS! Published: {data['title']}")
    else:
        print(f"❌ Error {res.status_code}: {res.text}")

if __name__ == "__main__":
    topic = find_winning_topic() 
    article_data = generate_article(topic)
    push_to_sanity(article_data)