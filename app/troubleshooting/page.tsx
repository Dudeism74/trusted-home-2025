import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { resources } from "../lib/resources";
import { SITE_NAME, SITE_URL } from "../lib/products";

export const metadata: Metadata = {
  title: "Home Troubleshooting and Maintenance Guides",
  description:
    "Practical home troubleshooting guides that help isolate the cause before you clean, adjust, repair, or replace equipment.",
  alternates: { canonical: "/troubleshooting" },
};

export default function TroubleshootingPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} troubleshooting guides`,
    itemListElement: resources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/${resource.slug}`,
      name: resource.title,
    })),
  };

  return (
    <main>
      <JsonLd data={itemListSchema} />
      <SiteHeader />

      <section className="guide-index-hero">
        <div>
          <p className="eyebrow">Diagnose first. Buy second.</p>
          <h1>Home troubleshooting built around the failure mode.</h1>
          <p className="guide-index-lede">
            Start with the symptom, separate likely causes, and verify the system
            before replacing parts or equipment. These guides use a maintenance
            mindset and current technical sources to help narrow the problem.
          </p>
        </div>
        <aside className="answer-card" aria-label="Troubleshooting approach">
          <p className="answer-label">The approach</p>
          <p className="answer-title">
            The same symptom can have several causes. The first job is to determine
            which system is actually failing.
          </p>
          <div className="answer-rule" />
          <p>
            Simple checks come first. Safety boundaries and manufacturer guidance
            still take priority when a repair moves beyond routine homeowner work.
          </p>
        </aside>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Current field notes</p>
            <h2>Problems worth diagnosing before replacement.</h2>
          </div>
          <p>
            The first cluster focuses on air movement, ventilation, moisture, and
            comfort because those systems overlap and because existing search data
            showed real demand for these problems.
          </p>
        </div>

        <div className="product-grid">
          {resources.map((resource, index) => (
            <article className={`product-card ${resource.accent}`} key={resource.slug}>
              <span className="product-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="product-content">
                <p className="product-category">{resource.eyebrow}</p>
                <h3>{resource.title}</h3>
                <p className="product-answer">{resource.dek}</p>
                <div className="card-actions">
                  <Link className="button button-primary" href={`/${resource.slug}`}>
                    Open diagnostic guide
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get practical fixes without the clutter.</h2>
        </div>
        <NewsletterForm source="troubleshooting-index" />
      </section>

      <SiteFooter />
    </main>
  );
}
