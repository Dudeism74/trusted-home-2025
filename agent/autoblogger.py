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

# 3. The Researcher
def find_winning_topic():
    print("🕵️  Scanning for High-Value Repair Topics...")
    titles = []
    try:
        query = random.choice([
            "refrigerator not cooling troubleshooting", 
            "washing machine won't drain fix", 
            "toilet keeps running repair", 
            "garbage disposal stuck fix",
            "electric dryer not heating repair"
        ])
        with DDGS() as ddgs:
            results = [r for r in ddgs.text(query, max_results=5)]
            titles = [r['title'] for r in results]
    except: pass
    
    if not titles:
        titles = ["How to Replace a Leaking Garbage Disposal", "Fixing a Wobbly Ceiling Fan", "Troubleshoot AC Not Cooling"]

    client = OpenAI(api_key=OPENAI_API_KEY)
    prompt = f"""
    Potential topics: {titles}
    Task: Pick ONE specific, physical home repair problem. 
    Return ONLY the Title string.
    """
    response = client.chat.completions.create(model="gpt-4o", messages=[{"role": "user", "content": prompt}])
    return response.choices[0].message.content.strip().replace('"', '')

# 4. Amazon Helper
def generate_key(): return str(uuid.uuid4())

def get_amazon_products(tool_data):
    # tool_data is now a dict: {'name': 'Screwdriver', 'model': 'Klein Tools 11-in-1'}
    search_query = tool_data['model'] 
    display_name = tool_data['name']
    
    print(f"   🛒 Shopping Amazon for '{search_query}'...")
    
    try:
        amazon = AmazonApi(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_PARTNER_TAG, AMAZON_COUNTRY, throttling=1)
        items = amazon.search_items(keywords=search_query, item_count=1) 
        if items.items:
            item = items.items[0]
            return {
                "_key": generate_key(), "_type": "object",
                "name": f"Top Rated {display_name}: {item.item_info.title.display_value[:30]}...", 
                "url": item.detail_page_url,
                "affiliateTag": AMAZON_PARTNER_TAG,
                "notes": f"Pro Pick: {tool_data['model']}"
            }
    except:
        pass
    
    search_url = f"https://www.amazon.com/s?k={search_query.replace(' ', '+')}&tag={AMAZON_PARTNER_TAG}"
    return {
        "_key": generate_key(),
        "_type": "object",
        "name": f"Recommended: {tool_data['model']}",
        "url": search_url,
        "affiliateTag": AMAZON_PARTNER_TAG,
        "notes": "Check Price"
    }

# 5. The Writer (Updated for Detail)
def generate_article(topic):
    print(f"🤖 Writing EXPERT content for: {topic}...")
    client = OpenAI(api_key=OPENAI_API_KEY)
    
    prompt = f"""
    You are a Class A Maintenance Mechanic. Write a detailed repair guide for: "{topic}".
    
    CRITICAL INSTRUCTIONS:
    1. **Quick Answer:** Make it 80-100 words. Do not just give the first step. Explain the diagnosis, the primary fix, AND a critical warning. It must be comprehensive.
    2. **Tool Logic:** Provide 'Generic Name' AND 'Best Model'.
    3. **Body Text:** 4 detailed paragraphs.
    
    JSON Schema: 
    {{ 
        "title": "{topic}", 
        "quickAnswer": "80-100 word detailed summary. Explain the 'Why' and the 'How'.", 
        "categoryName": "Repairs",
        "difficulty": "Intermediate", 
        "estimatedTime": "45 mins", 
        "problemIntro": "2 sentences identifying the symptoms.", 
        "contentBody": [
            "Paragraph 1: Deep dive into the mechanics...",
            "Paragraph 2: The logic of the repair...",
            "Paragraph 3: Safety steps...",
            "Paragraph 4: Prevention..."
        ],
        "tools": [
            {{ "name": "Generic Tool 1", "model": "Specific Brand/Model 1" }},
            {{ "name": "Generic Tool 2", "model": "Specific Brand/Model 2" }}
        ], 
        "steps": ["Step 1", "Step 2", "Step 3", "Step 4"], 
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
    data['tools_display'] = [t['name'] for t in data.get("tools", [])]
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
    
    body_blocks = []
    for paragraph in data["contentBody"]:
        body_blocks.append({
            "_type": "block", 
            "_key": generate_key(), 
            "style": "normal", 
            "children": [{"_type": "span", "_key": generate_key(), "text": paragraph}]
        })
    
    step_blocks = []
    for step in data["steps"]:
        step_blocks.append({
            "_type": "block", 
            "_key": generate_key(), 
            "style": "normal", 
            "children": [{"_type": "span", "_key": generate_key(), "text": step}]
        })

    faq_blocks = [{"_key": generate_key(), "question": q["question"], "answer": q["answer"]} for q in data.get("faq", [])]
    cat_id = get_category_id(data.get("categoryName", "General"))

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
        "tools": data["tools_display"], 
        "products": data["products"],
        "faq": faq_blocks
    }

    if cat_id: doc["category"] = {"_type": "reference", "_ref": cat_id}
    
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    url = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/{SANITY_DATASET}"
    
    try:
        q = f"https://{SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/{SANITY_DATASET}?query=*[_type=='author'][0]._id"
        res = requests.get(q, headers=headers).json()
        if 'result' in res: doc["author"] = {"_type": "reference", "_ref": res['result']}
    except: pass

    res = requests.post(url, headers=headers, json={"mutations": [{"create": doc}]})
    
    if res.status_code == 200:
        print(f"✅ SUCCESS! Article Published: {data['title']}")
    else:
        print(f"❌ Error {res.status_code}: {res.text}")

if __name__ == "__main__":
    topic = find_winning_topic() 
    article_data = generate_article(topic)
    push_to_sanity(article_data)