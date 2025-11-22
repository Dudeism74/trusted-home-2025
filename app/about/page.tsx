import { client } from "../../sanity/client";
import Link from "next/link";

// Fetch all authors from the database
const AUTHORS_QUERY = `*[_type == "author"]{
  name,
  bio
}`;

export default async function AboutPage() {
  const authors = await client.fetch(AUTHORS_QUERY);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Trusted Home Essentials
        </Link>
        <Link href="/" className="text-blue-500 hover:underline text-sm">
          ← Back to Articles
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto p-8 mt-10">
        
        {/* Section 1: The Mission (Organization Entity) */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Our Mission</h1>
          <div className="prose prose-invert text-xl text-gray-300 leading-relaxed">
            <p className="mb-4">
              The internet is flooded with AI-generated fluff and generic advice. 
              <strong> Trusted Home Essentials</strong> exists to fix that.
            </p>
            <p>
              We are an AI-First publisher dedicated to <strong>Fact Density</strong> and 
              <strong> Real-World Experience</strong>. We don't guess how to fix things; 
              we document the process of fixing them.
            </p>
          </div>
        </section>

        {/* Section 2: The Experts (Person Entity) */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-bold mb-8">Meet the Experts</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {authors.map((author: any) => (
              <div key={author.name} className="bg-[#111] p-8 rounded-lg border border-gray-800 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {author.name}
                  </h3>
                  <span className="text-blue-400 text-xs uppercase tracking-wider font-bold">
                    Verified Author
                  </span>
                </div>
                
                {/* Render the Bio (Handling complex text blocks simply) */}
                <div className="text-gray-400">
                  {author.bio?.map((block: any) => (
                    <p key={block._key} className="mb-2">
                      {block.children[0].text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Trust Signals */}
        <section className="mt-16 border-t border-gray-800 pt-12 pb-12">
          <h2 className="text-xl font-bold mb-6">Our Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] p-4 rounded">
              <h3 className="font-bold text-white mb-2">No Stock Photos</h3>
              <p className="text-sm text-gray-500">We use real images from real repairs.</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded">
              <h3 className="font-bold text-white mb-2">Fact Checked</h3>
              <p className="text-sm text-gray-500">Every number and spec is verified.</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded">
              <h3 className="font-bold text-white mb-2">Human Written</h3>
              <p className="text-sm text-gray-500">AI assists, but humans lead.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}