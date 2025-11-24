import Link from "next/link";
import { client } from "../../sanity/client";

export const dynamic = "force-dynamic";

type Post = {
  title: string;
  publishedAt?: string;
  quickAnswer: string;
  authorName?: string;
};

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      quickAnswer,
      "authorName": author->name
    }`,
    { slug }
  );
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3">
            Trusted Home Essentials
          </p>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Article not found
          </h1>
          <Link
            href="/"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
          >
            ← Back to articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <nav className="mb-6">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            ← Back to articles
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase mb-2">
              Trusted Home Essentials
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
              {post.title}
            </h1>
            {post.authorName && (
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">
                By {post.authorName}
              </p>
            )}
          </header>

          <section className="bg-blue-50 border-l-4 border-blue-500 rounded-r-md px-4 py-3 mb-8">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-[0.18em] mb-1">
              Quick answer
            </p>
            <p className="text-sm text-slate-800 leading-relaxed">
              {post.quickAnswer}
            </p>
          </section>

          <section className="text-slate-700 leading-relaxed text-[15px] space-y-4">
            <p>
              Full article body rendering is not wired up yet on this route. The
              quick answer above is live from Sanity so you can validate the
              connection and routing. Once you confirm the links work, we can
              hook up PortableText here to render the entire guide.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
