# Store Locator Scraper: Franchise Location Counter → Google Sheets (Make and n8n)

Runs the [Store Locator Scraper: Franchise Location Counter](https://apify.com/ausbizstack/multi-location-franchise-footprint-mapper) Apify Actor on a list of domains and appends one row per result to a Google Sheet.

## Files
- Make: `../make/multi-location-franchise-footprint-mapper.blueprint.json` (Scenarios → Create new → ⋯ → Import blueprint)
- n8n: `../n8n/multi-location-franchise-footprint-mapper.workflow.json` (Workflows → Import from file)

## Setup
1. Create a free Apify account and copy your API token (Settings → API & Integrations).
2. Make: in the HTTP module, replace `YOUR_APIFY_TOKEN` in the Authorization header. n8n: create a *Header Auth* credential with name `Authorization` and value `Bearer <token>`.
3. Create a Google Sheet with a tab named `Results` and this header row:
   `domain | brandName | verticalCategory | estimatedLocationCount | multiSiteTier | statesOrRegionsDetected | sampleSuburbsOrCities | bookingAndOperationsStack | abn | gstRegistered | estimatedMonthlyContractRangeAud | commercialContractScore`
4. Connect your Google account in the Google Sheets module/node and pick the spreadsheet.
5. Edit the input JSON (`domains`) with your own domains, then run.

## Notes
- Uses Apify's `run-sync-get-dataset-items` endpoint (waits up to 300 seconds). For lists of more than about 50 domains, start the run asynchronously and fetch the dataset when it finishes.
- List fields are joined with commas so they fit in one cell.
- Pricing is pay-per-result. See the [Store page](https://apify.com/ausbizstack/multi-location-franchise-footprint-mapper) for current rates.
- Before you submit these templates anywhere, import them once and do a test run. Blueprints are hand-written JSON.
