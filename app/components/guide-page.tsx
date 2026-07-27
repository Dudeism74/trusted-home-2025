import Image from "next/image";
import Link from "next/link";
import type { ProductGuide } from "../lib/products";
import {
  REVIEWED_DATE,
  REVIEWED_DATE_LABEL,
  SITE_NAME,
  SITE_URL,
} from "../lib/products";
import { AffiliateButton } from "./affiliate-button";
import { CommentSection } from "./comment-section";
import { JsonLd } from "./json-ld";
import { NewsletterForm } from "./newsletter-form";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function GuidePage({ product }: { product: ProductGuide }) {
  const articleUrl = `${SITE_URL}/guides/${product.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: product.metaTitle,
    description: product.metaDescription,
    image: `${SITE_URL}${product.image}`,
    datePublished: REVIEWED_DATE,
    dateModified: REVIEWED_DATE,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "Jim",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: product.name,
      identifier: product.amazonAsin,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Buying guides",
        item: `${SITE_URL}/#guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: articleUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <SiteHeader />

      <div className="disclosure compact" role="note">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, I earn from
        qualifying purchases.
      </div>

      <article className={`guide-page ${product.accent}`}>
        <div className="guide-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#guides">Guides</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.shortName}</span>
          </nav>

          <header className="guide-hero">
            <div className="guide-hero-copy">
              <p className="eyebrow">{product.category} buying guide</p>
              <h1>{product.metaTitle.replace(" Guide:", ":")}</h1>
              <p className="guide-dek">{product.dek}</p>
              <div className="review-meta">
                <span>By Jim</span>
                <span>Reviewed {REVIEWED_DATE_LABEL}</span>
                <span>Published specification assessment</span>
              </div>
              <AffiliateButton
                href={product.amazonUrl}
                productName={product.name}
                amazonAsin={product.amazonAsin}
                affiliateTag={product.affiliateTag}
                campaignId={product.campaignId}
                linkId={product.linkId}
                className="hero-buy-button"
              />
              <p className="listing-note">
                Price, availability, seller, and included variation can change.
                Confirm the current Amazon listing before ordering.
              </p>
            </div>
            <div className="guide-visual">
              <Image
                src={product.image}
                alt={product.alt}
                width={1200}
                height={1200}
                sizes="(max-width: 820px) 92vw, 44vw"
                priority
                unoptimized
              />
            </div>
          </header>

          <section className="quick-answer" aria-labelledby="quick-answer-title">
            <p className="answer-label">The quick answer</p>
            <h2 id="quick-answer-title">Is the {product.name} worth considering?</h2>
            <p>{product.quickAnswer}</p>
            <div className="fit-split">
              <div>
                <span>Best fit</span>
                <p>{product.bestFor}</p>
              </div>
              <div>
                <span>Skip it if</span>
                <p>{product.skipIf}</p>
              </div>
            </div>
          </section>

          <section className="guide-section guide-verdict">
            <div className="section-kicker">Editorial assessment</div>
            <div>
              <h2>The bottom line</h2>
              <p className="large-copy">{product.bottomLine}</p>
              <p className="method-note">
                This guide is based on current manufacturer specifications and
                product listing information. Trusted Home Essentials has not
                completed hands on testing of this product.
              </p>
            </div>
          </section>

          <section className="guide-section facts-section" aria-labelledby="key-facts">
            <div className="section-kicker">Source checked facts</div>
            <div>
              <h2 id="key-facts">Key facts before you buy</h2>
              <dl className="spec-list">
                {product.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="strengths-section">
            <article>
              <p className="eyebrow">Why it stands out</p>
              <h2>Useful strengths</h2>
              <ol className="editorial-list">
                {product.strengths.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </article>
            <article>
              <p className="eyebrow">Where to pause</p>
              <h2>Real tradeoffs</h2>
              <ol className="editorial-list">
                {product.tradeoffs.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </article>
          </section>

          <section className="use-case-section" aria-labelledby="use-cases">
            <div className="section-heading compact-heading">
              <div>
                <p className="eyebrow">Decision context</p>
                <h2 id="use-cases">Where this product makes sense</h2>
              </div>
              <p>
                These are practical fit scenarios based on the published feature
                set, not claims about results in every home.
              </p>
            </div>
            <div className="use-case-grid">
              {product.useCases.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="checklist-section">
            <div>
              <p className="eyebrow">Before checkout</p>
              <h2>Four checks that prevent a bad fit</h2>
            </div>
            <ol>
              {product.checks.map((item, index) => (
                <li key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
            <AffiliateButton
              href={product.amazonUrl}
              productName={product.name}
              amazonAsin={product.amazonAsin}
              affiliateTag={product.affiliateTag}
              campaignId={product.campaignId}
              linkId={product.linkId}
              className="checklist-button"
            >
              Check the current listing
            </AffiliateButton>
          </section>

          <section className="faq-section" aria-labelledby="faq-title">
            <div>
              <p className="eyebrow">Clear answers</p>
              <h2 id="faq-title">{product.name} FAQ</h2>
            </div>
            <div className="faq-list">
              {product.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="sources-section" aria-labelledby="sources-title">
            <div>
              <p className="eyebrow">Evidence</p>
              <h2 id="sources-title">Sources and method</h2>
            </div>
            <div>
              <p>
                Specifications were reviewed on {REVIEWED_DATE_LABEL}. We separate
                manufacturer claims from our editorial judgment and do not present
                this guide as hands on testing.
              </p>
              <ol>
                <li>
                  <a
                    href={product.manufacturerUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    {product.manufacturerLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                  >
                    Current Amazon listing for {product.name}
                  </a>
                </li>
                <li>
                  <Link href="/editorial-policy">
                    Trusted Home Essentials editorial policy
                  </Link>
                </li>
              </ol>
            </div>
          </section>

          <CommentSection guideSlug={product.slug} />
        </div>

        <section className="newsletter guide-newsletter">
          <div>
            <p className="eyebrow">The useful list</p>
            <h2>Get the next guide when it is worth reading.</h2>
          </div>
          <NewsletterForm source={`guide-${product.slug}`} />
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
