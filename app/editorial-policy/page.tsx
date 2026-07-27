import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Read the Trusted Home Essentials sourcing, evaluation, correction, review, and affiliate independence standards.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="How recommendations are made"
      title="Editorial policy"
      intro="Our standard is simple: cite the fact, explain the judgment, name the limitation, and correct the record when it changes."
    >
      <section>
        <h2>1. Scope comes before recommendation</h2>
        <p>
          A product is evaluated for a defined job and audience. We do not call
          something the best for everyone. Every guide names a likely best fit and
          a reason a buyer may want to skip it.
        </p>
      </section>
      <section>
        <h2>2. Primary sources anchor factual claims</h2>
        <p>
          Key specifications are checked against the manufacturer, a current
          authorized listing, a product manual, or another first party source.
          Secondary sources may add context, but they do not replace the primary
          record for basic product facts.
        </p>
      </section>
      <section>
        <h2>3. Evidence and editorial judgment stay separate</h2>
        <p>
          A published dimension, runtime, or compatibility range is a sourced
          fact. Whether that specification makes a product practical for a
          particular buyer is editorial judgment. Guides make that distinction
          clear.
        </p>
      </section>
      <section>
        <h2>4. Testing status is explicit</h2>
        <p>
          We never imply hands on use when it did not happen. A specification based
          assessment says so near the top of the guide and again in the method
          section. If hands on testing is added later, the method, conditions, and
          date will be documented.
        </p>
      </section>
      <section>
        <h2>5. Prices and availability are not frozen in time</h2>
        <p>
          Retail price, seller, stock, and included variations can change quickly.
          We direct readers to the current listing rather than presenting a stale
          price as permanent. Product rich result markup is not used unless the
          underlying offer information can be kept accurate.
        </p>
      </section>
      <section>
        <h2>6. Affiliate relationships do not remove the tradeoffs</h2>
        <p>
          Affiliate links help support the site, but a commission does not turn a
          weak fit into a recommendation. Limitations, recurring costs, setup
          constraints, and compatibility checks belong in the same guide as the
          benefits.
        </p>
      </section>
      <section>
        <h2>7. Corrections are part of the product</h2>
        <p>
          Reader corrections are reviewed against the source record. Material
          factual corrections are made promptly and the reviewed date is updated.
          Public comments are moderated for relevance, privacy, spam, and
          unsupported claims.
        </p>
      </section>
    </InfoPage>
  );
}
