import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AffiliateButton } from "./components/affiliate-button";
import { JsonLd } from "./components/json-ld";
import { NewsletterForm } from "./components/newsletter-form";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { products, REVIEWED_DATE, SITE_NAME, SITE_URL } from "./lib/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Practical product buying guides with sourced facts, fit checks, and honest tradeoffs.",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
      },
      {
        "@type": "ItemList",
        name: "Current Trusted Home Essentials buying guides",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/guides/${product.slug}`,
          name: product.name,
        })),
      },
    ],
  };

  return (
    <main>
      <JsonLd data={siteSchema} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fewer products. Better decisions.</p>
          <h1>Useful home products, checked before they earn a recommendation.</h1>
          <p className="hero-lede">
            We turn published specifications into practical buying guidance. Each
            guide explains who a product may suit, where it can fall short, and
            what to confirm before ordering.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/guides">
              Explore the current guides
            </Link>
            <Link className="text-link" href="/editorial-policy">
              See how we evaluate products
            </Link>
          </div>
        </div>

        <aside className="answer-card" aria-label="The quick answer">
          <p className="answer-label">The quick answer</p>
          <p className="answer-title">
            The right product depends on the job, the space, and the tradeoffs you
            will actually notice.
          </p>
          <div className="answer-rule" />
          <p>
            Start with fit and limitations. Features matter only when they solve
            your specific problem.
          </p>
        </aside>
      </section>

      <div className="disclosure" role="note">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, I earn from
        qualifying purchases. Assessments are based on published product
        information, not hands on testing unless a guide explicitly says otherwise.
      </div>

      <section className="products-section" id="guides">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Current buying guides</p>
            <h2>Four products, four very different jobs</h2>
          </div>
          <p>
            Every guide includes a reason to consider the product, a reason to
            pause, and the checks that determine whether it fits your situation.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className={`product-card ${product.accent}`}
              id={product.slug}
              key={product.name}
            >
              <div className="product-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <Link
                className="product-image"
                href={`/guides/${product.slug}`}
                aria-label={`Read the ${product.name} buying guide`}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 720px) 92vw, (max-width: 1120px) 44vw, 520px"
                  priority={index < 2}
                  unoptimized
                />
              </Link>
              <div className="product-content">
                <p className="product-category">{product.category}</p>
                <h3>
                  <Link href={`/guides/${product.slug}`}>{product.name}</Link>
                </h3>
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

                <ul className="fact-list">
                  {product.facts.slice(0, 3).map((fact) => (
                    <li key={fact.label}>{fact.value}</li>
                  ))}
                </ul>

                <div className="card-actions">
                  <Link
                    className="button button-primary"
                    href={`/guides/${product.slug}`}
                  >
                    Read the complete guide
                  </Link>
                  <AffiliateButton
                    href={product.amazonUrl}
                    productName={product.name}
                    amazonAsin={product.amazonAsin}
                    affiliateTag={product.affiliateTag}
                    campaignId={product.campaignId}
                    linkId={product.linkId}
                  />
                  <a
                    className="source-link"
                    href={product.manufacturerUrl}
                    rel="noopener"
                    target="_blank"
                  >
                    Source: {product.manufacturerLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="standards" id="standards">
        <div>
          <p className="eyebrow">Our editorial standard</p>
          <h2>Useful guidance begins with the limits.</h2>
        </div>
        <div className="standards-grid">
          <article>
            <span>01</span>
            <h3>Verify the claim</h3>
            <p>
              We trace important specifications to the manufacturer or current
              product listing and avoid unsupported superlatives.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Name the tradeoff</h3>
            <p>
              Price, size, compatibility, upkeep, and real setup constraints belong
              beside the benefits, not in the fine print.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Separate evidence from judgment</h3>
            <p>
              Published facts are labeled and sourced. Our conclusions explain how
              those facts may affect a buying decision.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Keep it current</h3>
            <p>
              Availability and product details change. Every guide carries a
              reviewed date and directs readers to confirm the current listing.
            </p>
          </article>
        </div>
      </section>

      <section className="authority-strip" aria-label="How the site is built">
        <div>
          <strong>4</strong>
          <span>complete buyer guides</span>
        </div>
        <div>
          <strong>2</strong>
          <span>primary sources per guide</span>
        </div>
        <div>
          <strong>{REVIEWED_DATE.slice(0, 4)}</strong>
          <span>current review cycle</span>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get new buying guides without the clutter.</h2>
        </div>
        <NewsletterForm source="homepage" />
      </section>

      <SiteFooter />
    </main>
  );
}
