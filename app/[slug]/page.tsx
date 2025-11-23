import { client } from "../../sanity/client";
import Link from "next/link";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      quickAnswer,
      "authorName": author->name
    }`,
    { slug: params.slug }
  );

  if (!post) return <div className="p-10 text-center text-slate-600">Article not found.</div>;

  return (
    <main className="min-h-screen bg-[#F9FAFB] font-sans">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="text-slate-500 hover:text-[#1A3C2F] text-sm font-semibold">
          ← Back to Articles
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-2 text-slate-500 mb-10 text-sm font-medium">
          <span className="uppercase tracking-wider text-slate-700">{post.authorName}</span>
          <span>•</span>
          {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString()}</span>}
        </div>

        {post.quickAnswer && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg shadow-sm">
            <h3 className="text-blue-800 font-bold text-xs uppercase mb-2">Quick Answer</h3>
            <p className="text-lg text-slate-800">{post.quickAnswer}</p>
          </div>
        )}

        <div className="prose prose-lg max-w-none">{/* Body rendering omitted to avoid PortableText issues */}
          <p className="text-slate-700">Full article content is available in the CMS.</p>
        </div>
      </article>
    </main>
  );
}
