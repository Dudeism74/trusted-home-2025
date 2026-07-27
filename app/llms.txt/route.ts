import { products, REVIEWED_DATE_LABEL, SITE_URL } from "../lib/products";

export function GET() {
  const guideLines = products
    .map(
      (product) =>
        `- ${product.name}: ${SITE_URL}/guides/${product.slug}\n  ${product.metaDescription}`,
    )
    .join("\n");

  const body = `# Trusted Home Essentials

Trusted Home Essentials publishes practical, specification based product buying guides.

## Editorial method

- Primary sources anchor factual specifications.
- Editorial conclusions name best fit, reasons to skip, and practical tradeoffs.
- Guides clearly state when no hands on testing was completed.
- Price and availability must be confirmed on the current retailer listing.
- Affiliate disclosure: As an Amazon Associate, I earn from qualifying purchases.

Editorial policy: ${SITE_URL}/editorial-policy
About the editor: ${SITE_URL}/about
Affiliate disclosure: ${SITE_URL}/affiliate-disclosure

## Current guides

${guideLines}

Last reviewed: ${REVIEWED_DATE_LABEL}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
