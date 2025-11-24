export const dynamic = "force-dynamic";

export default function TestPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">
          Test article page
        </h1>
        <p className="text-sm text-slate-600">
          Slug from URL:
          <span className="ml-2 font-mono bg-slate-100 px-2 py-1 rounded">
            {params.slug}
          </span>
        </p>
        <p className="text-xs text-slate-500">
          If you see this, the route is fine and the error is somewhere in the
          Sanity query or rendering logic.
        </p>
      </div>
    </main>
  );
}
