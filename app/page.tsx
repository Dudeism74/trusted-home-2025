import Link from "next/link";
import { client } from "../sanity/client";

type Post = {
  _id: string;
  title: string;
  quickAnswer: string;
  slug: { current: string };
  authorName?: string;
};

export default async function HomePage() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      quickAnswer,
      slug,
      "authorName": author->name
    }`
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase mb-3">
            Trusted Home Essentials
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Clear answers for real-world home maintenance
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Quick, practical guides written from a working mechanic&apos;s perspective,
            so you do not waste time or money chasing bad advice.
          </p>
        </header>

        {/* Posts grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-lg font-semibold text-slate-900 leading-snug mb-2">
                  {post.title}
                </h2>

                {post.authorName && (
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.16em] mb-3">
                    By {post.authorName}
                  </p>
                )}

                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-md px-4 py-3 mb-5">
                  <p className="text-[11px] font-bold text-blue-700 uppercase tracking-[0.18em] mb-1">
                    Quick answer
                  </p>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {post.quickAnswer.length > 180
                      ? post.quickAnswer.slice(0, 177) + "..."
                      : post.quickAnswer}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Link
                    href={`/${post.slug.current}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Read full guide
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
