import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AffiliateButton } from "../components/affiliate-button";
import { CommentSection } from "../components/comment-section";
import { JsonLd } from "../components/json-ld";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  CORDLESS_TOOLS_PUBLISHED_DATE,
  CORDLESS_TOOLS_PUBLISHED_DATE_LABEL,
  CORDLESS_TOOLS_SLUG,
  cordlessToolCategories,
  cordlessToolsFaq,
  cordlessToolsGuide,
  cordlessToolsSources,
  projectToolMap,
} from "../lib/cordless-tools-guide";
import { SITE_NAME, SITE_URL } from "../lib/products";
import styles from "./page.module.css";

const ARTICLE_URL = SITE_URL + "/" + CORDLESS_TOOLS_SLUG;
const IMAGE_URL = SITE_URL + cordlessToolsGuide.image;

export const metadata: Metadata = {
  title: { absolute: cordlessToolsGuide.metaTitle },
  description: cordlessToolsGuide.metaDescription,
  alternates: { canonical: "/" + CORDLESS_TOOLS_SLUG },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: cordlessToolsGuide.metaTitle,
    description: cordlessToolsGuide.metaDescription,
    publishedTime: CORDLESS_TOOLS_PUBLISHED_DATE,
    modifiedTime: CORDLESS_TOOLS_PUBLISHED_DATE,
    images: [
      {
        url: IMAGE_URL,
        width: 1536,
        height: 1024,
        alt: cordlessToolsGuide.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cordlessToolsGuide.metaTitle,
    description: cordlessToolsGuide.metaDescription,
    images: [IMAGE_URL],
  },
};

export default function EssentialCordlessPowerToolsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cordlessToolsGuide.title,
    description: cordlessToolsGuide.metaDescription,
    image: IMAGE_URL,
    datePublished: CORDLESS_TOOLS_PUBLISHED_DATE,
    dateModified: CORDLESS_TOOLS_PUBLISHED_DATE,
    mainEntityOfPage: ARTICLE_URL,
    articleSection: "Power tool buying guidance",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Jim",
      url: SITE_URL + "/about",
      jobTitle: "Electromechanical and industrial maintenance professional",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: cordlessToolCategories.map((tool) => ({
      "@type": "Thing",
      name: tool.name,
    })),
    citation: cordlessToolsSources.map((source) => source.url),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Buying guides",
        item: SITE_URL + "/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cordlessToolsGuide.metaTitle,
        item: ARTICLE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cordlessToolsFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className={styles.page}>
      <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <SiteHeader />

      <div className={styles.disclosure} role="note">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, I earn from
        qualifying purchases. The category guidance comes first; the linked kit is
        one clearly identified example, not proof that one brand fits every buyer.
      </div>

      <article>
        <div className={styles.shell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides">Buying guides</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Cordless power tools</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{cordlessToolsGuide.eyebrow}</p>
              <h1>{cordlessToolsGuide.title}</h1>
              <p className={styles.dek}>{cordlessToolsGuide.dek}</p>
              <div className={styles.meta}>
                <span>
                  By <Link href="/about">Jim</Link>
                </span>
                <span>
                  Republished and reviewed {CORDLESS_TOOLS_PUBLISHED_DATE_LABEL}
                </span>
                <span>Source-backed category assessment</span>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <Image
                src={cordlessToolsGuide.image}
                alt={cordlessToolsGuide.imageAlt}
                width={1536}
                height={1024}
                sizes="(max-width: 980px) 92vw, 45vw"
                priority
                unoptimized
              />
              <figcaption>
                Original editorial illustration of the five tool categories. It is
                not evidence of hands-on testing of a particular model.
              </figcaption>
            </figure>
          </header>
        </div>

        <div className={styles.shell}>
          <section className={styles.quickAnswer} aria-labelledby="quick-answer">
            <p className={styles.quickLabel}>The quick answer</p>
            <div>
              <h2 id="quick-answer">Buy the job, not the five-tool checklist.</h2>
              <p>{cordlessToolsGuide.quickAnswer}</p>
            </div>
          </section>

          <section className={styles.truthCard} aria-labelledby="forever-answer">
            <p className={styles.eyebrow}>About the durability promise</p>
            <h2 id="forever-answer">No cordless tool lasts forever.</h2>
            <p>{cordlessToolsGuide.durabilityAnswer}</p>
          </section>

          <section className={styles.comparison} aria-labelledby="comparison-title">
            <header className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>The five-tool decision</p>
                <h2 id="comparison-title">What each tool earns its place by doing</h2>
              </div>
              <p>
                The drill/driver is the only near-universal starting point. The other
                four are conditional purchases tied to the work you actually plan to
                complete.
              </p>
            </header>

            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tool</th>
                    <th scope="col">What it covers</th>
                    <th scope="col">When to buy</th>
                    <th scope="col">When to wait</th>
                  </tr>
                </thead>
                <tbody>
                  {cordlessToolCategories.map((tool) => (
                    <tr key={tool.id}>
                      <th scope="row">
                        <a href={"#" + tool.id}>{tool.name}</a>
                        <span>{tool.position}</span>
                      </th>
                      <td>{tool.job}</td>
                      <td>{tool.buyWhen}</td>
                      <td>{tool.waitWhen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className={styles.contentLayout}>
            <aside className={styles.toc} aria-label="Article contents">
              <p>In this guide</p>
              <ol>
                <li><a href="#battery-platform">Battery platform first</a></li>
                {cordlessToolCategories.map((tool) => (
                  <li key={tool.id}><a href={"#" + tool.id}>{tool.name}</a></li>
                ))}
                <li><a href="#projects">Choose by project</a></li>
                <li><a href="#kit-or-bare">Kit or bare tool</a></li>
                <li><a href="#battery-safety">Battery and tool safety</a></li>
                <li><a href="#faq">Common questions</a></li>
              </ol>
            </aside>

            <div className={styles.articleBody}>
              <section className={styles.section} id="battery-platform">
                <p className={styles.eyebrow}>Before tool number one</p>
                <h2>Choose the battery platform before you build the collection</h2>
                <p>
                  A cordless-tool purchase is also a battery-system decision. Future
                  bare tools are economical only when their approved batteries and
                  charger already fit your platform. Compare the exact models,
                  battery availability, local service, warranty, tool range, charger,
                  and the kind of outdoor equipment you may add later.
                </p>
                <p>
                  Do not compare brands by the voltage headline alone. In its{" "}
                  <a
                    href="https://www.dewalt.com/en-us/products/systems/cordless-platforms"
                    target="_blank"
                    rel="noopener"
                  >
                    cordless-platform overview
                  </a>
                  , DEWALT explains that 20V MAX describes maximum initial voltage
                  while nominal voltage is 18V. Amp-hours primarily describe battery
                  capacity, not an independent measure of tool power. Compact packs
                  keep a drill lighter; higher-demand saws can justify larger approved
                  packs when the manufacturer permits them.
                </p>

                <div className={styles.starterKitCard}>
                  <div>
                    <p className={styles.cardLabel}>The original Pin&apos;s linked kit</p>
                    <h3>{cordlessToolsGuide.starterKit.shortName}</h3>
                    <p>
                      DEWALT identifies the DCK240C2 in its{" "}
                      <a
                        href={cordlessToolsGuide.starterKit.manufacturerUrl}
                        target="_blank"
                        rel="noopener"
                      >
                        official product listing
                      </a>{" "}
                      as a drill/driver and 1/4-inch impact-driver kit with two
                      compact 1.3 Ah batteries, a charger, and a bag. It covers the
                      first two categories in this guide, but those compact packs may
                      limit runtime in higher-demand saw use. Trusted Home Essentials
                      has not completed hands-on testing of this kit.
                    </p>
                    <p className={styles.listingNote}>
                      Confirm the current model, seller, contents, warranty, price,
                      and availability before ordering.
                    </p>
                  </div>
                  <AffiliateButton
                    href={cordlessToolsGuide.starterKit.amazonUrl}
                    productName={cordlessToolsGuide.starterKit.name}
                    amazonAsin={cordlessToolsGuide.starterKit.asin}
                    affiliateTag={cordlessToolsGuide.starterKit.affiliateTag}
                    linkId={cordlessToolsGuide.starterKit.linkId}
                    className={styles.buyButton}
                  >
                    Check the DCK240C2 kit
                  </AffiliateButton>
                </div>
              </section>

              {cordlessToolCategories.map((tool, index) => (
                <section className={styles.toolSection} id={tool.id} key={tool.id}>
                  <div className={styles.toolNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className={styles.eyebrow}>{tool.position}</p>
                  <h2>{tool.name}</h2>
                  <p className={styles.toolJob}>{tool.job}</p>
                  {tool.explanation.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <div className={styles.decisionPair}>
                    <div>
                      <span>Buy when</span>
                      <p>{tool.buyWhen}</p>
                    </div>
                    <div>
                      <span>Wait when</span>
                      <p>{tool.waitWhen}</p>
                    </div>
                  </div>

                  <div className={styles.checks}>
                    <h3>Three checks before buying</h3>
                    <ol>
                      {tool.buyingChecks.map((check) => <li key={check}>{check}</li>)}
                    </ol>
                  </div>

                  <div className={styles.safetyNote} role="note">
                    <strong>Safety boundary</strong>
                    <p>{tool.safetyNote}</p>
                  </div>
                </section>
              ))}

              <section className={styles.section} id="projects">
                <p className={styles.eyebrow}>Project matching</p>
                <h2>Choose the tool combination by the work</h2>
                <p>
                  A five-tool bundle can look economical while still including tools
                  you rarely use, small batteries, or older models. Map the next six
                  months of likely projects before paying for the collection.
                </p>
                <div className={styles.projectGrid}>
                  {projectToolMap.map((row, index) => (
                    <article key={row.project}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{row.project}</h3>
                      <dl>
                        <div><dt>Start with</dt><dd>{row.startWith}</dd></div>
                        <div><dt>Add when needed</dt><dd>{row.addWhenNeeded}</dd></div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>

              <section className={styles.section} id="kit-or-bare">
                <p className={styles.eyebrow}>Bundle math</p>
                <h2>Decide between a kit and individual bare tools</h2>
                <p>
                  A starter kit makes sense when it includes the exact core tools,
                  battery sizes, and charger you would choose separately. A bare tool
                  usually ships without a battery or charger and makes more sense only
                  after you already own compatible approved packs.
                </p>
                <ol className={styles.numberedChecks}>
                  <li>
                    <span>01</span>
                    <div><h3>Read every model number</h3><p>A family photo or bundle name can hide older, brushed, compact, or lower-feature models.</p></div>
                  </li>
                  <li>
                    <span>02</span>
                    <div><h3>Count usable batteries, not just batteries</h3><p>Compact packs are convenient for drills and drivers but may be limiting for sustained saw work.</p></div>
                  </li>
                  <li>
                    <span>03</span>
                    <div><h3>Price the accessories and protection</h3><p>Blades, bits, hearing protection, eye protection, dust control, clamps, and a second suitable battery are part of the real cost.</p></div>
                  </li>
                  <li>
                    <span>04</span>
                    <div><h3>Verify service, warranty, and recalls</h3><p>Check support for the exact model and search the current CPSC recall database before buying used, discontinued, or unfamiliar equipment.</p></div>
                  </li>
                </ol>
              </section>

              <section className={styles.section} id="battery-safety">
                <p className={styles.eyebrow}>Non-negotiable basics</p>
                <h2>Battery and power-tool safety belong in the buying decision</h2>
                <p>
                  Use only manufacturer-approved tool, battery, and charger
                  combinations. Do not treat an adapter, counterfeit pack, visibly
                  damaged pack, or incorrect charger as a harmless shortcut. Store and
                  charge batteries according to the manufacturer&apos;s instructions and
                  stop using a pack that is damaged, unusually hot, swollen, leaking,
                  or behaving abnormally.
                </p>
                <p>
                  Before operating any of these tools, read the exact model manual,
                  inspect the tool and accessory, secure the work, wear eye protection,
                  and add hearing, respiratory, or other protection when the tool,
                  material, dust, and exposure require it. Remove the battery before
                  adjustments, accessory changes, jam clearing, cleaning, or storage.
                </p>
                <p>
                  The general guidance here does not replace the model manual or the
                  skill needed to control the work safely. Check the{" "}
                  <a href="https://www.cpsc.gov/Recalls" target="_blank" rel="noopener">
                    current CPSC recall database
                  </a>{" "}
                  for the exact tool, battery, and charger model.
                </p>
              </section>

              <section className={styles.faq} id="faq" aria-labelledby="faq-title">
                <p className={styles.eyebrow}>Clear answers</p>
                <h2 id="faq-title">Cordless power tool FAQ</h2>
                {cordlessToolsFaq.map((item) => (
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
                    Tool functions and safety boundaries were checked against
                    current manufacturer information, Power Tool Institute guidance,
                    and the U.S. Consumer Product Safety Commission. The buying order
                    is Jim&apos;s maintenance-based editorial judgment, not a controlled
                    comparison test or a claim of hands-on use of the linked kit.
                  </p>
                  <ol>
                    {cordlessToolsSources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener">
                          {source.label}
                        </a>
                      </li>
                    ))}
                    <li><Link href="/editorial-policy">Trusted Home Essentials editorial policy</Link></li>
                    <li><Link href="/affiliate-disclosure">Trusted Home Essentials affiliate disclosure</Link></li>
                  </ol>
                </div>
              </section>
            </div>
          </div>

          <section className={styles.related} aria-labelledby="related-title">
            <p className={styles.eyebrow}>Put the tools to useful work</p>
            <h2 id="related-title">Start with the repair, not another shopping list</h2>
            <div className={styles.relatedGrid}>
              <article>
                <h3>Home troubleshooting library</h3>
                <p>Find the failure mode before buying parts or equipment.</p>
                <Link href="/troubleshooting">Browse troubleshooting guides</Link>
              </article>
              <article>
                <h3>Whirlpool oven igniter repair</h3>
                <p>See a documented hands-on repair with its safety and evidence limits.</p>
                <Link href="/whirlpool-oven-igniter-glows-but-wont-heat">Read the repair case study</Link>
              </article>
              <article>
                <h3>How this guidance is built</h3>
                <p>See how sourced facts, judgment, testing status, and corrections are handled.</p>
                <Link href="/editorial-policy">Read the editorial policy</Link>
              </article>
            </div>
          </section>

          <CommentSection guideSlug={CORDLESS_TOOLS_SLUG} />
        </div>
      </article>

      <section className="newsletter guide-newsletter">
        <div>
          <p className="eyebrow">The useful list</p>
          <h2>Get practical fixes and buying guidance.</h2>
        </div>
        <NewsletterForm source={"guide-" + CORDLESS_TOOLS_SLUG} />
      </section>

      <SiteFooter />
    </main>
  );
}
