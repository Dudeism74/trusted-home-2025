export const revalidate = 60;

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg shadow p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Welcome to Trusted Home 2025</h1>
        <p className="text-slate-700">Your modern home platform.</p>
      </div>
    </main>
  );
}
            className="bg-white border border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col h-full"
          >
            <h2 className="text-xl font-bold mb-2 text-slate-900 leading-tight">
              {post.title}
            </h2>
            
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              By {post.authorName}
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500 flex-grow">
              <p className="text-xs text-blue-700 font-bold uppercase mb-2">
                Quick Answer
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {post.quickAnswer}
              </p>
            </div>

            <Link 
              href={`/${post.slug.current}`} 
              className="text-sm font-bold text-white bg-[#1A3C2F] hover:bg-[#142f25] py-3 px-4 rounded-lg text-center mt-auto transition-colors block"
            >
              Read Full Guide
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}