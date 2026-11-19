# AusBizStack Website Audit

Bulk Lighthouse/Core Web Vitals, AI agent-readiness and llms.txt audits via Apify Actors.

Endpoint (official hosted Apify MCP server, preloaded with these Actors):

```text
https://mcp.apify.com/?tools=ausbizstack/lighthouse-core-web-vitals-bulk-auditor,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/ai-geo-llms-txt-auditor
```

## Tools
- [`ausbizstack--lighthouse-core-web-vitals-bulk-auditor`](https://apify.com/ausbizstack/lighthouse-core-web-vitals-bulk-auditor)
- [`ausbizstack--agent-readiness-bulk-auditor`](https://apify.com/ausbizstack/agent-readiness-bulk-auditor)
- [`ausbizstack--ai-geo-llms-txt-auditor`](https://apify.com/ausbizstack/ai-geo-llms-txt-auditor)

Plus Apify's run helpers: `get-actor-run`, `get-dataset-items`, `get-key-value-store-record`, `abort-actor-run`.

## Connect
- **Cursor:** copy `cursor.mcp.json` into `.cursor/mcp.json`.
- **VS Code (Copilot):** copy `vscode.mcp.json` into `.vscode/mcp.json`.
- **Claude Desktop:** merge `claude_desktop_config.json` (uses the `mcp-remote` stdio bridge).
- **Claude Code:** `claude mcp add --transport http ausbizstack-website-audit "https://mcp.apify.com/?tools=ausbizstack/lighthouse-core-web-vitals-bulk-auditor,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/ai-geo-llms-txt-auditor"`

Sign in to Apify with OAuth when the client asks, or send `Authorization: Bearer <your Apify token>`. Without auth the endpoint answers HTTP 401.

## Pricing
Each Actor is pay-per-event and bills to your own Apify account at the price on its Store page. Failed, invalid and duplicate inputs are free. Apify's free plan includes monthly platform credit.

Verified on 20 Nov 2026: `initialize` and `tools/list` against `mcp.apify.com` (apify-mcp-server 0.21.12) returned the tools above.
