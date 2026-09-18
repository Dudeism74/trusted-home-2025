# Trusted Home Essentials project status

Updated September 18, 2026. Read this handoff before making changes.

## Canonical property

The public site is https://www.trustedhomeessentials.com. Source is `Dudeism74/trusted-home-2025`, branch `main`. Production is the Vercel project `trusted-home-2025` in `dudes-projects-dd781c02`. Do not migrate the site to a different host or replace its stack during routine repairs.

The repository retains the Sites/Vinext build path and Cloudflare D1 schema. Vercel production builds Next.js 16 with `VERCEL=1`; its Node runtime does not provide `cloudflare:workers`, D1 bindings, or the Sites authentication proxy.

## Verified baseline

The verified production baseline is commit `27f662876bd34634e8ef48a5e4ebe522f55502a5`, merged through PR 12 and deployed READY as `dpl_45GcugVrzFNn5RBNBaaW5yaGKarj`. Public readback on September 14 returned that exact commit from `/api/version`. The sitemap contains 34 current URLs. Both the apex domain and the `www` hostname are attached to the production deployment, with the apex redirecting to `www`. Analytics remains configured with the existing public measurement ID `G-C48XPCKD7E`. Source presence is not proof of event receipt, indexing, traffic, or conversion.

`/ads.txt` publicly returns the verified Google publisher record for `pub-2173466789348999`. The root layout also carries the AdSense account meta tag and AdSense bootstrap script for `ca-pub-2173466789348999` so Google can verify the site through more than one supported method. No manual display-ad units are intentionally placed. Treat site verification, AdSense approval, and later ad placement as separate checks.

Private dashboard evidence, approvals, social drafts, operating schedules, and the full audit are maintained in the owner's September 8 property audit, rather than this public repository.

## September 8 repairs

The September 8 repair gives Vercel readers a direct business contact at `trustedessentialsgpt@gmail.com`, restores a real `/contact` page, and puts it in the sitemap. It pauses unsupported newsletter/comment forms on Vercel with truthful API errors, preserves the original Sites forms and D1 data model, rejects untrusted Sites identity headers on Vercel, and fixes the asynchronous form-reset bug in the retained clients. Campaign disclosures no longer imply that an expired Creator Connections campaign is still active. The same repair keeps evergreen products visible after campaign expiry, consolidates PM20 specifications, features the documented oven repair and historically useful window/fan guides, and prevents misleading automatic internal links. Its publication and production behavior were subsequently verified.

## September 14 release

PR 12 strengthened two existing seasonal guides instead of adding generic pages. The window-draft guide now maps operable-sash, stationary-seam, and rough-opening findings to the appropriate repair. The bathroom-fan sizing guide now explains certified airflow and realistic duct resistance. Both pages show September 14 review metadata and matching sitemap `lastmod` dates. The release did not create or remove URLs, change affiliate tracking, or add display ads.

## September 18 AdSense review repair

The September 9 AdSense notice said the site had been deactivated because ownership could not be verified within seven days. After the public `ads.txt` record and Search Console ownership were restored, Google completed a new review and sent a September 18 notice that the site still needed attention. The email itself did not identify a page-level policy violation.

This repair adds the AdSense account meta tag and Google AdSense bootstrap script to the site-wide head, keeps the verified `ads.txt` record, and explicitly permits `Mediapartners-Google` and `Google-Display-Ads-Bot` in `robots.txt`. The privacy page now discloses Google advertising cookies, personalized-ad choices, and opt-out links before ad serving is enabled. This repair does not add manual ad units or change the light-advertising plan.

After deployment, verify the production HTML contains the AdSense account meta tag and publisher-specific script, confirm `/ads.txt` still returns the publisher record, confirm `/robots.txt` exposes the AdSense crawler rules, and recheck the AdSense Sites page before requesting another review. If AdSense shows a specific content or policy reason in the account, treat that account detail as controlling over generic approval guidance.

## Remaining work

Restore newsletter/comments only after choosing and validating a supported production database, secure authentication, moderation, delivery and unsubscribe flows. Do not enable the old header-trusting admin handlers merely because a database is connected. Preserve existing records; this repair does not delete or migrate data.

Finish page-level Search Console review and legacy URL mapping before changing redirects or retiring more content. The site retired unknown root URLs with 410 responses on August 10, then restored several exact legacy URLs on August 27. Preserve useful existing URLs and separate migration history from the current site's performance.

Focus editorial growth on Jim's documented repairs and useful homeowner decisions. Keep sourced facts separate from inference; never invent firsthand product tests. Preserve verified Amazon links and tracking tags unless a replacement is verified. Do not remove evergreen guides because a private affiliate campaign expires.

## Validation and release

Use the existing package lock. A Vercel check uses `VERCEL=1 npm run build`, then starts the resulting Next.js build with `VERCEL=1` and runs `THE_TEST_BASE_URL=http://127.0.0.1:3000 node --test tests/vercel-runtime.test.mjs`. The loopback restriction protects production from test submissions. The existing `npm test` targets Sites/Vinext worker output, not the Vercel runtime.

Review the diff, record the commit, let the normal GitHub/Vercel production flow finish, then check `/api/version`, key pages, sitemap, forms fallback, and tracking. The September 14 release passed lint, a clean Sites/Vinext build with 16 rendered-page tests, the Vercel Next.js build with 44 generated routes, and four loopback runtime checks. Production readback confirmed the exact release commit, both revised page sections and review dates, a 34-URL sitemap with matching `lastmod` values, and the public `ads.txt` record.

The IndexNow workflow waits until production reports its exact commit before submitting the sitemap URLs. Search submission is not a guarantee of indexing or ranking.
