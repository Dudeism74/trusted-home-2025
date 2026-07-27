import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Read how affiliate links support Trusted Home Essentials and how those relationships are disclosed.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <InfoPage
      eyebrow="Clear before the click"
      title="Affiliate disclosure"
      intro="As an Amazon Associate, I earn from qualifying purchases."
    >
      <section>
        <h2>What that means</h2>
        <p>
          Some links on Trusted Home Essentials are affiliate links. If you click
          one of those links and make a qualifying purchase, the site may receive a
          commission. You do not pay a higher price because you used the link.
        </p>
      </section>
      <section>
        <h2>How links are labeled</h2>
        <p>
          Product guides place the Amazon Associate disclosure before
          recommendations. Amazon links are also marked in the page code as
          sponsored links. Manufacturer sources and editorial policy links are
          separate from retail calls to action.
        </p>
      </section>
      <section>
        <h2>What does not change</h2>
        <p>
          A commission does not remove a product&apos;s limitations. Guides continue to
          name compatibility requirements, ongoing costs, setup constraints, and
          reasons a reader may want to skip the product.
        </p>
      </section>
      <section>
        <h2>Amazon statement</h2>
        <p>
          Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
          affiliates. Trusted Home Essentials is independently operated and is not
          Amazon.
        </p>
      </section>
    </InfoPage>
  );
}
