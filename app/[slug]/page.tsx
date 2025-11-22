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

// This is the "Style Guide" for your content
const ptComponents = {
  block: {
    // H2: Big, Bold, White, with space above and below
    h2: ({children}: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-white border-b border-gray-800 pb-2">{children}</h2>,
    
    // H3: Slightly smaller, usually for sub-points
    h3: ({children}: any) => <h3 className="text-2xl font-bold mt-8 mb-3 text-blue-400">{children}</h3>,
    
    // Normal Text: Relaxed spacing, gray color
    normal: ({children}: any) => <p className="mb-6 leading-7 text-gray-300">{children}</p>,
  },
  list: {
    // Bullet points
    bullet: ({children}: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">{children}</ul>,
    // Numbered lists
    number: ({children}: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300">{children}</ol>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
    // NEW: This makes your links Blue, Clickable, and SEO-Safe (NoFollow)
    link: ({value, children}: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noindex nofollow' : undefined} 
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/50 transition-colors font-semibold"
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
    description: post.quickAnswer || "Read our expert guide on Trusted Home Essentials.",
  };
}

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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
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
          <div className="bg-[#111] border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
            <h3 className="text-blue-400 font-bold text-xs uppercase mb-2 tracking-wider">
              Quick Answer
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              {post.quickAnswer}
            </p>
          </div>
        )}

        <div className="text-lg">
          {/* We pass the 'components' prop here to apply the styles */}
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>

      </article>
    </main>
  );
}