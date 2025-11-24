import Link from "next/link";
import { headers } from "next/headers";
import { client } from "../../sanity/client";

export const dynamic = "force-dynamic";

type Post = {
  _id: string;
  title: string;
  quickAnswer: string;
  slug?: { current: string };
  authorName?: string;
};

type PageProps = {
  params?: { slug?: string };
};

export default async function PostPage(props: PageProps) {
  // 1. Try to get slug from params (normal Next behavior)
  const paramSlug = props.params?.slug;

  // 2. Fallback: derive slug from the request path in headers
  const h = headers();
  const rawPath =
    h.get("next-url") ||
    h.get("x-invoke-path") ||
    h.get("x-matched-path") ||
    "";

  const derivedSlug =
    rawPath
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean)
      .pop() || "";

  const requestedSlug = paramSlug || derivedSlug;

  let posts: Post[] = [];
  let fetchError: string | null = null;

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
    fetchError =
      err instanceof Error
        ? err.message
        : typeof err === "string"
        ? err
        : String(err);
  }

  if (fetchError) {
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

          <h1 className="text-2xl font-bold text-red-700 mb-4">
            Sanity fetch error
          </h1>
          <p className="mb-4 text-sm text-slate-700">
            There was an error fetching posts from Sanity. Check your project
            ID, dataset, and token.
          </p>
          <pre className="text-xs bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto">
            {fetchError}
          </pre>
        </div>
      </main>
    );
  }

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

          <h1 className="text-2xl font-bold text-slate-900 mb-6">
            Debug: article not found
          </h1>

          <p className="text-sm text-slate-700 mb-2">
            Requested slug (from params or URL):
          </p>
          <p className="text-sm font-mono bg-slate-100 px-3 py-2 rounded mb-4">
            "{requestedSlug}" (length{" "}
            {requestedSlug ? requestedSlug.length : 0})
          </p>

          <p className="text-sm text-slate-700 mb-2">
            Raw path from headers:
          </p>
          <p className="text-sm font-mono bg-slate-100 px-3 py-2 rounded mb-6">
            "{rawPath}"
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
                    "{p.slug?.current || "(no slug)"}"
                  </span>{" "}
                  – {p.title} (len{" "}
                  {p.slug?.current ? p.slug.current.length : 0})
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-slate-500">
            Once this requested slug matches one of the Sanity slugs above,
            this page will automatically switch to the full article layout.
          </p>
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
            This is the simple article view rendered from Sanity. Once we are
            happy with the data flow, we can expand this with the full layout
            and sections.
          </p>
        </article>
      </div>
    </main>
  );
}
