# Trusted Home Essentials project status

Updated September 8, 2026. Read this handoff before making changes.

## Canonical property

The public site is https://www.trustedhomeessentials.com. Source is `Dudeism74/trusted-home-2025`, branch `main`. Production is the Vercel project `trusted-home-2025` in `dudes-projects-dd781c02`. Do not migrate the site to a different host or replace its stack during routine repairs.

The repository retains the Sites/Vinext build path and Cloudflare D1 schema. Vercel production builds Next.js 16 with `VERCEL=1`; its Node runtime does not provide `cloudflare:workers`, D1 bindings, or the Sites authentication proxy.

## Verified baseline

The production baseline observed September 8 was `74cf33cf40db4298b3afd65e6a6ffdb069df2013`, deployed successfully in Vercel. The prior source sitemap contained 33 URLs. Analytics remains configured with the existing public measurement ID `G-C48XPCKD7E`. Source presence is not proof of event receipt, indexing, traffic, or conversion.

Private dashboard evidence, approvals, social drafts, operating schedules, and the full audit are maintained in the owner's September 8 property audit, rather than this public repository.

## September 8 repairs

The local repair candidate gives Vercel readers a direct business contact at `trustedessentialsgpt@gmail.com`, restores a real `/contact` page, and puts it in the sitemap. It pauses unsupported newsletter/comment forms on Vercel with truthful API errors, preserves the original Sites forms and D1 data model, rejects untrusted Sites identity headers on Vercel, and fixes the asynchronous form-reset bug in the retained clients. Campaign disclosures no longer imply that an expired Creator Connections campaign is still active. The same repair keeps evergreen products visible after campaign expiry, consolidates PM20 specifications, features the documented oven repair and historically useful window/fan guides, and prevents misleading automatic internal links. Publication and post-deployment verification must be recorded after they actually occur.

## Remaining work

Restore newsletter/comments only after choosing and validating a supported production database, secure authentication, moderation, delivery and unsubscribe flows. Do not enable the old header-trusting admin handlers merely because a database is connected. Preserve existing records; this repair does not delete or migrate data.

Finish page-level Search Console review and legacy URL mapping before changing redirects or retiring more content. The site retired unknown root URLs with 410 responses on August 10, then restored several exact legacy URLs on August 27. Preserve useful existing URLs and separate migration history from the current site's performance.

Focus editorial growth on Jim's documented repairs and useful homeowner decisions. Keep sourced facts separate from inference; never invent firsthand product tests. Preserve verified Amazon links and tracking tags unless a replacement is verified. Do not remove evergreen guides because a private affiliate campaign expires.

## Validation and release

Use the existing package lock. A Vercel check uses `VERCEL=1 npm run build`, then starts the resulting Next.js build with `VERCEL=1` and runs `THE_TEST_BASE_URL=http://127.0.0.1:3000 node --test tests/vercel-runtime.test.mjs`. The loopback restriction protects production from test submissions. The existing `npm test` targets Sites/Vinext worker output, not the Vercel runtime.

Review the diff, record the commit, let the normal GitHub/Vercel production flow finish, then check `/api/version`, key pages, sitemap, forms fallback, and tracking. The IndexNow workflow waits until production reports its exact commit before submitting the sitemap URLs. Search submission is not a guarantee of indexing or ranking.
