import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Trusted Home Essentials"
            width={180}
            height={80}
            className="w-auto h-12 md:h-16 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 md:gap-8 text-sm font-bold text-[#1A3C2F] tracking-wide">
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