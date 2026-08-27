import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { products, SITE_NAME, SITE_URL } from "../lib/products";

export const metadata: Metadata = {
  title: "Home Product Buying Guides",
  description:
    "Browse practical home product buying guides organized around fit, sourced specifications, tradeoffs, and checks to make before ordering.",
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    title: "Home Product Buying Guides",
    description:
      "Practical product guides built around fit, facts, limitations, and useful buying checks.",
    url: "/guides",
  },
};

export default function GuidesIndex() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Trusted Home Essentials Buying Guides",
    description:
      "Practical product buying guides with sourced specifications, fit checks, and clearly stated tradeoffs.",
    url: `${SITE_URL}/guides`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/guides/${product.slug}`,
      })),
    },
  };

  return (
    <main>
      <JsonLd data={collectionSchema} />
      <SiteHeader />

      <section className="guide-index-hero">
        <div>
          <p className="eyebrow">Buying guide library</p>
          <h1>Start with fit. Then compare the features.</h1>
          <p className="guide-index-lede">
            These guides turn published specifications into practical decisions.
            Each one explains who a product may suit, where it can fall short, and
            what to confirm before ordering. If you are here because something in
            the house stopped working, start with the{" "}
            <Link
              href="/troubleshooting"
              style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              home troubleshooting library
            </Link>{" "}
            before shopping for a replacement.
          </p>
        </div>
        <aside className="answer-card" aria-label="How to use these guides">
          <p className="answer-label">How to use this library</p>
          <p className="answer-title">
            Choose the job first, then use the fit and skip sections to narrow the
            decision.
          </p>
          <div className="answer-rule" />
          <p>
            Product claims are traced to current sources. Editorial conclusions
            are labeled, and hands-on testing is never implied when it did not
            happen.
          </p>
        </aside>
      </section>

      <div className="disclosure" role="note">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, I earn from
        qualifying purchases. This does not change the price you pay.
      </div>

      <section className="guide-directory" aria-labelledby="all-guides">
        <header className="guide-directory-heading">
          <div>
            <p className="eyebrow">All current guides</p>
            <h2 id="all-guides">Find the product that matches the job.</h2>
          </div>
          <p>
            The library grows only when there is enough reliable information to
            explain a real use case, meaningful limitations, and the checks that
            affect fit.
          </p>
        </header>

        <div className="guide-directory-list">
          {products.map((product, index) => (
            <article
              className={`guide-directory-card ${product.accent}`}
              key={product.slug}
            >
              <Link
                className="guide-directory-image"
                href={`/guides/${product.slug}`}
                aria-label={`Read the ${product.name} buying guide`}
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={900}
                  height={900}
                  sizes="(max-width: 760px) 92vw, 38vw"
                  unoptimized
                />
              </Link>
              <div className="guide-directory-content">
                <p className="product-category">{product.category}</p>
                <h2>
                  <Link href={`/guides/${product.slug}`}>{product.name}</Link>
                </h2>
                <p className="product-answer">{product.quickAnswer}</p>
                <dl>
                  <div>
                    <dt>Best fit</dt>
                    <dd>{product.bestFor}</dd>
                  </div>
                  <div>
                    <dt>Skip if</dt>
                    <dd>{product.skipIf}</dd>
                  </div>
                </dl>
                <Link
                  className="button button-primary"
                  href={`/guides/${product.slug}`}
                >
                  Read the complete guide
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get new buying guides without the clutter.</h2>
        </div>
        <NewsletterForm source="guides-index" />
      </section>

      <SiteFooter />
    </main>
  );
}
