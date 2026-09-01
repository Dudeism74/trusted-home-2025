import type { MetadataRoute } from "next";
import { products, REVIEWED_DATE, SITE_URL } from "./lib/products";
import { allResources } from "./lib/all-resources";
import {
  CORDLESS_TOOLS_PUBLISHED_DATE,
  CORDLESS_TOOLS_SLUG,
} from "./lib/cordless-tools-guide";
import {
  HOME_MAINTENANCE_PUBLISHED_DATE,
  HOME_MAINTENANCE_SLUG,
} from "./lib/home-maintenance-checklist";
import { RESOURCE_REVIEWED_DATE } from "./lib/resources";

const OVEN_IGNITER_SLUG = "whirlpool-oven-igniter-glows-but-wont-heat";
const OVEN_IGNITER_PUBLISHED_DATE = new Date("2026-08-29T12:00:00Z");
const CORDLESS_TOOLS_PUBLISHED_AT = new Date(
  CORDLESS_TOOLS_PUBLISHED_DATE + "T12:00:00Z",
);
const HOME_MAINTENANCE_PUBLISHED_AT = new Date(
  HOME_MAINTENANCE_PUBLISHED_DATE + "T12:00:00Z",
);

export default function sitemap(): MetadataRoute.Sitemap {
  const productLastModified = new Date(`${REVIEWED_DATE}T12:00:00Z`);
  const resourceLastModified = new Date(`${RESOURCE_REVIEWED_DATE}T12:00:00Z`);
  const staticPages = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
      lastModified: OVEN_IGNITER_PUBLISHED_DATE,
    },
    {
      path: "/troubleshooting",
      priority: 0.95,
      changeFrequency: "weekly" as const,
      lastModified: OVEN_IGNITER_PUBLISHED_DATE,
    },
    {
      path: "/guides",
      priority: 0.75,
      changeFrequency: "weekly" as const,
      lastModified: productLastModified,
    },
    {
      path: "/" + CORDLESS_TOOLS_SLUG,
      priority: 0.95,
      changeFrequency: "monthly" as const,
      lastModified: CORDLESS_TOOLS_PUBLISHED_AT,
    },
    {
      path: "/" + HOME_MAINTENANCE_SLUG,
      priority: 0.95,
      changeFrequency: "monthly" as const,
      lastModified: HOME_MAINTENANCE_PUBLISHED_AT,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: resourceLastModified,
    },
    {
      path: "/editorial-policy",
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: resourceLastModified,
    },
    {
      path: "/affiliate-disclosure",
      priority: 0.4,
      changeFrequency: "yearly" as const,
      lastModified: productLastModified,
    },
    {
      path: "/privacy",
      priority: 0.4,
      changeFrequency: "yearly" as const,
      lastModified: productLastModified,
    },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...allResources.map((resource) => ({
      url: `${SITE_URL}/${resource.slug}`,
      lastModified:
        resource.slug === OVEN_IGNITER_SLUG
          ? OVEN_IGNITER_PUBLISHED_DATE
          : resourceLastModified,
      changeFrequency: "monthly" as const,
      priority: resource.slug === OVEN_IGNITER_SLUG ? 0.95 : 0.9,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/guides/${product.slug}`,
      lastModified: new Date(
        `${product.reviewedDate ?? REVIEWED_DATE}T12:00:00Z`,
      ),
      changeFrequency: "monthly" as const,
      priority: product.slug === "dreame-pm20" ? 0.85 : 0.65,
    })),
  ];
}
