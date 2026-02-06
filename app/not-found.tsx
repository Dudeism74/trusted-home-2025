import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        
        <div className="relative -mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Looks like this part is missing.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We couldn't find the page you were looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-[#1A3C2F] text-white font-bold rounded-xl hover:bg-[#142f25] transition-colors"
            >
              Return Home
            </Link>
            <Link 
              href="/articles"
              className="px-6 py-3 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:border-[#1A3C2F] hover:text-[#1A3C2F] transition-all"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
