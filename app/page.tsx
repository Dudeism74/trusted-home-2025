import { client } from "@/sanity/client";
import Link from "next/link";

const POSTS_QUERY = `*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  quickAnswer,
  "authorName": author->name
}`;

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });

  return (
    // CHANGED: bg-slate-100 makes the page background light gray
    <main className="min-h-screen p-8 font-sans bg-slate-100">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Expert Guides & Reviews
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No fluff. Just the tools and techniques you need to maintain your home, verified by a professional mechanic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article 
            key={post._id} 
            // CHANGED: border-gray-300 and shadow-md make the cards pop
            className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col h-full"
          >
            <h2 className="text-xl font-bold mb-2 text-slate-900 leading-tight">
              {post.title}
            </h2>
            
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              By {post.authorName}
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500 flex-grow">
              <p className="text-xs text-blue-700 font-bold uppercase mb-2">
                Quick Answer
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {post.quickAnswer}
              </p>
            </div>

            <Link 
              href={`/${post.slug.current}`} 
              className="text-sm font-bold text-white bg-[#1A3C2F] hover:bg-[#142f25] py-3 px-4 rounded-lg text-center mt-auto transition-colors block"
            >
              Read Full Guide
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}