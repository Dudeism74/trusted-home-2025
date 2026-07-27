const siteUrl = new URL(
  process.env.SITE_URL ?? "https://www.trustedhomeessentials.com",
);
const indexNowKey =
  process.env.INDEXNOW_KEY ?? "846b7de6164710998e38e105f5de8f7d";
const keyLocation = new URL(`/${indexNowKey}.txt`, siteUrl).href;
const sitemapUrl = new URL("/sitemap.xml", siteUrl).href;
const expectedCommit = process.env.GITHUB_SHA?.trim();
const isDryRun = process.env.INDEXNOW_DRY_RUN === "1";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForDeployment() {
  if (!expectedCommit || process.env.INDEXNOW_SKIP_DEPLOY_WAIT === "1") {
    return;
  }

  const versionUrl = new URL("/api/version", siteUrl);
  const attempts = 40;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(versionUrl, {
        headers: { "Cache-Control": "no-cache" },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.commit === expectedCommit) {
          console.log(`Production is running commit ${expectedCommit}.`);
          return;
        }
      }
    } catch {
      // The deployment can briefly be unavailable while Vercel switches versions.
    }

    console.log(
      `Waiting for production deployment (${attempt}/${attempts})...`,
    );
    await wait(15_000);
  }

  throw new Error(
    `Production did not report commit ${expectedCommit} within 10 minutes.`,
  );
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function getSitemapUrls() {
  const response = await fetch(sitemapUrl, {
    headers: { "Cache-Control": "no-cache" },
  });

  if (!response.ok) {
    throw new Error(
      `Could not load ${sitemapUrl}: ${response.status} ${response.statusText}`,
    );
  }

  const xml = await response.text();
  const apexHostname = siteUrl.hostname.replace(/^www\./, "");
  const acceptedHostnames = new Set([
    apexHostname,
    `www.${apexHostname}`,
  ]);
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(decodeXml(match[1].trim())))
    .filter((url) => acceptedHostnames.has(url.hostname))
    .map(
      (url) =>
        new URL(`${url.pathname}${url.search}${url.hash}`, siteUrl).href,
    );

  if (urls.length === 0) {
    throw new Error(`No same-host URLs were found in ${sitemapUrl}.`);
  }

  return [...new Set(urls)];
}

await waitForDeployment();
const urlList = await getSitemapUrls();

if (isDryRun) {
  console.log(`IndexNow dry run: ${urlList.length} URLs found.`);
  console.log(`Key location: ${keyLocation}`);
  console.log(urlList.join("\n"));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host: siteUrl.hostname,
    key: indexNowKey,
    keyLocation,
    urlList,
  }),
});

if (response.status !== 200 && response.status !== 202) {
  const message = await response.text();
  throw new Error(
    `IndexNow submission failed: ${response.status} ${message}`.trim(),
  );
}

console.log(
  `IndexNow accepted ${urlList.length} URLs with status ${response.status}.`,
);
