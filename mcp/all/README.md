# AusBizStack Actors (all 12)

All 12 AusBizStack Apify Actors: B2B enrichment, email security, AI readiness, page speed.

Endpoint (official hosted Apify MCP server, preloaded with these Actors):

```text
https://mcp.apify.com/?tools=ausbizstack/b2b-tech-stack-contact-abn-enricher,ausbizstack/ai-geo-llms-txt-auditor,ausbizstack/b2b-email-security-dmarc-spf-auditor,ausbizstack/au-abn-kyb-commercial-lead-enricher,ausbizstack/shopify-ecommerce-tech-pixel-auditor,ausbizstack/b2b-hiring-intent-ats-careers-enricher,ausbizstack/b2b-saas-pricing-tier-plg-auditor,ausbizstack/multi-location-franchise-footprint-mapper,ausbizstack/website-screenshot-api,ausbizstack/company-enrichment-by-domain,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/lighthouse-core-web-vitals-bulk-auditor
```

## Tools
- [`ausbizstack--b2b-tech-stack-contact-abn-enricher`](https://apify.com/ausbizstack/b2b-tech-stack-contact-abn-enricher)
- [`ausbizstack--ai-geo-llms-txt-auditor`](https://apify.com/ausbizstack/ai-geo-llms-txt-auditor)
- [`ausbizstack--b2b-email-security-dmarc-spf-auditor`](https://apify.com/ausbizstack/b2b-email-security-dmarc-spf-auditor)
- [`ausbizstack--au-abn-kyb-commercial-lead-enricher`](https://apify.com/ausbizstack/au-abn-kyb-commercial-lead-enricher)
- [`ausbizstack--shopify-ecommerce-tech-pixel-auditor`](https://apify.com/ausbizstack/shopify-ecommerce-tech-pixel-auditor)
- [`ausbizstack--b2b-hiring-intent-ats-careers-enricher`](https://apify.com/ausbizstack/b2b-hiring-intent-ats-careers-enricher)
- [`ausbizstack--b2b-saas-pricing-tier-plg-auditor`](https://apify.com/ausbizstack/b2b-saas-pricing-tier-plg-auditor)
- [`ausbizstack--multi-location-franchise-footprint-mapper`](https://apify.com/ausbizstack/multi-location-franchise-footprint-mapper)
- [`ausbizstack--website-screenshot-api`](https://apify.com/ausbizstack/website-screenshot-api)
- [`ausbizstack--company-enrichment-by-domain`](https://apify.com/ausbizstack/company-enrichment-by-domain)
- [`ausbizstack--agent-readiness-bulk-auditor`](https://apify.com/ausbizstack/agent-readiness-bulk-auditor)
- [`ausbizstack--lighthouse-core-web-vitals-bulk-auditor`](https://apify.com/ausbizstack/lighthouse-core-web-vitals-bulk-auditor)

Plus Apify's run helpers: `get-actor-run`, `get-dataset-items`, `get-key-value-store-record`, `abort-actor-run`.

## Connect
- **Cursor:** copy `cursor.mcp.json` into `.cursor/mcp.json`.
- **VS Code (Copilot):** copy `vscode.mcp.json` into `.vscode/mcp.json`.
- **Claude Desktop:** merge `claude_desktop_config.json` (uses the `mcp-remote` stdio bridge).
- **Claude Code:** `claude mcp add --transport http ausbizstack-all "https://mcp.apify.com/?tools=ausbizstack/b2b-tech-stack-contact-abn-enricher,ausbizstack/ai-geo-llms-txt-auditor,ausbizstack/b2b-email-security-dmarc-spf-auditor,ausbizstack/au-abn-kyb-commercial-lead-enricher,ausbizstack/shopify-ecommerce-tech-pixel-auditor,ausbizstack/b2b-hiring-intent-ats-careers-enricher,ausbizstack/b2b-saas-pricing-tier-plg-auditor,ausbizstack/multi-location-franchise-footprint-mapper,ausbizstack/website-screenshot-api,ausbizstack/company-enrichment-by-domain,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/lighthouse-core-web-vitals-bulk-auditor"`

Sign in to Apify with OAuth when the client asks, or send `Authorization: Bearer <your Apify token>`. Without auth the endpoint answers HTTP 401.

## Pricing
Each Actor is pay-per-event and bills to your own Apify account at the price on its Store page. Failed, invalid and duplicate inputs are free. Apify's free plan includes monthly platform credit.

Verified on 20 Nov 2026: `initialize` and `tools/list` against `mcp.apify.com` (apify-mcp-server 0.21.12) returned the tools above.
