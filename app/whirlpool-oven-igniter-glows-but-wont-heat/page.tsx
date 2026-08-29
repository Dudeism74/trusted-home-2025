import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AffiliateButton } from "../components/affiliate-button";
import { CommentSection } from "../components/comment-section";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { getAnyResource } from "../lib/all-resources";
import { ovenIgniterResource } from "../lib/oven-igniter-resource";
import { SITE_NAME, SITE_URL } from "../lib/products";
import type { TroubleshootingResource } from "../lib/resources";
import styles from "./page.module.css";

const SLUG = ovenIgniterResource.slug;
const ARTICLE_URL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-08-29";
const PUBLISHED_DATE_LABEL = "August 29, 2026";
const IMAGE_ROOT = "/repair/whirlpool-oven-igniter";
const IGNITER_URL = "https://amzn.to/4xtJqvS";
const CERAMIC_CONNECTOR_URL = "https://amzn.to/4h0ipud";

export const metadata: Metadata = {
  title: ovenIgniterResource.metaTitle,
  description: ovenIgniterResource.metaDescription,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: ovenIgniterResource.metaTitle,
    description: ovenIgniterResource.metaDescription,
    publishedTime: PUBLISHED_DATE,
    modifiedTime: PUBLISHED_DATE,
    images: [
      {
        url: `${IMAGE_ROOT}/whirlpool-oven-blue-flame.webp`,
        width: 510,
        height: 680,
        alt: "Whirlpool gas oven bake burner operating with an even blue flame after an igniter replacement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ovenIgniterResource.metaTitle,
    description: ovenIgniterResource.metaDescription,
    images: [`${IMAGE_ROOT}/whirlpool-oven-blue-flame.webp`],
  },
};

type FigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  width: number;
  height: number;
  priority?: boolean;
  hero?: boolean;
};

