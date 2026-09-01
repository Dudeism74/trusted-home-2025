import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const googleVerificationToken =
  "FlYTM9Sap79Z8WW7NmGJ1S3UTSU3h8Z-Km5IcBDWcGw";
const googleVerificationFile =
  "google-site-verification: google7d9b156696884744.html";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then((module) => module.default);

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
      redirect: "manual",
    }),
    env,
    ctx,
  );
}

test("renders the homepage without obsolete keyword metadata", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /<meta[^>]+\bname=["']keywords["'][^>]*>/i);
  assert.match(html, /href=["']\/guides["']/i);
  assert.match(html, /Dreame PM20/i);
  assert.doesNotMatch(html, /Shark WANDVAC WV201/i);
  assert.match(html, /CJt53jFYSRyQWMHHfozm12/i);
  assert.match(html, /https:\/\/bzrcdn\.openai\.com\/sdk\/oaiq\.min\.js/i);
  assert.match(
    html,
    new RegExp(
      `<meta(?=[^>]*\\bname=["']google-site-verification["'])(?=[^>]*\\bcontent=["']${googleVerificationToken}["'])[^>]*>`,
      "i",
    ),
  );
});

test("packages the permanent Google Search Console verification file", async () => {
  const contents = await readFile(
    new URL(
      "../dist/client/google7d9b156696884744.html",
      import.meta.url,
    ),
    "utf8",
  );

  assert.equal(contents.trim(), googleVerificationFile);
});

test("renders a dedicated buying guide directory", async () => {
  const response = await render("/guides");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Buying guide library/i);
  assert.match(html, /Solo Stove Pi Prime/i);
  assert.match(html, /Dreame A3 AWD Pro 3500/i);
  assert.match(html, /LABIGO Portable Carpet Cleaner/i);
  assert.match(html, /Shark WANDVAC WV201/i);
  assert.match(html, /Cosori TWINFRY 9 Qt/i);
  assert.match(html, /The First 5 Cordless Power Tools for Home DIY/i);
  assert.match(
    html,
    /<link[^>]+\brel=["']canonical["'][^>]+\bhref=["']https:\/\/www\.trustedhomeessentials\.com\/guides["']/i,
  );
});

test("LABIGO guide preserves Creator Connections attribution and evidence limits", async () => {
  const response = await render("/guides/labigo-portable-carpet-cleaner");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /LABIGO Portable Carpet Cleaner/i);
  assert.match(html, /B0FNRPHPLD/i);
  assert.match(html, /amzn1\.campaign\.3P9W9BCD0E7W9/i);
  assert.match(
    html,
    /amzn1\.campaign\.3P9W9BCD0E7W9_1786997235871/i,
  );
  assert.match(html, /labigoweb-20/i);
  assert.match(html, /specification based assessment/i);
  assert.match(html, /not a hands on cleaning test/i);
  assert.match(html, /Amazon Creator Connections campaign/i);
  assert.match(
    html,
    /<link[^>]+\brel=["']canonical["'][^>]+\bhref=["']https:\/\/www\.trustedhomeessentials\.com\/guides\/labigo-portable-carpet-cleaner["']/i,
  );
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /"@type":"BreadcrumbList"/i);
  assert.match(html, /"@type":"FAQPage"/i);
});

test("guide HTML has a useful comment fallback before JavaScript loads", async () => {
  const response = await render("/guides/solo-stove-pi-prime");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.doesNotMatch(html, /Loading comments\.\.\./i);
  assert.match(html, /No published comments yet/i);
  assert.match(
    html,
    /https:\/\/www\.trustedhomeessentials\.com\/guides\/solo-stove-pi-prime/i,
  );
  assert.match(html, /data-product-name=["']Solo Stove Pi Prime["']/i);
  assert.match(html, /data-amazon-asin=["']B0FNPPGKHW["']/i);
});

test("privacy page discloses OpenAI Ads conversion measurement", async () => {
  const response = await render("/privacy");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /OpenAI Ads measurement pixel/i);
  assert.match(html, /clicks from our guides to Amazon/i);
  assert.match(html, /Automatic advanced matching is enabled/i);
  assert.match(html, /Raw contact information is not sent to OpenAI/i);
  assert.match(html, /does not tell Trusted Home Essentials.*purchases on Amazon/is);
});

test("Cosori guide keeps the accepted campaign attribution and editorial disclosure", async () => {
  const response = await render("/guides/cosori-twinfry-9qt");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Cosori TWINFRY 9 Qt/i);
  assert.match(html, /B0GLX9TGJV/i);
  assert.match(html, /amzn1\.campaign\.3RW31B8BPFG3K/i);
  assert.match(html, /myfinancials-20/i);
  assert.match(html, /not a hands-on cooking test/i);
  assert.match(
    html,
    /https:\/\/cosori\.com\/products\/cosori-twinfry-9-quart-double-air-fryer/i,
  );
});

test("legacy equivalents use permanent redirects", async () => {
  const redirects = new Map([
    ["/articles", "/troubleshooting"],
    ["/our-blog", "/guides"],
    ["/privacy-policy", "/privacy"],
    ["/contact", "/about"],
    ["/home", "/"],
    ["/guides/dreame-z1-pro", "/guides/dreame-a3-awd-pro"],
  ]);

  for (const [pathname, destination] of redirects) {
    const response = await render(pathname);
    assert.equal(response.status, 308, pathname);
    assert.equal(
      new URL(response.headers.get("location"), "http://localhost").pathname,
      destination,
      pathname,
    );
  }
});

test("unrelated retired root articles return Gone instead of soft redirecting", async () => {
  const response = await render("/retired-example-article");
  assert.equal(response.status, 410);
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("x-robots-tag"), "noindex");
});

test("sitemap includes every current resource and buying guide", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();
  const urls = xml.match(/<url>/g) ?? [];

  assert.equal(response.status, 200);
  assert.equal(urls.length, 33);
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides\/dreame-a3-awd-pro<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides\/shark-wandvac-wv201<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides\/labigo-portable-carpet-cleaner<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides\/cosori-twinfry-9qt<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/essential-cordless-power-tools-diyers<\/loc>/i,
  );
  assert.match(
    xml,
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/home-maintenance-checklist<\/loc>/i,
  );
});

