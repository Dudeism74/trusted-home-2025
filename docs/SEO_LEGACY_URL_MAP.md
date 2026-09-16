# THE legacy URL disposition map

Last reviewed: 2026-09-16

This map records the post-rebuild treatment of legacy Trusted Home Essentials URLs that Google Search Console has continued to surface. The rule is intentionally strict: use a permanent redirect only when the current site has a direct replacement for the old URL. Retired pages without a direct replacement remain HTTP 410 through `app/[legacySlug]/route.ts`; they are not soft-redirected to the homepage or a loosely related article.

| Legacy URL | Current disposition | Destination / reason |
| --- | --- | --- |
| `/articles` | Permanent redirect | `/troubleshooting` |
| `/privacy-policy` | Permanent redirect | `/privacy` |
| `/home` | Permanent redirect | `/` |
| `/our-blog` | Permanent redirect | `/guides` |
| `/guides/dreame-z1-pro` | Permanent redirect | `/guides/dreame-a3-awd-pro` |
| `/the-2025-home-maintenance-checklist-a-mechanic-s-seasonal-schedule` | Permanent redirect | `/home-maintenance-checklist`; direct replacement of the former seasonal maintenance checklist |
| `/kitchenaid-top-rack-metal-kit-fix` | 410 Gone | No direct current replacement |
| `/beginners-guide-installing-solar-panels` | 410 Gone | No direct current replacement |
| `/declutter-kitchen-counters-space-saving-organizers` | 410 Gone | No direct current replacement |
| `/diagnosing-a-bad-refrigerator-compressor` | 410 Gone | The current refrigerator troubleshooting page is broader and intentionally avoids assuming compressor failure; it is not the same article |
| `/eco-friendly-home-garden-sustainable-planting-tips` | 410 Gone | No direct current replacement |
| `/eco-friendly-pest-control-natural-ways-to-keep-bugs-out-of-your-home` | 410 Gone | No direct current replacement |
| `/fix-leaking-roof-before-storm` | 410 Gone | No direct current replacement |
| `/fixing-a-wobbly-ceiling-fan` | 410 Gone | No direct current replacement |
| `/ge-gas-oven-not-heating-fix` | 410 Gone | The current hands-on oven case is a different Whirlpool model and should not inherit a GE-specific URL |
| `/how-to-unclog-a-jammed-garbage-disposal-without-a-plumber` | 410 Gone | No direct current replacement |
| `/install-smart-thermostat-without-c-wire` | 410 Gone | No direct current replacement |
| `/install-wireless-video-doorbell-no-wiring` | 410 Gone | No direct current replacement |
| `/perfect-tv-mount-guide` | 410 Gone | No direct current replacement |
| `/repair-drywall-cracks-before-painting` | 410 Gone | No direct current replacement |
| `/replace-single-pole-light-switch-beginner-guide` | 410 Gone | No direct current replacement |
| `/ring-vs-blink-best-video-doorbells-for-renters` | 410 Gone | No direct current replacement |
| `/roborock-s8-review-why-this-460-robot-beats-the-1000-models` | 410 Gone | No direct current replacement |
| `/samsung-dryer-heating-element-replacement-guide` | 410 Gone | The current dryer troubleshooting page is broader and not a Samsung heating-element replacement procedure |
| `/smart-home-devices-save-money` | 410 Gone | No direct current replacement |
| `/smart-home-security-systems-comparison-guide` | 410 Gone | No direct current replacement |
| `/the-best-cordless-drill-for-homeowners-a-mechanic-s-2025-recommendation` | 410 Gone | The current five-tool cordless guide is broader and is not a replacement review of one drill |
| `/the-best-shop-vacs-for-homeowners-heavy-duty-vs-portable` | 410 Gone | No direct current replacement |
| `/the-no-nonsense-homeowner-toolkit-5-tools-you-actually-need` | 410 Gone | The current cordless-power-tool guide covers a different tool set and search intent |
| `/whirlpool-washer-error-f7e1-sensor-swap` | 410 Gone | The current washer-drain guide covers a different failure mode |

## Verification notes

On 2026-09-16, the production Vercel deployment for the maintenance-checklist redirect completed successfully. Representative retired URLs including the GE oven page, Samsung dryer page, and homeowner-toolkit page returned HTTP 410 with `X-Robots-Tag: noindex`. Search Console's stored URL-inspection state may continue to show older crawl results until Google recrawls these URLs.