function RepairFigure({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  hero = false,
}: FigureProps) {
  return (
    <figure className={hero ? styles.heroFigure : styles.figure}>
      <Image
        src={`${IMAGE_ROOT}/${src}`}
        alt={alt}
        width={width}
        height={height}
        sizes={hero ? "(max-width: 980px) 92vw, 38vw" : "(max-width: 980px) 92vw, 62vw"}
        priority={priority}
        unoptimized
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const faq = [
  {
    question: "Can an oven igniter glow and still be bad?",
    answer:
      "Yes. The original igniter in this Whirlpool range glowed orange but did not reliably cause the bake burner to light. After it was replaced, the existing gas valve opened promptly and the burner operated normally.",
  },
  {
    question: "Why did the stovetop work while the oven did not?",
    answer:
      "The surface burners and bake burner use different ignition components. Working cooktop burners showed that gas was available to the range, but they did not prove that the oven igniter could operate the bake safety valve.",
  },
  {
    question: "Does every W11590294 have the connector mismatch?",
    answer:
      "Not necessarily. The mismatch occurred between the genuine W11590294 received for this repair and the original harness in this WFG505M0MS0. Compare the old part, new part, and range harness before modifying anything.",
  },
  {
    question: "Where is the model number on the Whirlpool WFG505M0MS0?",
    answer:
      "On this range, the model-and-serial label is on the left interior wall of the lower drawer opening. Pull the lower drawer completely out to see it.",
  },
  {
    question: "Did the gas valve or control board also need replacement?",
    answer:
      "No. Once the new igniter was installed, the original gas valve opened normally, the flame was even and blue, and the fully assembled oven reached and held 350°F while cycling correctly.",
  },
];

const relatedResources = ovenIgniterResource.relatedSlugs
  .map((slug) => getAnyResource(slug))
  .filter((resource): resource is TroubleshootingResource => Boolean(resource));

export default function WhirlpoolOvenIgniterRepairPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ovenIgniterResource.title,
    description: ovenIgniterResource.metaDescription,
    image: [
      `${SITE_URL}${IMAGE_ROOT}/whirlpool-oven-blue-flame.webp`,
      `${SITE_URL}${IMAGE_ROOT}/old-new-igniters.webp`,
    ],
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    mainEntityOfPage: ARTICLE_URL,
    articleSection: "Appliance repair",
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
      { "@type": "Thing", name: "Whirlpool WFG505M0MS0 gas range" },
      { "@type": "Thing", name: "Whirlpool W11590294 oven igniter" },
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
        name: ovenIgniterResource.metaTitle,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
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
            <span aria-current="page">Whirlpool oven igniter repair</span>
          </nav>

          <header className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>Hands-on appliance repair</p>
              <h1>Whirlpool Oven Igniter Glows but Won&apos;t Heat</h1>
              <p className={styles.dek}>
                Our WFG505M0MS0 stalled near 155°F even though the igniter glowed.
                Replacing it with OEM part W11590294 restored prompt ignition,
                normal burner cycling, and reliable 350°F operation.
              </p>
              <div className={styles.meta}>
                <span>By Jim</span>
                <span>Repair completed {PUBLISHED_DATE_LABEL}</span>
                <span>Original photos and field notes</span>
              </div>
            </div>

            <RepairFigure
              hero
              priority
              src="whirlpool-oven-blue-flame.webp"
              alt="Blue flame burning evenly along the Whirlpool oven bake burner after installing a new igniter"
              width={510}
              height={680}
              caption="The new igniter opened the existing safety valve promptly. The fully assembled oven then reached 350°F, held temperature, and cycled normally."
            />
          </header>
        </div>

        <div className={styles.disclosure} role="note">
          <strong>Affiliate disclosure:</strong> As an Amazon Associate, I earn from
          qualifying purchases. The diagnosis and recommendation below come from the
          failure and successful repair documented here.
        </div>

        <div className={styles.shell}>
          <section className={styles.quickAnswer} aria-labelledby="quick-answer">
            <p className={styles.quickLabel}>The quick answer</p>
            <div>
              <h2 id="quick-answer">A glowing igniter can still be the failed part.</h2>
              <p>
                The original igniter became orange but did not reliably open the oven
                safety valve. The replacement igniter lit the existing burner promptly,
                and every post-repair test passed. No gas valve, temperature sensor, or
                control board was replaced.
              </p>
            </div>
          </section>

          <div className={styles.layout}>
            <aside className={styles.toc} aria-label="Article contents">
              <p>In this repair</p>
              <ol>
                <li><a href="#symptoms">Symptoms and diagnosis</a></li>
                <li><a href="#part">Part and model number</a></li>
                <li><a href="#safety">Safety and access</a></li>
                <li><a href="#connector">Connector mismatch</a></li>
                <li><a href="#install">Installation and routing</a></li>
                <li><a href="#test">Final operating test</a></li>
              </ol>
            </aside>

            <div className={styles.article}>
              <p className={styles.lede}>
                Our Whirlpool gas range was less than two years old when the stovetop
                continued working but the oven stopped heating properly. The confusing
                clue was an igniter that looked alive. It glowed orange, yet the burner
                often stayed off.
              </p>

              <section className={styles.section} id="symptoms">
                <p className={styles.eyebrow}>What happened</p>
                <h2>The oven stalled near 155°F before it sometimes lit late</h2>
                <p>
                  The controls accepted a 350°F bake setting and the displayed
                  temperature started rising. It then stopped around 155°F. Through the
                  slots in the oven floor, the bake igniter was visibly glowing orange,
                  but the burner did not light normally and there was no noticeable gas
                  smell.
                </p>
                <p>
                  On one attempt, the burner suddenly lit after a long delay and the
                  oven eventually reached 350°F. That intermittent behavior made a weak
                  hot-surface igniter the leading suspect. A completely open igniter may
                  not glow at all. This one still glowed but could not start the burner
                  reliably.
                </p>
                <div className={styles.figureGrid}>
                  <RepairFigure
                    src="whirlpool-oven-stalled-155.webp"
                    alt="Whirlpool gas range display stalled near 155 degrees during a 350 degree preheat"
                    width={680}
                    height={665}
                    caption="The oven stopped climbing near 155°F even though Bake was set to 350°F."
                  />
                  <RepairFigure
                    src="igniter-glowing-through-oven-floor.webp"
                    alt="Orange oven igniter glow visible through slots in the Whirlpool oven floor"
                    width={510}
                    height={680}
                    caption="The orange glow was real, but it did not prove that the igniter could start the burner."
                  />
                </div>
              </section>

              <section className={styles.section} id="part">
                <p className={styles.eyebrow}>Part identification</p>
                <h2>The OEM igniter used in this repair</h2>
                <p>
                  The range is a Whirlpool WFG505M0MS0. The genuine replacement
                  installed was Whirlpool W11590294, a hot-surface oven igniter that
                  Whirlpool lists as replacing W11208965.
                </p>

                <div className={styles.productCard}>
                  <div>
                    <strong>Installed replacement</strong>
                    <h3>Whirlpool OEM W11590294 oven igniter</h3>
                    <p>
                      Verify the full model number on your own range before ordering.
                      Similar-looking Whirlpool ranges can use different parts.
                    </p>
                  </div>
                  <AffiliateButton
                    href={IGNITER_URL}
                    productName="Whirlpool W11590294 OEM Oven Igniter"
                    amazonAsin="B0DYNRLK4G"
                    affiliateTag="trustedhome-20"
                    className={styles.buyButton}
                  >
                    Check the OEM igniter
                  </AffiliateButton>
                </div>

                <div className={styles.figureGrid}>
                  <RepairFigure
                    src="whirlpool-model-label-location.webp"
                    alt="Whirlpool WFG505M0MS0 model and serial label on the left inside wall of the lower drawer opening"
                    width={1200}
                    height={535}
                    caption={
                      <>
                        <strong>Where to find the label:</strong> Pull the lower drawer
                        completely out and look on the left interior wall of the drawer
                        opening. The serial number is blurred here for privacy.
                      </>
                    }
                  />
                  <RepairFigure
                    src="oem-w11590294-box.webp"
                    alt="Genuine Whirlpool factory-certified W11590294 oven igniter package"
                    width={680}
                    height={661}
                    caption="The factory-certified package identified the new part as W11590294."
                  />
                </div>
              </section>

              <section className={styles.section} id="safety">
                <p className={styles.eyebrow}>Before opening the range</p>
                <h2>Disconnect electricity and close the manual gas valve</h2>
                <p>
                  This repair involves household voltage, combustible gas, sharp sheet
                  metal, hot surfaces, and a brittle ceramic igniter. I unplugged the
                  range and closed its manual gas shutoff before removing any panels.
                </p>
                <p>
                  I did not loosen the yellow flexible gas line, oven gas valve, or any
                  gas fitting. If you smell gas, stop immediately, avoid operating
                  electrical switches, leave the area, and contact the gas utility or an
                  appropriately qualified service professional.
                </p>
                <div className={styles.warning}>
                  <strong>Service boundary</strong>
                  <p>
                    This records a repair completed on one range. Stop if the wiring,
                    connector, burner, or gas arrangement differs from what is shown.
                  </p>
                </div>
                <RepairFigure
                  src="gas-shutoff-closed.webp"
                  alt="Red handle on the manual gas shutoff turned perpendicular to the vertical gas pipe"
                  width={581}
                  height={680}
                  caption="On this installation, the red handle was perpendicular to the vertical pipe when closed. Valve designs can differ."
                />

                <h3>Remove the door, oven floor, and old igniter</h3>
                <p>
                  Removing the oven door made the burner easier to reach. After moving
                  both hinge locks to the removal position, I lifted the door out by its
                  sides and placed it on a padded surface. I then removed the racks,
                  lower oven floor, and burner cover.
                </p>
                <p>
                  Two small hex-head screws held the igniter beside the bake burner. One
                  came out normally. The other became tight after backing out partway,
                  so I worked it gently back and forth rather than snapping it. The
                  burner tube and gas fittings stayed in place.
                </p>
                <RepairFigure
                  src="bake-burner-exposed.webp"
                  alt="Whirlpool oven with the door and floor removed, exposing the center bake burner and igniter"
                  width={510}
                  height={680}
                  caption="With the floor removed, the bake burner and original igniter were accessible from the front."
                />
              </section>

              <section className={styles.section} id="connector">
                <p className={styles.eyebrow}>The unexpected problem</p>
                <h2>The genuine replacement did not plug into the range harness</h2>
                <p>
                  The original igniter leads passed through the rear oven wall to a
                  white two-pin connector behind the lower galvanized cover. After the
                  old igniter was unplugged, I compared both assemblies.
                </p>
                <p>
                  The brackets, mounting holes, element position, and wire length
                  matched closely. The connectors did not. The new OEM igniter and the
                  range harness presented the same mating configuration, so they could
                  not connect and should not be forced together.
                </p>
                <div className={styles.figureGrid}>
                  <RepairFigure
                    src="old-new-igniters.webp"
                    alt="Original darkened oven igniter beside the new Whirlpool W11590294 igniter"
                    width={510}
                    height={680}
                    caption="The mechanical assemblies matched closely, but the electrical connectors did not."
                  />
                  <RepairFigure
                    src="connector-mismatch.webp"
                    alt="Close-up of two incompatible two-pin oven igniter connector housings"
                    width={680}
                    height={630}
                    caption="The replacement connector and range-side connector were the same mating gender."
                  />
                </div>

                <h3>Retaining the original plug</h3>
                <p>
                  I left the range-side harness untouched and retained the original
                  igniter plug as a short pigtail. The old connector was cut off with
                  several inches of its high-temperature lead wire preserved. The
                  incompatible plug was removed from the new igniter, and the two pairs
                  of leads were joined with properly rated ceramic connectors.
                </p>
                <p>
                  The pair used during this repair came from a local appliance-parts
                  counter. Properly sized
                  <a
                    className={styles.textAffiliate}
                    href={CERAMIC_CONNECTOR_URL}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    data-product-name="High-temperature ceramic wire nuts"
                  >
                    {" "}high-temperature ceramic wire nuts like these
                  </a>{" "}
                  are also available online. Confirm the stated temperature rating and
                  wire-gauge range before ordering. Do not substitute ordinary plastic
                  wire nuts, electrical tape, or general-purpose connectors.
                </p>
                <div className={styles.note}>
                  <strong>Important connector note</strong>
                  <p>
                    Cutting a new part&apos;s connector can affect return or warranty
                    eligibility. Compare everything first. Use the supplier or a
                    qualified technician when a factory plug-and-play repair is required.
                  </p>
                </div>
                <RepairFigure
                  src="ceramic-wire-nut-splices.webp"
                  alt="Two completed oven igniter wire splices enclosed in ceramic wire connectors"
                  width={629}
                  height={680}
                  caption="Each conductor passed an individual tug test, and no bare copper remained visible beneath the ceramic connectors."
                />
              </section>

              <section className={styles.section} id="install">
                <p className={styles.eyebrow}>Installation</p>
                <h2>Keep the splices in the protected rear compartment</h2>
                <p>
                  The ceramic connectors were too large to remain safely beside the
                  bake burner. I routed the new igniter leads through the original rear
                  opening and positioned both ceramic splices and the retained factory
                  plug behind the oven wall.
                </p>
                <p>
                  The wires were given gentle bends and enough slack to avoid tension.
                  The splices were kept away from sharp sheet-metal edges and gas
                  components, and the rear cover was checked to make sure it could not
                  pinch them.
                </p>
                <p>
                  The new igniter was mounted in the original position with the two
                  factory screws, tightened only enough to secure the bracket. Its
                  high-temperature leads remained clear of the burner tube.
                </p>
                <div className={styles.figureGrid}>
                  <RepairFigure
                    src="rear-splice-routing.webp"
                    alt="Ceramic oven igniter splices routed in the protected rear compartment of the range"
                    width={510}
                    height={680}
                    caption="Both ceramic splices remained behind the oven wall, with the original plug reconnected to the range harness."
                  />
                  <RepairFigure
                    src="new-igniter-mounted.webp"
                    alt="New Whirlpool W11590294 igniter mounted beside the bake burner"
                    width={510}
                    height={680}
                    caption="The replacement igniter was secured in the same position and orientation as the original."
                  />
                </div>
              </section>

              <section className={styles.section} id="test">
                <p className={styles.eyebrow}>Final verification</p>
                <h2>Every post-repair test passed</h2>
                <p>
                  The rear protective cover was installed before power or gas was
                  restored. With hands and face clear of the oven, I reopened the manual
                  gas valve, plugged in the range, selected Bake, and set it to 350°F.
                </p>
                <p>
                  The new igniter became bright, the existing safety valve opened, and
                  the burner lit promptly with an even blue flame. After the visible
                  test, the range was cooled, unplugged again, and fully reassembled.
                </p>
                <p>
                  The final assembled test also passed. The oven reached 350°F normally,
                  maintained the set temperature, cycled the burner off, and relit it
                  correctly. The range has continued working well.
                </p>
                <div className={styles.resultGrid}>
                  <div><span>Ignition</span><p>The bake burner lit promptly instead of stalling near 155°F.</p></div>
                  <div><span>Flame</span><p>The burner produced a steady, even blue flame along its length.</p></div>
                  <div><span>Preheat</span><p>The fully assembled oven reached 350°F normally.</p></div>
                  <div><span>Cycling</span><p>The burner shut off and relit correctly while holding temperature.</p></div>
                </div>
              </section>

              <section className={styles.faq} aria-labelledby="faq-title">
                <p className={styles.eyebrow}>Common questions</p>
                <h2 id="faq-title">Whirlpool oven igniter FAQ</h2>
                {faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>

              <section className={styles.sources} aria-labelledby="sources-title">
                <div>
                  <p className={styles.eyebrow}>Evidence and method</p>
                  <h2 id="sources-title">Sources</h2>
                </div>
                <div>
                  <p>
                    The failure pattern, connector mismatch, installation photographs,
                    and completed operating tests are original observations from this
                    WFG505M0MS0 repair. Manufacturer and OEM-parts sources were used to
                    confirm the range family and replacement-part relationship.
                  </p>
                  <ol>
                    {ovenIgniterResource.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener">
                          {source.label}
                        </a>
                      </li>
                    ))}
                    <li><Link href="/editorial-policy">Trusted Home Essentials editorial policy</Link></li>
                  </ol>
                </div>
              </section>
            </div>
          </div>

          {relatedResources.length ? (
            <section className={styles.related} aria-labelledby="related-title">
              <p className={styles.eyebrow}>Keep diagnosing</p>
              <h2 id="related-title">Related troubleshooting guides</h2>
              <div className={styles.relatedGrid}>
                {relatedResources.map((resource) => (
                  <article className={styles.relatedCard} key={resource.slug}>
                    <h3>{resource.title}</h3>
                    <p>{resource.dek}</p>
                    <Link href={`/${resource.slug}`}>Open diagnostic guide</Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <CommentSection guideSlug={SLUG} />
        </div>
      </article>

      <section className="newsletter guide-newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get practical fixes and buying guidance.</h2>
        </div>
        <NewsletterForm source={`resource-${SLUG}`} />
      </section>

      <SiteFooter />
    </main>
  );
}
