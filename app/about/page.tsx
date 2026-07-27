import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the editor and learn why Trusted Home Essentials focuses on product fit, sourced facts, and honest limitations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Who is behind the site"
      title="About Trusted Home Essentials"
      intro="A smaller, more careful product guide built to help readers rule products in or out before they spend."
    >
      <section>
        <h2>Hi, I am Jim.</h2>
        <p>
          I edit Trusted Home Essentials. The site exists because product pages are
          usually good at listing features and less useful at explaining whether
          those features solve a real problem. My job here is to turn published
          product information into a clear decision: who the product may suit, who
          should probably skip it, and what needs to be checked before ordering.
        </p>
      </section>
      <section>
        <h2>What this site does</h2>
        <p>
          Each guide starts with primary sources, usually the manufacturer and the
          current product listing. Important specifications are separated from
          editorial conclusions. Compatibility, upkeep, footprint, operating
          limits, and other tradeoffs appear beside the benefits.
        </p>
      </section>
      <section>
        <h2>What this site does not do</h2>
        <p>
          We do not invent hands on experience, copy customer reviews as our own,
          or assign a rating without a documented test. A guide that has not been
          hands on tested says so directly. We also avoid publishing a large number
          of thin pages simply to target search terms.
        </p>
      </section>
      <section>
        <h2>How the site is supported</h2>
        <p>
          Trusted Home Essentials uses affiliate links. If a reader follows one of
          those links and makes a qualifying purchase, the site may earn a
          commission. That does not change the price paid by the reader. The
          disclosure appears before product recommendations and the editorial
          method is published for anyone to inspect.
        </p>
      </section>
    </InfoPage>
  );
}
