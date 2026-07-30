import assert from "node:assert/strict";
import test from "node:test";

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
});

test("renders a dedicated buying guide directory", async () => {
  const response = await render("/guides");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Buying guide library/i);
  assert.match(html, /Solo Stove Pi Prime/i);
  assert.match(html, /Dreame A3 AWD Pro 3500/i);
  assert.match(html, /Shark WANDVAC WV201/i);
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

test("unrelated retired articles remain not found instead of soft redirecting", async () => {
  const response = await render("/fix-leaking-kitchen-faucet-guide");
  assert.equal(response.status, 404);
  assert.equal(response.headers.get("location"), null);
});

test("sitemap includes the guide directory and five current guides", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();
  const urls = xml.match(/<url>/g) ?? [];

  assert.equal(response.status, 200);
  assert.equal(urls.length, 11);
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
});
