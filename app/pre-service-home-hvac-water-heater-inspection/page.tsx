import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { homeSystemsInspectionResource } from "../lib/home-systems-inspection-resource";
import { SITE_NAME, SITE_URL } from "../lib/products";
import styles from "./page.module.css";

const resource = homeSystemsInspectionResource;
const ARTICLE_URL = `${SITE_URL}/${resource.slug}`;
const PUBLISHED_DATE = "2026-09-19";
const PUBLISHED_DATE_LABEL = "September 19, 2026";
const IMAGE_ROOT = "/field/home-systems-pre-service";

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: resource.metaTitle,
    description: resource.metaDescription,
    publishedTime: PUBLISHED_DATE,
    modifiedTime: PUBLISHED_DATE,
    images: [
      {
        url: `${IMAGE_ROOT}/boiler-overview.webp`,
        width: 315,
        height: 420,
        alt: "Crown hydronic boiler photographed during a homeowner pre-service inspection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resource.metaTitle,
    description: resource.metaDescription,
    images: [`${IMAGE_ROOT}/boiler-overview.webp`],
  },
};

type FigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  width?: number;
  height?: number;
  priority?: boolean;
};

function FieldFigure({
  src,
  alt,
  caption,
  width = 315,
  height = 420,
  priority = false,
}: FigureProps) {
  return (
    <figure className={styles.figure}>
      <Image
        src={`${IMAGE_ROOT}/${src}`}
        alt={alt}
        width={width}
        height={height}
        sizes={`(max-width: 680px) 92vw, ${width}px`}
        priority={priority}
        unoptimized
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function PreServiceHomeSystemsInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.metaDescription,
    image: [
      `${SITE_URL}${IMAGE_ROOT}/ac-insulation-gap.webp`,
      `${SITE_URL}${IMAGE_ROOT}/boiler-overview.webp`,
      `${SITE_URL}${IMAGE_ROOT}/water-heater-overview.webp`,
      `${SITE_URL}${IMAGE_ROOT}/water-heater-paper-towel-check.webp`,
    ],
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    mainEntityOfPage: ARTICLE_URL,
    articleSection: "Home maintenance field inspection",
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
    about: [
      { "@type": "Thing", name: "Central air conditioner maintenance inspection" },
      { "@type": "Thing", name: "Hydronic boiler inspection" },
      { "@type": "Thing", name: "Gas water heater inspection" },
    ],
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
        name: resource.metaTitle,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resource.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className={styles.page}>
      <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <SiteHeader />

      <article>
        <div className={styles.shell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/troubleshooting">Troubleshooting</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Pre-service home systems inspection</span>
          </nav>

          <header className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>Original field inspection</p>
              <h1>{resource.title}</h1>
              <p className={styles.dek}>{resource.dek}</p>
              <div className={styles.meta}>
                <span>By Jim</span>
                <span>Inspected {PUBLISHED_DATE_LABEL}</span>
                <span>Original photos and field notes</span>
              </div>
            </div>
            <FieldFigure
              priority
              src="boiler-overview.webp"
              alt="Crown hydronic boiler and surrounding piping photographed before annual service"
              caption="The 2023 Crown boiler was photographed and mapped from accessible angles before its scheduled annual service. No burner or combustion adjustments were made."
            />
          </header>

          <section className={styles.scope} aria-label="Inspection scope">
            <p className={styles.scopeLabel}>Scope of this article</p>
            <p>
              This is a pre-service visual inspection of working equipment, not a
              substitute for HVAC or gas-appliance service. I stayed with accessible
              components, documented what I could actually observe, and stopped where
              refrigerant, combustion, safety controls, or difficult attic access would
              have turned an inspection into service work.
            </p>
          </section>

          <div className={styles.layout}>
            <aside className={styles.toc} aria-label="Article contents">
              <p>In this inspection</p>
              <ol>
                <li><a href="#ac">Central AC</a></li>
                <li><a href="#boiler">Hydronic boiler</a></li>
                <li><a href="#water-heater">Water heater</a></li>
                <li><a href="#questions">Questions for service</a></li>
                <li><a href="#limits">What this inspection cannot prove</a></li>
                <li><a href="#sources">Sources</a></li>
              </ol>
            </aside>

            <div className={styles.article}>
              <p className={styles.lede}>
                The goal was not to invent maintenance for relatively new equipment.
                It was to establish a real baseline, find anything visible that deserved
                attention, and arrive at the next service visit with better questions.
                That approach produced one definite maintenance item on the AC, a useful
                component map of the boiler, and a more grounded picture of a 2017 water
                heater.
              </p>

              <section className={styles.section} id="ac">
                <p className={styles.eyebrow}>Central air</p>
                <h2>The AC inspection found one small but real maintenance item</h2>
                <p>
                  The outdoor condenser is a Bryant 126BNA024-A. Its data plate shows an
                  April 2022 manufacture date, R-410A refrigerant, a 208 to 230 volt
                  single-phase supply, and a maximum 25 amp fuse or circuit breaker. The
                  exterior coil was generally open when photographed. Light debris and
                  cobwebbing were more noticeable near the bottom, but there was no heavy
                  blanket covering the visible fins.
                </p>
                <p>
                  The useful finding was at the larger insulated refrigerant line near
                  the condenser. A short section of the black foam had opened enough to
                  expose the line beneath it. Farther toward the house, the insulation
                  showed normal outdoor weathering but remained substantially intact.
                  Because annual AC service is already scheduled, I documented the
                  damaged area for the technician instead of removing panels or
                  duplicating the professional cleaning.
                </p>

                <FieldFigure
                  src="ac-insulation-gap.webp"
                  alt="Localized gap in black refrigerant suction-line insulation near the Bryant condenser"
                  caption="The localized opening in the suction-line insulation was the clearest maintenance finding from the AC inspection. It is being handed off at the scheduled service visit."
                />

                <p>
                  The indoor air handler is in an attic that is awkward to reach. I did
                  not climb into it simply for an article. Routine filter access is much
                  easier because the 14 by 24 by 1 filter sits in a hinged return-air
                  grille inside the house. That is an important part of the maintenance
                  plan: use the safe, accessible service points and leave difficult
                  equipment access to the visit that is already scheduled.
                </p>
              </section>

              <section className={styles.section} id="boiler">
                <p className={styles.eyebrow}>Hydronic heat</p>
                <h2>The boiler inspection became a map of a real system</h2>
                <p>
                  The boiler service tag records a new installation on October 27, 2023.
                  The equipment label identifies a Crown AWR070BNT3SU1, and the front
                  EnergyGuide label shows 84 AFUE. From the accessible exterior, the
                  copper and black-iron piping looked clean for its age, with no obvious
                  active seepage or heavy corrosion in the areas photographed.
                </p>
                <p>
                  The inspection identified the Taco 007-F5 circulator, the gray Zilmet
                  Cal-Pro hydronic expansion tank, the 30 PSI safety relief valve and its
                  open-ended copper discharge tube, the automatic vent damper, isolation
                  valves, and the Watts boiler-feed/backflow assembly. The relief valve
                  body appeared dry in the close photo, and the discharge tube terminated
                  open near the floor rather than being capped.
                </p>
                <p>
                  The expansion-tank label was readable despite the wall clearance. It
                  showed 4.8 gallons of volume, a 60 PSI maximum working pressure, a
                  210°F maximum operating temperature, and a 12 PSI factory precharge.
                  The Taco circulator label identified it directly as a 007-F5 cartridge
                  circulator. Those photographs make it possible to explain what the
                  components do without pretending they were disassembled or tested.
                </p>
                <p>
                  One item remains unresolved. I could not find a readable boiler
                  temperature/pressure gauge from the accessible angles. Crown
                  documentation for the AWR family includes a combination
                  temperature/pressure gauge, so I am not calling the installation
                  incorrect. I am asking the technician to show me where operating
                  pressure and temperature are read on this installation.
                </p>
              </section>

              <section className={styles.section} id="water-heater">
                <p className={styles.eyebrow}>Domestic hot water</p>
                <h2>The older water heater was dry where it mattered during this check</h2>
                <p>
                  The water heater is a Bradford White RG240S6N, a 40-gallon natural-gas
                  atmospheric-vent model rated at 40,000 BTU per hour on its label. Its
                  serial number begins PB. Bradford White uses the first two serial
                  characters as its year and month code. In the context of this installed
                  unit, PB corresponds to February 2017.
                </p>

                <div className={styles.figureGrid}>
                  <FieldFigure
                    src="water-heater-overview.webp"
                    alt="Bradford White RG240S6N gas water heater photographed during the inspection"
                    caption="The Bradford White water heater is a 2017-built atmospheric-vent unit. The dark floor staining beside it is from a known past bathroom leak, not an observed water-heater leak."
                  />
                  <FieldFigure
                    src="water-heater-paper-towel-check.webp"
                    alt="White paper towel after wiping around the water-heater top fittings"
                    caption="A clean paper towel picked up surface grime and old residue around the top fittings but showed no obvious fresh water during this inspection."
                    width={360}
                    height={480}
                  />
                </div>

                <p>
                  The hot and cold connections on top show visible age, oxidation, and
                  discoloration. Instead of calling that a leak from appearance alone, I
                  wiped the accessible fittings with a clean white paper towel. The towel
                  picked up dry grime and residue but no obvious fresh moisture. That
                  observation does not prove the tank or every joint is permanently
                  leak-free. It records what was actually present on September 19, 2026.
                </p>
                <p>
                  The floor beside the tank has dark staining, but that has known history:
                  it came from a previous bathroom leak. It is not being presented here as
                  evidence against the water heater. Context like that matters in a
                  hands-on article because a photograph can otherwise suggest a failure
                  that was never observed.
                </p>
              </section>

              <section className={styles.section} id="questions">
                <p className={styles.eyebrow}>Service handoff</p>
                <h2>The inspection produced better questions, not a shopping list</h2>

                <div className={styles.questionGrid}>
                  <div>
                    <span>AC</span>
                    <p>
                      Inspect the localized suction-line insulation opening and tell me
                      whether the exposed section should be repaired or replaced during
                      service. Document the normal cleaning and operating checks.
                    </p>
                  </div>
                  <div>
                    <span>Boiler</span>
                    <p>
                      Show me where the system temperature and pressure are read. Verify
                      the safety controls, relief system, feed-water regulator, backflow
                      protection, burner operation, and venting during the scheduled
                      service.
                    </p>
                  </div>
                  <div>
                    <span>Water heater</span>
                    <p>
                      Confirm whether the tank is included in annual service, whether it
                      has been drained or flushed before, whether the anode rod has ever
                      been inspected or replaced, and whether its current condition
                      suggests planning for replacement.
                    </p>
                  </div>
                </div>

                <p>
                  Until the water heater's maintenance history is clear, I am not turning
                  a 2017 tank into a first-time flushing experiment for the sake of
                  content. The same rule applies to the boiler relief valve and feed-water
                  controls: photographing and identifying them is useful, but operating or
                  adjusting them just to make an article is not.
                </p>
              </section>

              <section className={styles.section} id="limits">
                <p className={styles.eyebrow}>Evidence limits</p>
                <h2>What this inspection cannot prove</h2>
                <p>
                  Nothing photographed here proves refrigerant charge, combustion
                  quality, flue draft, boiler operating pressure, relief-valve opening
                  performance, backflow-preventer function, or the internal condition of
                  the water-heater tank. Those questions require the appropriate access,
                  instruments, procedures, and sometimes licensed or trained service.
                </p>
                <p>
                  What the inspection does provide is a dated baseline. If corrosion,
                  insulation damage, seepage, noise, or other visible conditions change,
                  these original photographs show what the same equipment looked like
                  before the October 2026 service. I will update this article with the
                  technician's actual findings rather than writing those findings in
                  advance.
                </p>
              </section>

              <section className={styles.faq} aria-labelledby="faq-title">
                <p className={styles.eyebrow}>Common questions</p>
                <h2 id="faq-title">What I would and would not do from here</h2>
                {resource.faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>

              <section className={styles.sources} id="sources" aria-labelledby="sources-title">
                <div>
                  <p className={styles.eyebrow}>Sources and credits</p>
                  <h2 id="sources-title">Manufacturer documentation used</h2>
                  <p>
                    Equipment identity and field observations come from the original
                    photographs taken during this inspection. Manufacturer sources below
                    were used to check component purpose, model documentation, and
                    maintenance context.
                  </p>
                </div>
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
              </section>
            </div>
          </div>
        </div>

        <section className={styles.update}>
          <div>
            <p className={styles.eyebrow}>Next update</p>
            <h2>This article is designed to get better after the service visit.</h2>
            <p>
              The October service will add the professional findings that today's
              accessible inspection cannot supply. That follow-up will be dated and
              separated from the observations recorded here.
            </p>
          </div>
          <NewsletterForm source="home-systems-pre-service-inspection" />
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
