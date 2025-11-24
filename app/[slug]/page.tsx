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
    // If this throws, show the error so we can see it
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
          <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded">
            {String(err)}
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

  const requestedSlug = params.slug;
  const matchedPost = posts.find((p) => p.slug?.current === requestedSlug);

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

          <p className="text-sm text-slate-700 mb-4">
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
            Once we see these values match up, we will swap this debug page out
            for the real article layout.
          </p>
        </div>
      </main>
    );
  }

  // If we DO have a match, render a simple version of the article so you see it works
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
