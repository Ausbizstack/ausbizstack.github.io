# AusBizStack Make and n8n templates

Each template calls one AusBizStack Apify Actor and appends the results to Google Sheets.

| Actor | Make | n8n | README |
|---|---|---|---|
| [Tech Stack Detector & Contact Enrichment (Bulk)](https://apify.com/ausbizstack/b2b-tech-stack-contact-abn-enricher) | [blueprint](make/b2b-tech-stack-contact-abn-enricher.blueprint.json) | [workflow](n8n/b2b-tech-stack-contact-abn-enricher.workflow.json) | [setup](b2b-tech-stack-contact-abn-enricher/README.md) |
| [llms.txt Generator & GEO Audit for AI Search](https://apify.com/ausbizstack/ai-geo-llms-txt-auditor) | [blueprint](make/ai-geo-llms-txt-auditor.blueprint.json) | [workflow](n8n/ai-geo-llms-txt-auditor.workflow.json) | [setup](ai-geo-llms-txt-auditor/README.md) |
| [DMARC, SPF & DKIM Checker – Bulk Domain Audit](https://apify.com/ausbizstack/b2b-email-security-dmarc-spf-auditor) | [blueprint](make/b2b-email-security-dmarc-spf-auditor.blueprint.json) | [workflow](n8n/b2b-email-security-dmarc-spf-auditor.workflow.json) | [setup](b2b-email-security-dmarc-spf-auditor/README.md) |
| [ABN Lookup Australia – Bulk ABN & KYB Checker](https://apify.com/ausbizstack/au-abn-kyb-commercial-lead-enricher) | [blueprint](make/au-abn-kyb-commercial-lead-enricher.blueprint.json) | [workflow](n8n/au-abn-kyb-commercial-lead-enricher.workflow.json) | [setup](au-abn-kyb-commercial-lead-enricher/README.md) |
| [Shopify Store Tech Stack & Apps Detector](https://apify.com/ausbizstack/shopify-ecommerce-tech-pixel-auditor) | [blueprint](make/shopify-ecommerce-tech-pixel-auditor.blueprint.json) | [workflow](n8n/shopify-ecommerce-tech-pixel-auditor.workflow.json) | [setup](shopify-ecommerce-tech-pixel-auditor/README.md) |
| [ATS Detector & Careers Page Hiring Signals](https://apify.com/ausbizstack/b2b-hiring-intent-ats-careers-enricher) | [blueprint](make/b2b-hiring-intent-ats-careers-enricher.blueprint.json) | [workflow](n8n/b2b-hiring-intent-ats-careers-enricher.workflow.json) | [setup](b2b-hiring-intent-ats-careers-enricher/README.md) |
| [SaaS Pricing Page Scraper & Plan Tier Auditor](https://apify.com/ausbizstack/b2b-saas-pricing-tier-plg-auditor) | [blueprint](make/b2b-saas-pricing-tier-plg-auditor.blueprint.json) | [workflow](n8n/b2b-saas-pricing-tier-plg-auditor.workflow.json) | [setup](b2b-saas-pricing-tier-plg-auditor/README.md) |
| [Store Locator Scraper: Franchise Location Counter](https://apify.com/ausbizstack/multi-location-franchise-footprint-mapper) | [blueprint](make/multi-location-franchise-footprint-mapper.blueprint.json) | [workflow](n8n/multi-location-franchise-footprint-mapper.workflow.json) | [setup](multi-location-franchise-footprint-mapper/README.md) |
| [Website Screenshot API – Bulk Full-Page, Mobile & PDF](https://apify.com/ausbizstack/website-screenshot-api) | [blueprint](make/website-screenshot-api.blueprint.json) | [workflow](n8n/website-screenshot-api.workflow.json) | [setup](website-screenshot-api/README.md) |
| [Company Enrichment by Domain – B2B Company Card](https://apify.com/ausbizstack/company-enrichment-by-domain) | [blueprint](make/company-enrichment-by-domain.blueprint.json) | [workflow](n8n/company-enrichment-by-domain.workflow.json) | [setup](company-enrichment-by-domain/README.md) |
| [Agent-Readiness Auditor &#124; poppy.json, llms.txt & MCP Checker](https://apify.com/ausbizstack/agent-readiness-bulk-auditor) | [blueprint](make/agent-readiness-bulk-auditor.blueprint.json) | [workflow](n8n/agent-readiness-bulk-auditor.workflow.json) | [setup](agent-readiness-bulk-auditor/README.md) |

## Where these could be submitted (NOT submitted)
- Make: the public templates gallery (make.com/en/templates), submitted through Make's template creator/partner programme. Make reviews each template, and you may need a verified Make account.
- n8n: the n8n.io workflow library through the n8n Creator Hub (creators.n8n.io). Your workflow needs a description and has to pass review.
- n8n community forum: the "Built with n8n" category (community.n8n.io).
- Apify: the Integrations section of each Actor (Make/n8n/Zapier/Clay links), the Apify Discord #show-and-tell channel and the Apify blog guest posts programme.
- Clay: the Clay community templates / HTTP API enrichment recipes, if a Clay version gets built.
- GitHub: the ausbizstack.github.io site (#templates), plus awesome-n8n / awesome-make style lists.
