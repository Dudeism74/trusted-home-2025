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

const ptComponents = {
  block: {
    h2: ({children}: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 border-b border-gray-200 pb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold mt-10 mb-4 text-[#1A3C2F]">{children}</h3>,
    normal: ({children}: any) => <p className="mb-6 leading-8 text-slate-700 text-lg">{children}</p>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ol>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    link: ({value, children}: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noindex nofollow' : undefined} 
          className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 transition-colors font-bold"
        >
          {children}
        </a>
      )
    },
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.quickAnswer || "Read our expert guide.",
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params; 
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return <div className="p-10 text-center text-slate-600">Article not found.</div>;
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] font-sans">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="text-slate-500 hover:text-[#1A3C2F] text-sm font-semibold flex items-center gap-2 transition-colors">
          ← Back to Articles
        </Link>
      </nav>
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-2 text-slate-500 mb-10 text-sm font-medium border-b border-gray-200 pb-8">
          <span className="uppercase tracking-wider text-slate-700">{post.authorName}</span>
          <span>•</span>
          {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString()}</span>}
        </div>
        {post.quickAnswer && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl shadow-sm">
            <h3 className="text-blue-800 font-bold text-xs uppercase mb-3 tracking-widest">Quick Answer</h3>
            <p className="text-xl leading-relaxed text-slate-800 font-medium">{post.quickAnswer}</p>
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>
      </article>
    </main>
  );
}
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

const ptComponents = {
  block: {
    h2: ({children}: any) => <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 border-b border-gray-200 pb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold mt-10 mb-4 text-[#1A3C2F]">{children}</h3>,
    normal: ({children}: any) => <p className="mb-6 leading-8 text-slate-700 text-lg">{children}</p>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ol>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    link: ({value, children}: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noindex nofollow' : undefined} 
          className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 transition-colors font-bold"
        >
          {children}
        </a>
      )
    },
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.quickAnswer || "Read our expert guide.",
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params; 
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return <div className="p-10 text-center text-slate-600">Article not found.</div>;
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] font-sans">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="text-slate-500 hover:text-[#1A3C2F] text-sm font-semibold flex items-center gap-2 transition-colors">
          ← Back to Articles
        </Link>
      </nav>
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-2 text-slate-500 mb-10 text-sm font-medium border-b border-gray-200 pb-8">
          <span className="uppercase tracking-wider text-slate-700">{post.authorName}</span>
          <span>•</span>
          {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString()}</span>}
        </div>
        {post.quickAnswer && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl shadow-sm">
            <h3 className="text-blue-800 font-bold text-xs uppercase mb-3 tracking-widest">Quick Answer</h3>
            <p className="text-xl leading-relaxed text-slate-800 font-medium">{post.quickAnswer}</p>
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>
      </article>
    </main>
  );
}
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
    <main className="min-h-screen p-8 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Expert Guides & Reviews
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No fluff. Just the tools and techniques you need to maintain your home, verified by a professional mechanic.
        </p>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article 
            key={post._id} 
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            {/* Title */}
            <h2 className="text-xl font-bold mb-2 text-slate-900 leading-tight">
              {post.title}
            </h2>
            
            {/* Byline */}
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              By {post.authorName}
            </p>

            {/* The Quick Answer Box (Light Mode) */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500 flex-grow">
              <p className="text-xs text-blue-700 font-bold uppercase mb-2">
                Quick Answer
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {post.quickAnswer}
              </p>
            </div>

            {/* Button */}
            <Link 
              href={`/${post.slug.current}`} 
              className="text-sm font-bold text-white bg-[#1A3C2F] hover:bg-[#142f25] py-3 px-4 rounded-lg text-center mt-auto transition-colors"
            >
              Read Full Guide
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}