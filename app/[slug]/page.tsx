import { client } from "../../sanity/client";
import { PortableText } from "next-sanity";
import Link from "next/link";

// This asks Sanity for ONE specific post matching the URL
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  quickAnswer,
  body,
  "authorName": author->name
}`;

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return <div className="p-10 text-white">Article not found.</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav className="p-6 border-b border-gray-800">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto p-6 mt-10">
        
        {/* The Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {post.title}
        </h1>

        {/* The Byline */}
        <div className="flex items-center gap-2 text-gray-500 mb-8 text-sm">
          <span>By {post.authorName}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>

        {/* The GEO Box (Repeated for importance) */}
        {post.quickAnswer && (
          <div className="bg-[#1a1a1a] border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
            <h3 className="text-blue-400 font-bold text-xs uppercase mb-2 tracking-wider">
              Quick Answer
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              {post.quickAnswer}
            </p>
          </div>
        )}

        {/* The Main Body Text */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <PortableText value={post.body} />
        </div>

      </article>
    </main>
  );
}