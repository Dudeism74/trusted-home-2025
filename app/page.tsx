import Link from "next/link";
import type { Metadata } from "next";
import { FeaturedProductGrid } from "./components/featured-product-grid";
import { JsonLd } from "./components/json-ld";
import { NewsletterForm } from "./components/newsletter-form";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { allResources } from "./lib/all-resources";
import { products, SITE_NAME, SITE_URL } from "./lib/products";
import { featuredResources } from "./lib/resources";

export const metadata: Metadata = {
  description:
    "Practical home troubleshooting and maintenance guidance that helps diagnose the problem before replacement, plus source-backed buying analysis when new equipment is the right answer.",
  alternates: { canonical: "/" },
};

export const revalidate = 3600;

export default function Home() {
  const pm20 = products.find((product) => product.slug === "dreame-pm20")!;
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Practical home troubleshooting, maintenance guidance, and source-backed product analysis.",
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
        name: "Featured Trusted Home Essentials troubleshooting resources",
        itemListElement: featuredResources.map((resource, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/${resource.slug}`,
          name: resource.title,
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
          <p className="eyebrow">Diagnose first. Buy second.</p>
          <h1>Practical home troubleshooting before you replace what might be fixable.</h1>
          <p className="hero-lede">
            Start with the symptom, isolate the likely causes, and use source-backed
            checks to decide whether the answer is cleaning, adjustment, repair, or
            replacement. When buying is the right move, our product guides explain
            fit and tradeoffs without pretending we tested what we did not.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/troubleshooting">
              Start troubleshooting
            </Link>
            <Link className="text-link" href="/about">
              Why this approach
            </Link>
          </div>
        </div>

        <aside className="answer-card" aria-label="The maintenance mindset">
          <p className="answer-label">The maintenance mindset</p>
          <p className="answer-title">
            Start with the failure mode, not the shopping list.
          </p>
          <div className="answer-rule" />
          <p>
            A symptom can come from several systems. Narrow the cause first, then
            replace only what the evidence points to.
          </p>
        </aside>
      </section>

      <div className="disclosure" role="note">
        <strong>Affiliate disclosure:</strong> Some buying guides contain Amazon
        affiliate links. Troubleshooting guidance is not paid for, and a commission
        does not decide whether repair or replacement is recommended.
      </div>

      <section className="products-section" id="troubleshooting">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured troubleshooting</p>
            <h2>Problems worth diagnosing before replacement.</h2>
          </div>
          <p>
            The featured cluster focuses on air movement, bathroom ventilation,
            moisture, and comfort. The full troubleshooting library now also covers
            appliance, plumbing, hot-water, and electrical problems.
          </p>
        </div>

        <div className="product-grid">
          {featuredResources.map((resource) => (
            <article className={`product-card ${resource.accent}`} key={resource.slug}>
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

        <div className="hero-actions">
          <Link className="text-link" href="/home-maintenance-checklist">
            Open the monthly maintenance checklist
          </Link>
          <Link className="text-link" href="/troubleshooting">
            See all troubleshooting guides
          </Link>
        </div>
      </section>

      <section className="standards" id="standards">
        <div>
          <p className="eyebrow">Our editorial standard</p>
          <h2>Useful guidance begins with the diagnosis.</h2>
        </div>
        <div className="standards-grid">
          <article>
            <span>01</span>
            <h3>Confirm the symptom</h3>
            <p>
              Describe what is actually happening before assigning a failed part or
              a replacement product to it.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Isolate the system</h3>
            <p>
              Separate mechanical, electrical, airflow, moisture, installation,
              and control problems when the same symptom could come from several
              causes.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Repair before replace</h3>
            <p>
              Cleaning, adjustment, a serviceable component, or a corrected
              installation belongs ahead of replacement when it solves the actual
              problem safely.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Source the technical claim</h3>
            <p>
              Government guidance, recognized industry organizations,
              manufacturer documentation, and current specifications anchor the
              facts. Our interpretation is labeled as judgment.
            </p>
          </article>
        </div>
      </section>

      <section className="products-section" id="guides">
        <div className="section-heading">
          <div>
            <p className="eyebrow">When buying is the answer</p>
            <h2>Product analysis connected to the problem.</h2>
          </div>
          <p>
            The Dreame PM20 is the current product guide most closely connected to
            the original air and comfort cluster. Its published CADR can be checked
            against room volume instead of relying only on a square-foot coverage
            headline.
          </p>
        </div>

        <FeaturedProductGrid products={[pm20]} />

        <div className="hero-actions">
          <Link className="text-link" href="/guides">
            See the complete buying guide archive
          </Link>
        </div>
      </section>

      <section className="authority-strip" aria-label="How the site is built">
        <div>
          <strong>{allResources.length}</strong>
          <span>focused troubleshooting resources</span>
        </div>
        <div>
          <strong>1</strong>
          <span>maintenance mindset across the site</span>
        </div>
        <div>
          <strong>0</strong>
          <span>invented hands on tests</span>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get practical fixes and buying guidance without the clutter.</h2>
        </div>
        <NewsletterForm source="homepage" />
      </section>

      <SiteFooter />
    </main>
  );
}
