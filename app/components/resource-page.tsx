import Link from "next/link";
import { JsonLd } from "./json-ld";
import { NewsletterForm } from "./newsletter-form";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import {
  getResource,
  RESOURCE_REVIEWED_DATE,
  RESOURCE_REVIEWED_DATE_LABEL,
  type TroubleshootingResource,
} from "../lib/resources";
import { SITE_NAME, SITE_URL } from "../lib/products";

export function ResourcePage({ resource }: { resource: TroubleshootingResource }) {
  const articleUrl = `${SITE_URL}/${resource.slug}`;
  const relatedResources = resource.relatedSlugs
    .map((slug) => getResource(slug))
    .filter((item): item is TroubleshootingResource => Boolean(item));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.metaDescription,
    datePublished: RESOURCE_REVIEWED_DATE,
    dateModified: RESOURCE_REVIEWED_DATE,
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
        name: "Troubleshooting",
        item: `${SITE_URL}/troubleshooting`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: resource.title,
        item: articleUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resource.faq.map((item) => ({
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

      <article className={`guide-page ${resource.accent}`}>
        <div className="guide-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/troubleshooting">Troubleshooting</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{resource.metaTitle}</span>
          </nav>

          <header className="guide-hero">
            <div className="guide-hero-copy">
              <p className="eyebrow">{resource.eyebrow}</p>
              <h1>{resource.title}</h1>
              <p className="guide-dek">{resource.dek}</p>
              <div className="review-meta">
                <span>By Jim</span>
                <span>Reviewed {RESOURCE_REVIEWED_DATE_LABEL}</span>
                <span>Maintenance led troubleshooting</span>
              </div>
            </div>

            <aside className="answer-card" aria-label="Diagnostic principle">
              <p className="answer-label">Diagnostic principle</p>
              <p className="answer-title">{resource.principle}</p>
              <div className="answer-rule" />
              <p>
                Start with the symptom and verify the failure mode before buying
                replacement parts or equipment.
              </p>
            </aside>
          </header>

          <section className="quick-answer" aria-labelledby="quick-answer-title">
            <p className="answer-label">The quick answer</p>
            <h2 id="quick-answer-title">What should you do first?</h2>
            <p>{resource.quickAnswer}</p>
          </section>

          <section className="guide-section">
            <div className="section-kicker">Diagnostic sequence</div>
            <div>
              <h2>Start with these checks</h2>
              <ol className="editorial-list">
                {resource.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {resource.sections.map((section) => (
            <section className="guide-section" key={section.title}>
              <div className="section-kicker">{section.kicker}</div>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p className={index === 0 ? "large-copy" : undefined} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="faq-section" aria-labelledby="faq-title">
            <div>
              <p className="eyebrow">Clear answers</p>
              <h2 id="faq-title">Common questions</h2>
            </div>
            <div className="faq-list">
              {resource.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {relatedResources.length > 0 ? (
            <section className="guide-section">
              <div className="section-kicker">Keep diagnosing</div>
              <div>
                <h2>Related troubleshooting</h2>
                <ol className="editorial-list">
                  {relatedResources.map((item, index) => (
                    <li key={item.slug}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>
                          <Link href={`/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <p>{item.dek}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ) : null}

          <section className="sources-section" aria-labelledby="sources-title">
            <div>
              <p className="eyebrow">Evidence</p>
              <h2 id="sources-title">Sources and method</h2>
            </div>
            <div>
              <p>
                This guide combines a maintenance troubleshooting approach with
                current technical guidance from the sources below. Safety rules,
                manufacturer instructions, and applicable codes take priority over
                general troubleshooting guidance.
              </p>
              <ol>
                {resource.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener">
                      {source.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/editorial-policy">
                    Trusted Home Essentials editorial policy
                  </Link>
                </li>
              </ol>
            </div>
          </section>
        </div>

        <section className="newsletter guide-newsletter">
          <div>
            <p className="eyebrow">The useful list</p>
            <h2>Get practical fixes and buying guidance.</h2>
          </div>
          <NewsletterForm source={`resource-${resource.slug}`} />
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
