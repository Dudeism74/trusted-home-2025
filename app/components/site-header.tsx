import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Trusted Home Essentials home">
        <span className="brand-mark">THE</span>
        <span>Trusted Home Essentials</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/guides">Guides</Link>
        <Link href="/about">About</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
      </nav>
    </header>
  );
}
