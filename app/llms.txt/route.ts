import { products, REVIEWED_DATE_LABEL, SITE_URL } from "../lib/products";
import { allResources } from "../lib/all-resources";
import {
  CORDLESS_TOOLS_PUBLISHED_DATE_LABEL,
  CORDLESS_TOOLS_SLUG,
  cordlessToolsGuide,
} from "../lib/cordless-tools-guide";
import { RESOURCE_REVIEWED_DATE_LABEL } from "../lib/resources";

export function GET() {
  const resourceLines = allResources
    .map(
      (resource) =>
        `### ${resource.title}\n${SITE_URL}/${resource.slug}\n${resource.metaDescription}`,
    )
    .join("\n\n");

  const guideLines = products
    .map(
      (product) =>
        `### ${product.name}\n${SITE_URL}/guides/${product.slug}\n${product.metaDescription}`,
    )
    .join("\n\n");

  const cordlessToolsLine =
    "### " +
    cordlessToolsGuide.title +
    "\n" +
    SITE_URL +
    "/" +
    CORDLESS_TOOLS_SLUG +
    "\n" +
    cordlessToolsGuide.metaDescription;

  const body = `# Trusted Home Essentials

Trusted Home Essentials publishes practical home troubleshooting, maintenance guidance, and source-backed product analysis. The editorial approach is to diagnose the problem before recommending replacement.

## Editorial method

Troubleshooting starts with the symptom and separates plausible failure modes before parts or equipment are recommended.

Authoritative and primary sources anchor factual claims. Technical reasoning and calculations are identified as interpretation rather than measured results.

Product guides clearly state when no hands on testing was completed.

Safety instructions, manufacturer guidance, and applicable codes take priority over general troubleshooting guidance.

Affiliate disclosure: As an Amazon Associate, I earn from qualifying purchases. Affiliate relationships do not decide whether repair or replacement is recommended.

Troubleshooting hub: ${SITE_URL}/troubleshooting
Editorial policy: ${SITE_URL}/editorial-policy
About the editor: ${SITE_URL}/about
Affiliate disclosure: ${SITE_URL}/affiliate-disclosure

## Troubleshooting and maintenance resources

${resourceLines}

## Product buying guides

${cordlessToolsLine}

${guideLines}

Troubleshooting resources last reviewed: ${RESOURCE_REVIEWED_DATE_LABEL}
Product guide review cycle: ${REVIEWED_DATE_LABEL}
Cordless power tool guide reviewed: ${CORDLESS_TOOLS_PUBLISHED_DATE_LABEL}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
