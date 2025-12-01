import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 text-slate-300 py-16 mt-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg tracking-wider">TRUSTED HOME ESSENTIALS</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            The AI-First authority on home maintenance. We test, verify, and document the fix so you don&apos;t have to guess.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © {new Date().getFullYear()} Trusted Home Essentials. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Navigate</h3>
          <Link href="/" className="hover:text-white transition-colors text-slate-400">
            Articles
          </Link>
          <Link href="/about" className="hover:text-white transition-colors text-slate-400">
            Our Mission
          </Link>
          <Link href="/studio" className="hover:text-white transition-colors text-slate-400">
            Editor Login
          </Link>
        </div>

        {/* Column 3: The Legal Shield (Affiliate Disclosure) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Disclosure</h3>
          <p className="text-xs leading-relaxed text-slate-500 border-l-2 border-slate-700 pl-4">
            Trusted Home Essentials is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p className="text-xs leading-relaxed text-slate-500 border-l-2 border-slate-700 pl-4">
            As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
        </div>

      </div>
    </footer>
  );
}