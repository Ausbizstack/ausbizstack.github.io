# Agent-Readiness Auditor | poppy.json, llms.txt & MCP Checker → Google Sheets (Make and n8n)

Runs the [Agent-Readiness Auditor | poppy.json, llms.txt & MCP Checker](https://apify.com/ausbizstack/agent-readiness-bulk-auditor) Apify Actor on a list of inputs and appends one row per result to a Google Sheet.

## Files
- Make: `../make/agent-readiness-bulk-auditor.blueprint.json` (Scenarios → Create new → ⋯ → Import blueprint)
- n8n: `../n8n/agent-readiness-bulk-auditor.workflow.json` (Workflows → Import from file)

## Setup
1. Create a free Apify account and copy your API token (Settings → API & Integrations).
2. Make: in the HTTP module, replace `YOUR_APIFY_TOKEN` in the Authorization header. n8n: create a *Header Auth* credential with name `Authorization` and value `Bearer <token>`.
3. Create a Google Sheet with a tab named `Results` and this header row:
   `domain | status | agentReadinessScore | grade | checksPassed | checksVerified | poppyJsonStatus | hasLlmsTxt | hasMcpDiscovery | hasA2aAgentCard | hasOpenApi | topFix | isLead | durationMs | errorMessage`
4. Connect your Google account in the Google Sheets module/node and pick the spreadsheet.
5. Edit the input JSON with your own URLs or domains, then run.

## Notes
- Uses Apify's `run-sync-get-dataset-items` endpoint (waits up to 300 seconds). For larger batches, start the run asynchronously and fetch the dataset when it finishes.
- List fields are joined with commas so they fit in one cell.
- Pricing is pay-per-result. See the [Store page](https://apify.com/ausbizstack/agent-readiness-bulk-auditor) for current rates.
- Before you submit these templates anywhere, import them once and do a test run. Blueprints are hand-written JSON.
