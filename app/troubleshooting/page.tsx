import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { allResources, getAnyResource } from "../lib/all-resources";
import type { TroubleshootingResource } from "../lib/resources";
import { SITE_NAME, SITE_URL } from "../lib/products";

export const metadata: Metadata = {
  title: "Home Troubleshooting and Maintenance Guides",
  description:
    "Practical troubleshooting for common home appliance, plumbing, electrical, HVAC, ventilation, moisture, and comfort problems. Diagnose the cause before replacing parts or equipment.",
  alternates: { canonical: "/troubleshooting" },
};

const resourceGroups = [
  {
    eyebrow: "Air, ventilation, and comfort",
    title: "Airflow and moisture problems",
    description:
      "Diagnose drafts, bathroom ventilation, mold conditions, purifier sizing, and central cooling problems as connected airflow systems.",
    slugs: [
      "stop-drafts-from-windows-without-replacement",
      "fix-noisy-bathroom-exhaust-fan",
      "prevent-bathroom-mold-growth-steps",
      "bathroom-exhaust-fan-cfm-sizing",
      "bathroom-exhaust-fan-repair-or-replace",
      "air-purifier-cadr-room-size-guide",
      "central-air-conditioner-not-cooling-troubleshooting-guide",
    ],
  },
  {
    eyebrow: "Plumbing and hot water",
    title: "Leaks, running water, and no hot water",
    description:
      "Trace where water is moving, leaking, or failing to heat before replacing a fixture or major appliance.",
    slugs: [
      "toilet-keeps-running",
      "fix-leaking-kitchen-faucet-guide",
      "water-heater-not-providing-hot-water-solutions",
    ],
  },
  {
    eyebrow: "Appliances",
    title: "Cooling, heating, washing, and draining failures",
    description:
      "Separate power, airflow, water path, controls, and mechanical faults before condemning an appliance.",
    slugs: [
      "refrigerator-not-cooling",
      "dryer-not-heating",
      "washer-not-draining",
      "dishwasher-not-draining",
      "why-dishwasher-not-cleaning-properly",
    ],
  },
  {
    eyebrow: "Electrical safety",
    title: "Protective devices and circuit faults",
    description:
      "Treat a protective trip as evidence and isolate loads safely without bypassing the device designed to protect the circuit.",
    slugs: ["breaker-keeps-tripping"],
  },
];

export default function TroubleshootingPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} troubleshooting guides`,
    itemListElement: allResources.map((resource, index) => ({
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
          <p className="eyebrow">The useful list</p>
          <h2>Get practical fixes without the clutter.</h2>
        </div>
        <NewsletterForm source="troubleshooting-index" />
      </section>

      <SiteFooter />
    </main>
  );
}
