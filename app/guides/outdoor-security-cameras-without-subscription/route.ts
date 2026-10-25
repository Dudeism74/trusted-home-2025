import { readFileSync } from "node:fs";
import { join } from "node:path";

// Serve the reviewed standalone document without applying the app layout twice.
export const dynamic = "force-static";

export function GET() {
  const html = readFileSync(
    join(process.cwd(), "app/guides/outdoor-security-cameras-without-subscription/guide.html"),
    "utf8",
  );
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
