import { client } from "../../sanity/client";

import { Metadata } from "next";
import ArticlesPage from "./ArticlesPage";

export const metadata: Metadata = {
  title: "Home Maintenance Articles | Trusted Home Essentials",
  description: "Browse our complete collection of expert home maintenance guides, product reviews, and DIY advice.",
  openGraph: {
    title: "Home Maintenance Articles | Trusted Home Essentials",
    description: "Browse our complete collection of expert home maintenance guides, product reviews, and DIY advice.",
    type: "website",
  },
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  quickAnswer,
  "authorName": author->name,
  "categories": categories[]->title
}`;

const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title
}`;

export default async function Page() {
  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(CATEGORIES_QUERY, {}, { next: { revalidate: 60 } })
  ]);

  return (
    <ArticlesPage posts={posts || []} categories={categories || []} />
  );
}
