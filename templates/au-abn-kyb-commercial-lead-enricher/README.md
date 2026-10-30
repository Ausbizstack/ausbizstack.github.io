# ABN Lookup Australia – Bulk ABN & KYB Checker → Google Sheets (Make and n8n)

Runs the [ABN Lookup Australia – Bulk ABN & KYB Checker](https://apify.com/ausbizstack/au-abn-kyb-commercial-lead-enricher) Apify Actor on a list of domains and appends one row per result to a Google Sheet.

## Files
- Make: `../make/au-abn-kyb-commercial-lead-enricher.blueprint.json` (Scenarios → Create new → ⋯ → Import blueprint)
- n8n: `../n8n/au-abn-kyb-commercial-lead-enricher.workflow.json` (Workflows → Import from file)

## Setup
1. Create a free Apify account and copy your API token (Settings → API & Integrations).
2. Make: in the HTTP module, replace `YOUR_APIFY_TOKEN` in the Authorization header. n8n: create a *Header Auth* credential with name `Authorization` and value `Bearer <token>`.
3. Create a Google Sheet with a tab named `Results` and this header row:
   `abn | legalEntityName | abnStatus | gstRegistered | entityType | state | postcode | domain | kybRiskTier | kybVerificationScore | commercialLeadScore | roleEmails`
4. Connect your Google account in the Google Sheets module/node and pick the spreadsheet.
5. Edit the input JSON (`targets`) with your own domains, then run.

## Notes
- Uses Apify's `run-sync-get-dataset-items` endpoint (waits up to 300 seconds). For lists of more than about 50 domains, start the run asynchronously and fetch the dataset when it finishes.
- List fields are joined with commas so they fit in one cell.
- Pricing is pay-per-result. See the [Store page](https://apify.com/ausbizstack/au-abn-kyb-commercial-lead-enricher) for current rates.
- Before you submit these templates anywhere, import them once and do a test run. Blueprints are hand-written JSON.
