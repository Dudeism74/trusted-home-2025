# AutoBlogger Agent

This agent autonomously generates and publishes articles to your Sanity-powered website.

## Setup

1.  **Install Python**: Ensure you have Python installed.
2.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
3.  **Environment Variables**:
    Ensure your `.env` file in the root directory (or `agent/.env`) contains the following:
    ```env
    OPENAI_API_KEY=sk-...
    SANITY_PROJECT_ID=...
    SANITY_DATASET=production
    SANITY_TOKEN=...
    AMAZON_ACCESS_KEY=...
    AMAZON_SECRET_KEY=...
    AMAZON_PARTNER_TAG=myfinancials-20
    ```

## Usage

Run the agent from the root directory or the `agent` directory:

```bash
python agent/autoblogger.py
```

## How it Works

1.  **Anti-Duplicate**: Checks existing Sanity posts to avoid repeating topics.
2.  **Topic Generation**: Asks OpenAI for a new "Home Maintenance" topic.
3.  **Product Search**: Searches Amazon for relevant products using your API keys.
4.  **Content Writing**: Generates the full article (JSON) matching your Sanity schema.
5.  **Publishing**: Uploads the article directly to Sanity.
