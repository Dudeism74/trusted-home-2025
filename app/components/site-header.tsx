import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Trusted Home Essentials home">
        <span className="brand-mark">THE</span>
        <span>Trusted Home Essentials</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/troubleshooting">Troubleshooting</Link>
        <Link href="/guides">Buying guides</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
