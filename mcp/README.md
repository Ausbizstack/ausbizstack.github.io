# AusBizStack MCP presets

Copy-paste MCP configs that give Claude, Cursor, VS Code or any MCP client a focused set of AusBizStack tools. Each preset points the official hosted [Apify MCP server](https://docs.apify.com/platform/integrations/mcp) at specific AusBizStack Actors using its documented `?tools=` URL parameter.

> **Disclosure:** AusBizStack builds and sells these Actors on Apify Store ([apify.com/ausbizstack](https://apify.com/ausbizstack)). They are pay-per-event and bill to your own Apify account. The MCP server itself is run by Apify; this folder only contains client configs and registry metadata, and is not affiliated with or endorsed by Apify.

| Preset | Actors | Endpoint |
|---|---|---|
| [AusBizStack Website Audit](website-audit/) | 3 | `https://mcp.apify.com/?tools=ausbizstack/lighthouse-core-web-vitals-bulk-auditor,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/ai-geo-llms-txt-auditor` |
| [AusBizStack B2B Enrichment](b2b-enrichment/) | 6 | `https://mcp.apify.com/?tools=ausbizstack/company-enrichment-by-domain,ausbizstack/b2b-tech-stack-contact-abn-enricher,ausbizstack/b2b-email-security-dmarc-spf-auditor,ausbizstack/au-abn-kyb-commercial-lead-enricher,ausbizstack/b2b-hiring-intent-ats-careers-enricher,ausbizstack/shopify-ecommerce-tech-pixel-auditor` |
| [AusBizStack Actors (all 12)](all/) | 12 | `https://mcp.apify.com/?tools=ausbizstack/b2b-tech-stack-contact-abn-enricher,ausbizstack/ai-geo-llms-txt-auditor,ausbizstack/b2b-email-security-dmarc-spf-auditor,ausbizstack/au-abn-kyb-commercial-lead-enricher,ausbizstack/shopify-ecommerce-tech-pixel-auditor,ausbizstack/b2b-hiring-intent-ats-careers-enricher,ausbizstack/b2b-saas-pricing-tier-plg-auditor,ausbizstack/multi-location-franchise-footprint-mapper,ausbizstack/website-screenshot-api,ausbizstack/company-enrichment-by-domain,ausbizstack/agent-readiness-bulk-auditor,ausbizstack/lighthouse-core-web-vitals-bulk-auditor` |

Each folder has `cursor.mcp.json`, `vscode.mcp.json`, `claude_desktop_config.json`, a README and a `server.json` for the [official MCP Registry](https://registry.modelcontextprotocol.io/).

Never commit your Apify token.
