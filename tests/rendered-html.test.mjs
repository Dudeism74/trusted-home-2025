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
  assert.match(html, /Shark WANDVAC WV201/i);
  assert.match(html, /Cosori TWINFRY 9 Qt/i);
  assert.match(
    html,
    /<link[^>]+\brel=["']canonical["'][^>]+\bhref=["']https:\/\/www\.trustedhomeessentials\.com\/guides["']/i,
  );
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
    ["/articles", "/guides"],
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
  const response = await render("/fix-leaking-kitchen-faucet-guide");
  assert.equal(response.status, 410);
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("x-robots-tag"), "noindex");
});

test("sitemap includes the guide directory and six current guides", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();
  const urls = xml.match(/<url>/g) ?? [];

  assert.equal(response.status, 200);
  assert.equal(urls.length, 12);
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
    /<loc>https:\/\/www\.trustedhomeessentials\.com\/guides\/cosori-twinfry-9qt<\/loc>/i,
  );
});
