import { notFound } from "next/navigation";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  useCdn: false,
});

type PageProps = {
  params: { slug: string };
};

type Article = {
  _id: string;
  title: string;
  quickAnswer?: string;
  slug: string;
  author?: { name: string };
  publishedAt?: string;
};

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = params;

  // Inline the slug directly in GROQ to support static generation
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    "slug": slug.current,
    quickAnswer,
    publishedAt,
    author->{name}
  }`;

  const article: Article | null = await client.fetch(query);

  if (!article) {
    notFound();
  }

  return (
    <main className="prose prose-lg px-4 py-8 mx-auto">
      <h1>{article.title}</h1>
      {article.author?.name && (
        <p className="text-sm text-gray-600">
          By {article.author.name} —{" "}
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString()
            : ""}
        </p>
      )}

      {article.quickAnswer && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded">
          <strong>Quick Answer:</strong> {article.quickAnswer}
        </div>
      )}

      <p className="text-sm text-gray-500">
        Article body not yet wired in — placeholder only.
      </p>
    </main>
  );
}
