import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { getAnyResource } from "../lib/all-resources";
import { resources, type TroubleshootingResource } from "../lib/resources";
import { ovenIgniterResource } from "../lib/oven-igniter-resource";
import { SITE_NAME, SITE_URL } from "../lib/products";

export const metadata: Metadata = {
  title: "Home Troubleshooting and Maintenance Guides",
  description:
    "Practical troubleshooting for common home appliance, plumbing, electrical, HVAC, ventilation, moisture, and comfort problems. Diagnose the cause before replacing parts or equipment.",
  alternates: { canonical: "/troubleshooting" },
};

const curatedResources = [...resources, ovenIgniterResource];

const resourceGroups = [
  {
    eyebrow: "Air, ventilation, and comfort",
    title: "Airflow and moisture problems",
    description:
      "Diagnose drafts, bathroom ventilation, mold conditions, and purifier sizing as connected airflow systems.",
    slugs: [
      "stop-drafts-from-windows-without-replacement",
      "fix-noisy-bathroom-exhaust-fan",
      "prevent-bathroom-mold-growth-steps",
      "bathroom-exhaust-fan-cfm-sizing",
      "bathroom-exhaust-fan-repair-or-replace",
      "air-purifier-cadr-room-size-guide",
    ],
  },
  {
    eyebrow: "Documented repair",
    title: "A real repair with the evidence left in",
    description:
      "The Whirlpool oven guide records the actual symptom, replacement decision, connector mismatch, original photographs, and successful final operating test.",
    slugs: ["whirlpool-oven-igniter-glows-but-wont-heat"],
  },
];

export default function TroubleshootingPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} troubleshooting guides`,
    itemListElement: curatedResources.map((resource, index) => ({
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
            before replacing parts or equipment. These guides combine a maintenance
            mindset with current technical sources and explicit safety boundaries.
          </p>
        </div>
        <aside className="answer-card" aria-label="Troubleshooting approach">
          <p className="answer-label">The approach</p>
          <p className="answer-title">
            The same symptom can have several causes. Determine which system is
            actually failing before buying a solution.
          </p>
          <div className="answer-rule" />
          <p>
            Simple checks come first. Safety rules, manufacturer instructions, and
            applicable codes take priority when the repair moves beyond routine
            homeowner work.
          </p>
        </aside>
      </section>

      <section className="products-section" aria-labelledby="diagnostic-method-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start with the process</p>
            <h2 id="diagnostic-method-title">Use the same diagnostic sequence before choosing a repair.</h2>
          </div>
          <p>
            My maintenance method starts by writing the exact symptom, setting the
            safety boundary, dividing the system into functions, and choosing the
            next test because its result will eliminate possible causes.
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card cobalt">
            <span className="product-number">01</span>
            <div className="product-content" style={{ paddingTop: "58px" }}>
              <p className="product-category">Original troubleshooting method</p>
              <h3>The Maintenance Troubleshooting Method I Use at Home</h3>
              <p className="product-answer">
                A reusable failure-mode-first process adapted from electromechanical
                and industrial maintenance, with a printable diagnostic worksheet.
              </p>
              <div className="card-actions">
                <Link className="button button-primary" href="/diagnostic-method">
                  Open the diagnostic method
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="products-section" aria-labelledby="maintenance-planner-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Plan before the problem</p>
            <h2 id="maintenance-planner-title">Spread preventive work across the year.</h2>
          </div>
          <p>
            The free printable checklist organizes safety, HVAC, moisture,
            appliance, plumbing, drainage, and seasonal tasks into twelve
            manageable checkpoints.
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card lime">
            <span className="product-number">12</span>
            <div className="product-content" style={{ paddingTop: "58px" }}>
              <p className="product-category">Monthly maintenance planner</p>
              <h3>Home Maintenance Checklist by Month</h3>
              <p className="product-answer">
                Keep only the tasks that match your home, equipment, and climate.
                Print it or save it as a PDF without an email gate.
              </p>
              <div className="card-actions">
                <Link className="button button-primary" href="/home-maintenance-checklist">
                  Open the free checklist
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {resourceGroups.map((group) => {
        const groupResources = group.slugs
          .map((slug) => getAnyResource(slug))
          .filter((resource): resource is TroubleshootingResource => Boolean(resource));

        return (
          <section className="products-section" key={group.title}>
            <div className="section-heading">
              <div>
                <p className="eyebrow">{group.eyebrow}</p>
                <h2>{group.title}</h2>
              </div>
              <p>{group.description}</p>
            </div>

            <div className="product-grid">
              {groupResources.map((resource, index) => (
                <article
                  className={`product-card ${resource.accent}`}
                  key={resource.slug}
                >
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="product-content" style={{ paddingTop: "58px" }}>
                    <p className="product-category">{resource.eyebrow}</p>
                    <h3>{resource.title}</h3>
                    <p className="product-answer">{resource.dek}</p>
                    <div className="card-actions">
                      <Link
                        className="button button-primary"
                        href={`/${resource.slug}`}
                      >
                        Open diagnostic guide
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="newsletter">
        <div>
          <p className="eyebrow">Stay in touch</p>
          <h2>Questions, corrections, and future guides.</h2>
        </div>
        <NewsletterForm source="troubleshooting-index" />
      </section>

      <SiteFooter />
    </main>
  );
}
