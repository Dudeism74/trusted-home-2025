import { client } from "../../sanity/client";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  quickAnswer,
  body,
  "authorName": author->name
}`;

// 1. THE NEW PART: This tells Google what the page is about
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.quickAnswer || "Read our expert guide on Trusted Home Essentials.",
  };
}

// 2. The Regular Page Content
export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params; 
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return <div className="p-10 text-white">Article not found.</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <nav className="p-6 border-b border-gray-800">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto p-6 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-gray-500 mb-8 text-sm">
          <span>By {post.authorName}</span>
          {post.publishedAt && (
            <>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </>
          )}
        </div>

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

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>
    </main>
  );
}