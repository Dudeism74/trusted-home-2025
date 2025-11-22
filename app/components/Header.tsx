import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Trusted Home Essentials" 
            width={180} 
            height={80} 
            className="w-auto h-16 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-bold text-[#1A3C2F] tracking-wide">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            ARTICLES
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            OUR MISSION
          </Link>
        </nav>
      </div>
    </header>
  );
}