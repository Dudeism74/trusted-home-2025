import { client } from "../../sanity/client";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";

// Define interfaces for type safety
interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  quickAnswer?: string;
  authorName?: string;
  mainImage?: string;
  category?: { title: string; slug: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  quickAnswer?: string;
  body?: PortableTextBlock[];
  authorName?: string;
  mainImage?: string;
  category?: { title: string; slug: string };
  difficulty?: string;
  estimatedTime?: string;
  problemIntro?: string;
  steps?: PortableTextBlock[];
  tools?: string[];
  products?: { name: string; url: string; affiliateTag?: string; notes?: string }[];
  faq?: { question: string; answer: string }[];
  relatedPosts?: RelatedPost[];
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  quickAnswer,
  body,
  "authorName": author->name,
  "mainImage": mainImage.asset->url,
  "category": category->{title, "slug": slug.current},
  difficulty,
  estimatedTime,
  problemIntro,
  steps,
  tools,
  products,
  faq,
  "relatedPosts": *[_type == "post" && category._ref == ^.category._ref && slug.current != ^.slug.current][0...3]{
    _id,
    title,
    slug,
    publishedAt,
    quickAnswer,
    "authorName": author->name,
    "mainImage": mainImage.asset->url,
    "category": category->{title, "slug": slug.current}
  }
}`;

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 border-b border-gray-200 pb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-10 mb-4 text-[#1A3C2F]">{children}</h3>,
    normal: ({ children }) => <p className="mb-6 leading-8 text-slate-700 text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-700 text-lg">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
    link: ({ value, children }) => {
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

// Mock data generator
function getMockPost(): Post {
  return {
    _id: 'mock-1',
    title: 'Sample Guide: How to Maintain Your Home',
    slug: { current: 'sample-guide-home-maintenance' },
    publishedAt: new Date().toISOString(),
    quickAnswer: 'Regular maintenance is key. Check filters, inspect roofs, and clean gutters seasonally.',
    authorName: 'Trusted Expert',
    problemIntro: 'Home maintenance can be overwhelming. Without a plan, small issues become big problems.',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'This is a sample article content to demonstrate the layout. Since the Sanity dataset is currently empty, this mock content is shown to verify the frontend implementation.' }],
        markDefs: [],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Once you add content to your Sanity dataset, it will appear here automatically.' }],
        markDefs: [],
        style: 'normal'
      }
    ],
    category: { title: 'Maintenance', slug: 'maintenance' },
    difficulty: 'Easy',
    estimatedTime: '30 mins'
  };
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  let post: Post | null = null;

  try {
    post = await client.fetch(POST_QUERY, { slug: params.slug });
  } catch (error) {
    console.warn(`Failed to fetch post for slug ${params.slug}:`, error);
  }

  // Mock data for initial setup if no post found
  if (!post && params.slug === 'sample-guide-home-maintenance') {
    post = getMockPost();
  }

  if (!post) {
    return { title: "Article Not Found" };
  }

  const description = post.quickAnswer || post.problemIntro || "Read our expert guide.";

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      images: post.mainImage ? [post.mainImage] : [],
    },
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let post: Post | null = null;

  try {
    post = await client.fetch(POST_QUERY, { slug: params.slug });
  } catch (error) {
    console.warn(`Failed to fetch post for slug ${params.slug}:`, error);
  }

  // Mock data fallback
  if (!post && params.slug === 'sample-guide-home-maintenance') {
    post = getMockPost();
  }

  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2 justify-center group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to All Guides
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    ...(post.category ? [{ label: post.category.title, href: `/articles?category=${post.category.slug}` }] : []),
    { label: post.title, href: `/${post.slug.current}` }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.quickAnswer || post.problemIntro,
    image: post.mainImage ? [post.mainImage] : [],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.authorName || 'Trusted Expert',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trusted Home Essentials',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trusted-home-2025.vercel.app/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://trusted-home-2025.vercel.app/${post.slug.current}`,
    },
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="text-slate-600 hover:text-[#1A3C2F] text-sm font-bold flex items-center gap-2 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to All Guides
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm font-medium text-slate-500 border-b border-gray-100 pb-8">
            {post.category && (
              <span className="text-[#1A3C2F] font-bold bg-[#1A3C2F]/5 px-3 py-1 rounded-full">
                {post.category.title}
              </span>
            )}

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                {post.authorName ? post.authorName[0] : 'T'}
              </div>
              <span className="text-slate-900 font-bold">{post.authorName || 'Trusted Expert'}</span>
            </div>

            {(post.difficulty || post.estimatedTime) && <span className="text-slate-300 hidden sm:inline">•</span>}

            {post.difficulty && (
              <span className="flex items-center gap-1">
                <span className="text-slate-400">Difficulty:</span>
                <span className={`font-bold ${post.difficulty === 'Easy' ? 'text-green-600' :
                  post.difficulty === 'Intermediate' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{post.difficulty}</span>
              </span>
            )}

            {post.estimatedTime && (
              <span className="flex items-center gap-1">
                <span className="text-slate-400">Time:</span>
                <span className="text-slate-900 font-bold">{post.estimatedTime}</span>
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
            <Image
              src={post.mainImage}
              alt={`Header image for ${post.title}`}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Quick Answer Box */}
        {post.quickAnswer && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#1A3C2F]"></div>
            <h3 className="text-[#1A3C2F] font-bold text-xs uppercase mb-4 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1A3C2F]"></span>
              Quick Answer
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium font-serif italic">
              {post.quickAnswer}
            </p>
          </div>
        )}

        {/* Problem Intro */}
        {post.problemIntro && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{post.problemIntro}</p>
          </div>
        )}

        {/* Main Body Content */}
        <div className="prose prose-lg md:prose-xl max-w-none prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl mb-12">
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>

        {/* Steps */}
        {post.steps && post.steps.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-gray-200 pb-4">Step-by-Step Guide</h2>
            <div className="space-y-8">
              <PortableText value={post.steps} components={ptComponents} />
            </div>
          </div>
        )}

        {/* Tools & Products Grid */}
        {(post.tools?.length || post.products?.length) && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {post.tools && post.tools.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span>🛠️</span> Tools Needed
                </h3>
                <ul className="space-y-2">
                  {post.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-[#1A3C2F] font-bold">•</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.products && post.products.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span>📦</span> Recommended Products
                </h3>
                <ul className="space-y-4">
                  {post.products.map((product, idx) => (
                    <li key={idx} className="text-slate-700">
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-600 hover:underline block mb-1"
                      >
                        {product.name} ↗
                      </a>
                      {product.notes && <p className="text-sm text-slate-500">{product.notes}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faq.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}