test("renders the printable monthly home maintenance checklist", async () => {
  const response = await render("/home-maintenance-checklist");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Home maintenance checklist by month/i);
  assert.match(html, /Print or save as PDF/i);
  assert.match(html, /What maintenance should you do every month\?/i);
  assert.match(html, /January: Heating, vents, and cold-weather leaks/i);
  assert.match(html, /December: Annual records and deferred repairs/i);
  assert.match(html, /Source-backed and ungated/i);
  assert.doesNotMatch(html, /pinterest1-2025-20/i);
  assert.doesNotMatch(html, /Browse options on Amazon/i);
  assert.match(html, /usfa\.fema\.gov\/prevention\/home-fires/i);
  assert.match(html, /energystar\.gov\/saveathome\/heating-cooling/i);
  assert.match(html, /epa\.gov\/radon/i);
  assert.match(
    html,
    /<meta[^>]+\bproperty=["']og:image["'][^>]+home-maintenance-checklist-social-2026\.webp/i,
  );
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /"@type":"BreadcrumbList"/i);
  assert.match(html, /"@type":"ItemList"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(
    html,
    /<link[^>]+\brel=["']canonical["'][^>]+\bhref=["']https:\/\/www\.trustedhomeessentials\.com\/home-maintenance-checklist["']/i,
  );
});

test("renders the restored cordless power tool guide with visible evidence limits", async () => {
  const response = await render("/essential-cordless-power-tools-diyers");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /The First 5 Cordless Power Tools for Home DIY/i);
  assert.match(html, /No cordless tool lasts forever/i);
  assert.match(html, /Cordless drill\/driver/i);
  assert.match(html, /Cordless impact driver/i);
  assert.match(html, /Cordless circular saw/i);
  assert.match(html, /Cordless jigsaw/i);
  assert.match(html, /Cordless oscillating multi-tool/i);
  assert.match(html, /Affiliate disclosure/i);
  assert.match(html, /B00IJ0ALYS/i);
  assert.match(html, /pinterest1-2025-20/i);
  assert.match(html, /a1412bcb6c417073a66110ccc7adddde/i);
  assert.match(
    html,
    /<a(?=[^>]*\bdata-amazon-asin=["']B00IJ0ALYS["'])(?=[^>]*\brel=["'][^"']*sponsored[^"']*nofollow[^"']*["'])[^>]*>/i,
  );
  assert.match(html, /has not completed hands-on testing of this kit/i);
  assert.match(html, /not evidence of hands-on testing of a particular model/i);
  assert.match(html, /may limit runtime in higher-demand saw use/i);
  assert.match(html, /powertoolinstitute\.com/i);
  assert.match(html, /cpsc\.gov\/Recalls/i);
  assert.match(
    html,
    /<meta[^>]+\bproperty=["']og:image["'][^>]+home-diy-cordless-power-tools\.webp/i,
  );
  assert.match(
    html,
    /<meta[^>]+\bname=["']twitter:card["'][^>]+\bcontent=["']summary_large_image["']/i,
  );
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /"@type":"BreadcrumbList"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.doesNotMatch(html, /"@type":"Product"/i);
  assert.doesNotMatch(html, /"@type":"Review"/i);
  assert.match(
    html,
    /<link[^>]+\brel=["']canonical["'][^>]+\bhref=["']https:\/\/www\.trustedhomeessentials\.com\/essential-cordless-power-tools-diyers["']/i,
  );
});

test("llms text exposes the restored cordless power tool guide", async () => {
  const response = await render("/llms.txt");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    body,
    /https:\/\/www\.trustedhomeessentials\.com\/essential-cordless-power-tools-diyers/i,
  );
  assert.match(body, /Cordless power tool guide reviewed: August 30, 2026/i);
  assert.match(
    body,
    /https:\/\/www\.trustedhomeessentials\.com\/home-maintenance-checklist/i,
  );
  assert.match(body, /Home maintenance checklist published: September 1, 2026/i);
});

test("comments API accepts the restored cordless power tool guide slug", async () => {
  const response = await render(
    "/api/comments/essential-cordless-power-tools-diyers",
  );
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, { comments: [] });
});
