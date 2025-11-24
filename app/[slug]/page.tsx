import Link from "next/link";
import { client } from "../../sanity/client";

export const dynamic = "force-dynamic";

type Post = {
  _id: string;
  title: string;
  quickAnswer: string;
  slug?: { current: string };
  authorName?: string;
};

export default async function PostDebugPage({
  params,
}: {
  params: { slug: string };
}) {
  let posts: Post[] = [];
  let errorMessage: string | null = null;

  try {
    posts = await client.fetch(
      `*[_type == "post"]{
        _id,
        title,
        quickAnswer,
        slug,
        "authorName": author->name
      }`
    );
  } catch (err) {
    errorMessage =
      err instanceof Error ? err.message : typeof err === "string" ? err : String(err);
  }

  const requestedSlug = params.slug;
  const matchedPost = posts.find((p) => p.slug?.current === requestedSlug);

  // If the Sanity query itself failed
  if (errorMessage) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            Sanity fetch error
          </h1>
          <p className="mb-4 text-sm text-slate-700">
            There was an error fetching posts from Sanity. Check your project
            ID, dataset, and token.
          </p>
          <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto">
            {errorMessage}
          </pre>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              ← Back to articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // If the query worked but no matching slug
  if (!matchedPost) {
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

          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Debug: article not found
          </h1>

          <p className="text-sm text-slate-700 mb-2">
            Requested slug from URL:
          </p>
          <p className="text-sm font-mono bg-slate-100 px-3 py-2 rounded mb-6">
            {requestedSlug}
          </p>

          <p className="text-sm text-slate-700 mb-3">
            Slugs returned from Sanity for <code>_type == "post"</code>:
          </p>

          {posts.length === 0 ? (
            <p className="text-sm text-red-700">
              No posts returned. Either the dataset is empty or the query is
              hitting the wrong dataset.
            </p>
          ) : (
            <ul className="text-sm text-slate-700 space-y-1 mb-6">
              {posts.map((p) => (
                <li key={p._id}>
                  <span className="font-mono bg-slate-100 px-2 py-1 rounded">
                    {p.slug?.current || "(no slug)"}
                  </span>{" "}
                  – {p.title}
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-slate-500">
            Once we see these values line up with the homepage links, we will
            replace this debug page with the final article layout.
          </p>
        </div>
      </main>
    );
  }

  // If we DO have a match, render a simple article so you can see it working
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
          <header className="mb-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase mb-2">
              Trusted Home Essentials
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              {matchedPost.title}
            </h1>
            {matchedPost.authorName && (
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                By {matchedPost.authorName}
              </p>
            )}
          </header>

          <section className="bg-blue-50 border-l-4 border-blue-500 rounded-r-md px-4 py-3 mb-8">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-[0.18em] mb-1">
              Quick answer
            </p>
            <p className="text-sm text-slate-800 leading-relaxed">
              {matchedPost.quickAnswer}
            </p>
          </section>

          <p className="text-sm text-slate-600">
            This is the debug article view. Once we are happy with the data
            connection, we will replace it with the final layout.
          </p>
        </article>
      </div>
    </main>
  );
}
