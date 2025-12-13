import { client } from "../sanity/client";
import PostCard from "../components/PostCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trusted Home Essentials | Expert Guides & Reviews",
  description:
    "Your trusted source for expert home maintenance guides, product reviews, and DIY advice. Verified by professionals.",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  quickAnswer: string;
  authorName: string;
  categories: string[];
}

interface Category {
  _id: string;
  title: string;
  description?: string;
}

const DATA_QUERY = `{
  "posts": *[_type == "post"] | order(publishedAt desc)[0...9] {
    _id,
    title,
    slug,
    publishedAt,
    quickAnswer,
    "authorName": author->name,
    "categories": categories[]->title
  },
  "categories": *[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }
}`;

export default async function Home() {
  let data: { posts: Post[]; categories: Category[] } = { posts: [], categories: [] };
  try {
    data =
      (await client.fetch(DATA_QUERY, {}, { next: { revalidate: 60 } })) ||
      ({ posts: [], categories: [] } as const);
  } catch (error) {
    console.warn("Failed to fetch data:", error);
  }

  const uniqueCategories = Array.from(
    new Map(data.categories.map((item) => [item.title, item])).values()
  );

  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <a
              href="https://docs.google.com/document/d/1UJzzMSoXQDbRZke7Hn4aS429CFy_7y16u8yA9Nf3Doo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-[#1A3C2F] rounded-full hover:bg-[#142f25]"
            >
              Download Free Maintenance Checklist
            </a>
          </div>
        </section>

        {uniqueCategories.length > 0 && (
          <section className="mb-20 border-b border-gray-200 pb-12">
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold text-[#1A3C2F] uppercase tracking-widest mb-3">
                Find Your Fix
              </h2>
              <h3 className="text-3xl font-bold text-slate-900">Browse by System</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {uniqueCategories.map((cat) => (
                <Link
                  key={cat._id}
                  href={"/articles?category=" + encodeURIComponent(cat.title)}
                  className="group bg-white border border-gray-200 hover:border-[#1A3C2F] rounded-xl p-6 text-center transition-all duration-200 hover:shadow-md flex flex-col items-center justify-center gap-2"
                >
                  <span className="font-bold text-slate-900 group-hover:text-[#1A3C2F] transition-colors">
                    {cat.title}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-slate-500">
                    View Guides →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Latest Guides
            </h2>
            <Link
              href="/articles"
              className="text-sm font-bold text-[#1A3C2F] hover:underline"
            >
              View All →
            </Link>
          </div>
          {data.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
              <p className="text-xl text-slate-500 font-medium">
                No articles found. Check back soon!
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}