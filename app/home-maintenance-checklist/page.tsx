import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  HOME_MAINTENANCE_PUBLISHED_DATE,
  HOME_MAINTENANCE_PUBLISHED_DATE_LABEL,
  HOME_MAINTENANCE_SLUG,
  homeMaintenanceFaq,
  homeMaintenanceSources,
  monthlyMaintenancePlans,
  recurringMaintenanceTasks,
} from "../lib/home-maintenance-checklist";
import { SITE_NAME, SITE_URL } from "../lib/products";
import { PrintChecklistButton } from "./print-button";
import styles from "./page.module.css";

const ARTICLE_URL = `${SITE_URL}/${HOME_MAINTENANCE_SLUG}`;
const HERO_IMAGE_PATH = "/maintenance/home-maintenance-checklist-hero-2026.webp";
const SOCIAL_IMAGE_PATH = "/maintenance/home-maintenance-checklist-social-2026.webp";
const IMAGE_URL = SITE_URL + SOCIAL_IMAGE_PATH;
const META_TITLE = "Home Maintenance Checklist by Month (Printable)";
const META_DESCRIPTION =
  "Use this practical month-by-month home maintenance checklist for safety, HVAC, moisture, appliances, plumbing, and seasonal prep. Print it free.";

export const metadata: Metadata = {
  title: { absolute: `${META_TITLE} | ${SITE_NAME}` },
  description: META_DESCRIPTION,
  alternates: { canonical: `/${HOME_MAINTENANCE_SLUG}` },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: META_TITLE,
    description: META_DESCRIPTION,
    publishedTime: HOME_MAINTENANCE_PUBLISHED_DATE,
    modifiedTime: HOME_MAINTENANCE_PUBLISHED_DATE,
    images: [
      {
        url: IMAGE_URL,
        width: 1728,
        height: 910,
        alt: "Home maintenance tools, an HVAC filter, and a blank monthly checklist on a porch table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [IMAGE_URL],
  },
};

export default function HomeMaintenanceChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Home Maintenance Checklist by Month: What to Check and When",
    description: META_DESCRIPTION,
    image: IMAGE_URL,
    datePublished: HOME_MAINTENANCE_PUBLISHED_DATE,
    dateModified: HOME_MAINTENANCE_PUBLISHED_DATE,
    mainEntityOfPage: ARTICLE_URL,
    articleSection: "Home maintenance planning",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Jim",
      url: `${SITE_URL}/about`,
      jobTitle: "Electromechanical and industrial maintenance professional",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: [
      "Preventive home maintenance",
      "Home safety",
      "HVAC maintenance",
      "Moisture control",
      "Appliance maintenance",
    ],
    citation: homeMaintenanceSources.map((source) => source.url),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Troubleshooting",
        item: `${SITE_URL}/troubleshooting`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: META_TITLE,
        item: ARTICLE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Month-by-month home maintenance schedule",
    numberOfItems: monthlyMaintenancePlans.length,
    itemListElement: monthlyMaintenancePlans.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${plan.month}: ${plan.focus}`,
      url: `${ARTICLE_URL}#${plan.month.toLowerCase()}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeMaintenanceFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className={styles.page}>
      <JsonLd data={[articleSchema, breadcrumbSchema, itemListSchema, faqSchema]} />
      <SiteHeader />

      <article>
        <div className={styles.shell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/troubleshooting">Troubleshooting</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Monthly maintenance checklist</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Free printable planning guide</p>
              <h1>Home maintenance checklist by month: what to check and when</h1>
              <p className={styles.dek}>
                Spread safety checks, moisture control, HVAC care, appliance upkeep,
                and seasonal preparation across the year. Keep the tasks that fit
                your home, climate, and equipment.
              </p>
              <div className={styles.meta}>
                <span>By <Link href="/about">Jim</Link></span>
                <span>Published {HOME_MAINTENANCE_PUBLISHED_DATE_LABEL}</span>
                <span>Source-backed and ungated</span>
              </div>
              <div className={styles.heroActions}>
                <PrintChecklistButton className={styles.printButton} />
                <a href="#january" className={styles.jumpLink}>
                  Start with January
                </a>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <Image
                src={HERO_IMAGE_PATH}
                alt="Home maintenance tools, an HVAC filter, and a blank monthly checklist on a porch table"
                width={1729}
                height={910}
                sizes="(max-width: 980px) 92vw, 48vw"
                priority
                unoptimized
              />
              <figcaption>
                Use the schedule as a planning cadence. Equipment manuals, local
                code, lease terms, and qualified safety guidance take priority.
              </figcaption>
            </figure>
          </header>
        </div>

        <div className={styles.shell}>
          <section className={styles.quickAnswer} aria-labelledby="quick-answer-title">
            <p className={styles.quickLabel}>The quick answer</p>
            <div>
              <h2 id="quick-answer-title">What maintenance should you do every month?</h2>
              <p>
                Test smoke and carbon monoxide alarms, inspect the HVAC filter
                during heavy-use seasons, and scan for active water or moisture
                problems. Clean the dryer lint filter before every load. Then use
                the month-by-month plan below for seasonal work.
              </p>
            </div>
          </section>

          <section className={styles.recurring} aria-labelledby="recurring-title">
            <header className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Keep these on repeat</p>
                <h2 id="recurring-title">The short recurring list</h2>
              </div>
              <p>
                These checks catch safety, airflow, fire, and water problems before
                the calendar-specific work begins.
              </p>
            </header>
            <div className={styles.recurringGrid}>
              {recurringMaintenanceTasks.map((task) => (
                <article className={styles.recurringCard} key={task.title}>
                  <div className={styles.checkRow}>
                    <input
                      type="checkbox"
                      aria-label={`Mark ${task.title} complete`}
                    />
                    <span>{task.scope}</span>
                  </div>
                  <h3>{task.title}</h3>
                  <p>{task.detail}</p>
                  {task.href ? <Link href={task.href}>Open the related guide</Link> : null}
                </article>
              ))}
            </div>
          </section>

          <nav className={styles.monthNav} aria-label="Jump to a month">
            <p>Jump to a month</p>
            <div>
              {monthlyMaintenancePlans.map((plan) => (
                <a key={plan.month} href={`#${plan.month.toLowerCase()}`}>
                  {plan.month.slice(0, 3)}
                </a>
              ))}
            </div>
          </nav>

          <section className={styles.calendar} aria-labelledby="calendar-title">
            <header className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Twelve manageable checkpoints</p>
                <h2 id="calendar-title">The month-by-month home maintenance checklist</h2>
              </div>
              <p>
                The month is a reminder, not a universal deadline. Move climate and
                equipment tasks to the point in the year that fits your home.
              </p>
            </header>

            <div className={styles.monthGrid}>
              {monthlyMaintenancePlans.map((plan, index) => (
                <section
                  className={styles.monthCard}
                  id={plan.month.toLowerCase()}
                  key={plan.month}
                >
                  <header>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <p>{plan.month}</p>
                      <h3>{plan.focus}</h3>
                    </div>
                  </header>
                  <p className={styles.monthSummary}>{plan.summary}</p>
                  <ul>
                    {plan.tasks.map((task) => (
                      <li key={task.title}>
                        <input
                          type="checkbox"
                          aria-label={`Mark ${task.title} complete for ${plan.month}`}
                        />
                        <div>
                          <span className={styles.scope}>{task.scope}</span>
                          <h4>{task.title}</h4>
                          <p>{task.detail}</p>
                          {task.href ? (
                            <Link href={task.href}>Use the diagnostic guide</Link>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className={styles.boundaries} aria-labelledby="boundaries-title">
            <div>
              <p className={styles.eyebrow}>Know the service boundary</p>
              <h2 id="boundaries-title">A checklist should prevent guessing, not encourage it.</h2>
            </div>
            <div>
              <p>
                Stop and use qualified service for gas leaks or combustion concerns,
                arcing or hot electrical components, structural movement, roof work
                without safe access, refrigerant systems, persistent active water
                entry, or any task outside your training and equipment.
              </p>
              <p>
                If a protective device trips, a safety alarm sounds, or a leak
                returns, treat that as diagnostic evidence. Do not bypass the device
                or cover the symptom with a replacement product.
              </p>
            </div>
          </section>

          <section className={styles.faq} aria-labelledby="faq-title">
            <header className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Clear answers</p>
                <h2 id="faq-title">Home maintenance checklist questions</h2>
              </div>
            </header>
            <div className={styles.faqList}>
              {homeMaintenanceFaq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={styles.sources} aria-labelledby="sources-title">
            <header>
              <p className={styles.eyebrow}>Evidence and limits</p>
              <h2 id="sources-title">Sources behind the schedule</h2>
            </header>
            <div>
              <p>
                The monthly grouping is Trusted Home Essentials editorial planning.
                The underlying maintenance and safety claims come from the primary
                sources below. The sources do not claim that every task belongs in
                the exact month assigned here.
              </p>
              <ol>
                {homeMaintenanceSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener">
                      {source.label}
                    </a>
                    <span>{source.supports}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </article>

      <section className={`newsletter ${styles.newsletter}`}>
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get the next practical home guide without the clutter.</h2>
        </div>
        <NewsletterForm source="home-maintenance-checklist" />
      </section>

      <SiteFooter />
    </main>
  );
}
