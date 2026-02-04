import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // THIS IS THE MISSING PART: Block the feeds so Google ignores them
            disallow: ["/feed/", "/*/feed/", "/comments/feed/"],
        },
        sitemap: "https://www.trustedhomeessentials.com/sitemap.xml",
    };
}
