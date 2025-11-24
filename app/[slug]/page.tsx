import { notFound } from 'next/navigation'
import { createClient, groq } from 'next-sanity'

// Initialize the Sanity client using project ID and dataset from environment
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',   // use appropriate API version
  useCdn: false,             // disable CDN for fresh data
})

export async function generateStaticParams() {
  // Fetch all post slugs from Sanity (as strings)
  const slugs: string[] = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return slugs.map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // GROQ query to find the post by slug (using slug.current field):contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    quickAnswer,
    body,
    author->{name},
    publishedAt
  }`
  const article = await client.fetch(query, { slug })

  // If no article was found, display 404 not found page:contentReference[oaicite:6]{index=6}
  if (!article) {
    notFound()
  }

  return (
    <main className="prose prose-lg px-4 py-8 mx-auto">
      {/* Title */}
      <h1>{article.title}</h1>

      {/* Author name and publish date */}
      <p className="text-sm text-gray-600">
        By {article.author?.name} — {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}
      </p>

      {/* Quick Answer snippet highlighted */}
      {article.quickAnswer && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
          <strong>Quick Answer: </strong>{article.quickAnswer}
        </div>
      )}

      {/* Full body content (currently placeholder since Portable Text rendering isn't implemented) */}
      {article.body ? (
        <div>
          {/* TODO: Render Portable Text content here */}
          <p><em>Full article content is available in the CMS.</em></p>
        </div>
      ) : null}
    </main>
  )
}
