import { client } from "../sanity/client";
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
  // This is the line that turns on the "Live News Feed" (60-second updates)
  const posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });

  return (
    <main className="min-h-screen p-8 bg-black text-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article 
            key={post._id} 
            className="border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors bg-[#111] flex flex-col"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            
            <p className="text-sm text-gray-500 mb-4">
              By {post.authorName}
            </p>

            <div className="bg-[#222] p-4 rounded-md mb-6 border-l-4 border-blue-500 flex-grow">
              <p className="text-xs text-blue-400 font-bold uppercase mb-1">
                Quick Answer
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {post.quickAnswer}
              </p>
            </div>

            <Link 
              href={`/${post.slug.current}`} 
              className="text-sm font-bold text-blue-400 hover:text-white underline decoration-blue-500/50 transition-colors mt-auto"
            >
              Read Full Guide →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}