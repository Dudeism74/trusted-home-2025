import { client } from "../sanity/client";
import Link from "next/link";
// This query asks the database for data
const POSTS_QUERY = `*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  quickAnswer,
  "authorName": author->name
}`;

export default async function Home() {
  // Go get the data!
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen p-8 bg-black text-white font-sans">
      <header className="mb-12 border-b border-gray-800 pb-8">
        <h1 className="text-4xl font-bold mb-2">Trusted Home Essentials</h1>
        <p className="text-gray-400">The AI-First Home Maintenance Authority.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article 
            key={post._id} 
            className="border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors bg-[#111]"
          >
            {/* The GEO Strategy: Title first */}
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            
            {/* The Author Credit */}
            <p className="text-sm text-gray-500 mb-4">
              By {post.authorName}
            </p>

            {/* The "Quick Answer" Box (AI Gold) */}
            <div className="bg-[#222] p-4 rounded-md mb-4 border-l-4 border-blue-500">
              <p className="text-xs text-blue-400 font-bold uppercase mb-1">
                Quick Answer
              </p>
              <p className="text-sm text-gray-300">
                {post.quickAnswer}
              </p>
            </div>

            {/* Read More Button (Placeholder for now) */}
           <Link 
  href={`/${post.slug.current}`} 
  className="text-sm font-bold text-blue-400 hover:text-white underline decoration-blue-500/50 transition-colors"
>
  Read Full Guide →
</Link>
          </article>
        ))}
      </div>
    </main>
  );
}