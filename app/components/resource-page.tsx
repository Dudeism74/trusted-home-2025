import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { NewsletterForm } from "./newsletter-form";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { getAnyResource } from "../lib/all-resources";
import {
  contextualAnchorTerms,
  getRelatedResourceSlugs,
  supplementalContextualLinks,
} from "../lib/internal-links";
import {
  RESOURCE_REVIEWED_DATE,
  RESOURCE_REVIEWED_DATE_LABEL,
  type TroubleshootingResource,
} from "../lib/resources";
import { SITE_NAME, SITE_URL } from "../lib/products";

export function ResourcePage({ resource }: { resource: TroubleshootingResource }) {
  const articleUrl = `${SITE_URL}/${resource.slug}`;
  const relatedSlugs = getRelatedResourceSlugs(
    resource.slug,
    resource.relatedSlugs,
  );
  const relatedResources = relatedSlugs
    .map((slug) => getAnyResource(slug))
    .filter((item): item is TroubleshootingResource => Boolean(item));

  const contextualTargets = [
    ...relatedSlugs.map((slug) => ({
      key: `resource:${slug}`,
      href: `/${slug}`,
      terms: contextualAnchorTerms[slug] ?? [],
    })),
    ...(supplementalContextualLinks[resource.slug] ?? []).map((link) => ({
      key: `supplemental:${link.href}`,
      href: link.href,
      terms: link.terms,
    })),
  ];

  const linkedContextTargets = new Set<string>();
  let internalLinkSequence = 0;

  const linkContextually = (text: string): ReactNode => {
    let nodes: ReactNode[] = [text];

    for (const target of contextualTargets) {
      if (linkedContextTargets.has(target.key) || target.terms.length === 0) {
        continue;
      }

      let inserted = false;
      for (const term of target.terms) {
        for (let index = 0; index < nodes.length; index += 1) {
          const node = nodes[index];
          if (typeof node !== "string") {
            continue;
          }

          const matchIndex = node.toLowerCase().indexOf(term.toLowerCase());
          if (matchIndex < 0) {
            continue;
          }

          const before = node.slice(0, matchIndex);
          const matchedText = node.slice(matchIndex, matchIndex + term.length);
          const after = node.slice(matchIndex + term.length);
          internalLinkSequence += 1;
          nodes.splice(
            index,
            1,
            before,
            <Link
              href={target.href}
              key={`contextual-${internalLinkSequence}`}
              style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              {matchedText}
            </Link>,
            after,
          );
          linkedContextTargets.add(target.key);
          inserted = true;
          break;
        }

        if (inserted) {
          break;
        }
      }
    }

    return <>{nodes}</>;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.metaDescription,
    articleSection: resource.eyebrow,
    datePublished: RESOURCE_REVIEWED_DATE,
    dateModified: RESOURCE_REVIEWED_DATE,
    mainEntityOfPage: articleUrl,
    isAccessibleForFree: true,
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

  return (
    <main>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
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
            <p>{linkContextually(resource.quickAnswer)}</p>
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
                      <p>{linkContextually(step.detail)}</p>
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
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{linkContextually(paragraph)}</p>
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
                  <p>{linkContextually(item.answer)}</p>
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
