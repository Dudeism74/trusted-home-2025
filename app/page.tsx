import { client } from "../sanity/client";
import PostCard from "../components/PostCard";
import { Metadata } from "next";

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
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  quickAnswer,
  "authorName": author->name
}`;

export default async function Home() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } }) || [];
  } catch (error) {
    console.warn("Failed to fetch posts:", error);
  }

  if (posts.length === 0) {
    posts = [
      {
        _id: 'mock-1',
        title: 'Sample Guide: How to Maintain Your Home',
        slug: { current: 'sample-guide-home-maintenance' },
        publishedAt: new Date().toISOString(),
        quickAnswer: 'Regular maintenance is key. Check filters, inspect roofs, and clean gutters seasonally.',
        authorName: 'Trusted Expert',
      }
    ];
  }

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

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest Guides</h2>
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
    </main>
  );
}