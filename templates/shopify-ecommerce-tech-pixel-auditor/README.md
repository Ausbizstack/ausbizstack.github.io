# Shopify Store Tech Stack & Apps Detector → Google Sheets (Make and n8n)

Runs the [Shopify Store Tech Stack & Apps Detector](https://apify.com/ausbizstack/shopify-ecommerce-tech-pixel-auditor) Apify Actor on a list of domains and appends one row per result to a Google Sheet.

## Files
- Make: `../make/shopify-ecommerce-tech-pixel-auditor.blueprint.json` (Scenarios → Create new → ⋯ → Import blueprint)
- n8n: `../n8n/shopify-ecommerce-tech-pixel-auditor.workflow.json` (Workflows → Import from file)

## Setup
1. Create a free Apify account and copy your API token (Settings → API & Integrations).
2. Make: in the HTTP module, replace `YOUR_APIFY_TOKEN` in the Authorization header. n8n: create a *Header Auth* credential with name `Authorization` and value `Bearer <token>`.
3. Create a Google Sheet with a tab named `Results` and this header row:
   `domain | storeName | ecommercePlatform | isShopifyPlus | shopifyThemeName | shopCurrency | adPixelsDetected | espSmsStack | reviewsLoyaltyStack | bnplStack | ecommerceMaturityScore | agencyLeadScore`
4. Connect your Google account in the Google Sheets module/node and pick the spreadsheet.
5. Edit the input JSON (`domains`) with your own domains, then run.

## Notes
- Uses Apify's `run-sync-get-dataset-items` endpoint (waits up to 300 seconds). For lists of more than about 50 domains, start the run asynchronously and fetch the dataset when it finishes.
- List fields are joined with commas so they fit in one cell.
- Pricing is pay-per-result. See the [Store page](https://apify.com/ausbizstack/shopify-ecommerce-tech-pixel-auditor) for current rates.
- Before you submit these templates anywhere, import them once and do a test run. Blueprints are hand-written JSON.
