import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">THE</span>
          <span>Trusted Home Essentials</span>
        </Link>
        <p className="footer-summary">
          Practical home troubleshooting, maintenance reasoning, and buying
          guidance built around diagnosing the problem before replacing equipment.
        </p>
      </div>
      <div className="footer-links" aria-label="Site information">
        <Link href="/troubleshooting">Troubleshooting</Link>
        <Link href="/guides">Buying guides</Link>
        <Link href="/about">About</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
        <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
      <div>
        <p className="footer-disclosure">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Trusted Home Essentials
        </p>
      </div>
    </footer>
  );
}
