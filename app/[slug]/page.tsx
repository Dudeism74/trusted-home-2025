import { client } from "../../sanity/client";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  quickAnswer,
  body,
  "authorName": author->name,
  "mainImage": mainImage.asset->url
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

// 1. Next.js Metadata Function
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

// 2. Main Page Component (Export Default)
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
        
        {post.mainImage && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image 
                    src={post.mainImage} 
                    alt={`Header image for ${post.title}`} 
                    width={800} 
                    height={450} 
                    layout="responsive"
                    className="object-cover"
                />
            </div>
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
          {post.title}
        </h1>

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

        <div className="prose prose-lg max-w-none prose-slate"> 
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>
      </article>
    </main>
  );
}