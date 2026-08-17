import type { MetadataRoute } from "next";
import { products, REVIEWED_DATE, SITE_URL } from "./lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${REVIEWED_DATE}T12:00:00Z`);
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/editorial-policy",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/affiliate-disclosure",
      priority: 0.4,
      changeFrequency: "yearly" as const,
    },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/guides/${product.slug}`,
      lastModified: new Date(
        `${product.reviewedDate ?? REVIEWED_DATE}T12:00:00Z`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
