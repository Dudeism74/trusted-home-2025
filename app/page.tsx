import { client } from "../sanity/client";
import PostCard from "../components/PostCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trusted Home Essentials | Expert Guides & Reviews",
  description: "Your trusted source for expert home maintenance guides, product reviews, and DIY advice. Verified by professionals.",
  openGraph: {
    title: "Trusted Home Essentials | Expert Guides & Reviews",
    description: "Your trusted source for expert home maintenance guides, product reviews, and DIY advice. Verified by professionals.",
    type: "website",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trusted Home Essentials Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Home Essentials | Expert Guides & Reviews",
    description: "Your trusted source for expert home maintenance guides, product reviews, and DIY advice. Verified by professionals.",
    images: ["/hero-image.jpg"],
  },
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

// 1. Updated Query to fetch Categories AND Posts
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
    data = await client.fetch(DATA_QUERY, {}, { next: { revalidate: 60 } }) || { posts: [], categories: [] };
  } catch (error) {
    console.warn("Failed to fetch data:", error);
  }

  const { posts, categories } = data;

  return (
    <main className="min-h-screen font-sans bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Expert Guides & <span className="text-[#1A3C2F]">Reviews</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No fluff. Just the tools and techniques you need to maintain your home, verified by a professional mechanic.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 2. New "Find Your Fix" Section */}
        {categories.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold text-[#1A3C2F] uppercase tracking-widest mb-3">
                Find Your Fix
              </h2>
              <h3 className="text-3xl font-bold text-slate-900">
                Browse by System
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link 
                  key={cat._id}
                  href={`/articles?category=${encodeURIComponent(cat.title)}`}
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

        {/* Content Section */}
        <section>
          <div className="mb-12 flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest Guides</h2>
            <Link href="/articles" className="text-sm font-bold text-[#1A3C2F] hover:underline">
              View All →
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
              <p className="text-xl text-slate-500 font-medium">No articles found. Check back soon!</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}