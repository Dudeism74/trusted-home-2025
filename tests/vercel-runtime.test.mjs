import assert from "node:assert/strict";
import test from "node:test";

// Run against a local Next.js server built and started with VERCEL=1.
// Loopback-only prevents test submissions reaching a production database.
const base = new URL(process.env.THE_TEST_BASE_URL ?? "http://127.0.0.1:3000");
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(base.hostname));

const request = (path, options) => fetch(new URL(path, base), options);

test("Vercel pages offer direct contact without unsupported forms", async () => {
  for (const path of ["/", "/guides/solo-stove-pi-prime"]) {
    const response = await request(path);
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.match(html, /Newsletter signup is paused/);
    assert.match(html, /mailto:trustedessentialsgpt@gmail\.com/);
    assert.doesNotMatch(html, /name="(?:email|body|website)"/);
  }
});

test("unsupported Vercel submissions and reads return a truthful unavailable status", async () => {
  for (const [path, method] of [
    ["/api/newsletter", "POST"],
    ["/api/comments/solo-stove-pi-prime", "POST"],
    ["/api/comments/solo-stove-pi-prime", "GET"],
  ]) {
    const response = await request(path, { method });
    assert.equal(response.status, 503, `${method} ${path}`);
    const result = await response.json();
    assert.match(result.error, /paused/);
    assert.equal(response.headers.get("cache-control"), "no-store");
  }
});

test("Vercel rejects a spoofed Sites identity header for moderation", async () => {
  const response = await request("/api/admin/comments/1", {
    method: "POST",
    headers: { "oai-authenticated-user-email": "jarlof1974@yahoo.com" },
  });
  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { error: "Not authorized." });
});

test("contact is indexable and included once in the sitemap", async () => {
  const response = await request("/contact");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /rel="canonical" href="https:\/\/www\.trustedhomeessentials\.com\/contact"/);
  const sitemap = await (await request("/sitemap.xml")).text();
  assert.equal((sitemap.match(/<loc>https:\/\/www\.trustedhomeessentials\.com\/contact<\/loc>/g) ?? []).length, 1);
});
