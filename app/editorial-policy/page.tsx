import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Read the Trusted Home Essentials troubleshooting, sourcing, safety, testing, correction, and affiliate independence standards.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="How the guidance is built"
      title="Editorial policy"
      intro="Our standard is simple: diagnose before recommending, cite the fact, explain the judgment, name the limitation, and correct the record when it changes."
    >
      <section>
        <h2>1. Diagnose before recommending</h2>
        <p>
          A symptom is not automatically a failed part. Troubleshooting content
          starts by separating plausible causes and identifying checks that can
          narrow the problem. Replacement is presented as one possible outcome,
          not the default answer.
        </p>
      </section>
      <section>
        <h2>2. Primary and authoritative sources anchor factual claims</h2>
        <p>
          Technical guidance is checked against sources appropriate to the topic,
          including government agencies, recognized industry organizations,
          manufacturer documentation, product manuals, and current first party
          specifications. Secondary sources may add context, but important factual
          claims should be traceable to the strongest available source.
        </p>
      </section>
      <section>
        <h2>3. Evidence and technical judgment stay separate</h2>
        <p>
          A published airflow rate, compatibility range, safety instruction, or
          maintenance interval is a sourced fact. Interpreting what that fact means
          for a particular symptom or buying decision can require technical
          judgment. The site makes that distinction clear rather than presenting an
          inference as a measured result.
        </p>
      </section>
      <section>
        <h2>4. Safety defines the boundary of the guide</h2>
        <p>
          General troubleshooting does not override manufacturer instructions,
          applicable codes, lockout or isolation requirements, or the need for a
          qualified professional. Electrical, fuel gas, refrigerant, structural,
          water damage, and other safety critical work can require expertise beyond
          a homeowner guide.
        </p>
      </section>
      <section>
        <h2>5. Product testing status is explicit</h2>
        <p>
          We never imply hands on product use when it did not happen. A
          specification based assessment says so near the top of the guide and
          again in the method section. If hands on testing is added later, the
          method, conditions, observations, and date will be documented.
        </p>
      </section>
      <section>
        <h2>6. Marketing claims can be checked against the underlying metric</h2>
        <p>
          When a manufacturer publishes a coverage, capacity, runtime, or
          performance headline, the site looks for the underlying specification and
          the assumptions behind the claim. Where a useful independent calculation
          can be made from published data, the method and assumptions are stated so
          readers can reproduce it.
        </p>
      </section>
      <section>
        <h2>7. Affiliate relationships do not decide the diagnosis</h2>
        <p>
          Affiliate links help support the site, but a commission does not turn a
          repairable problem into a recommendation to buy something. Product
          limitations, recurring costs, setup constraints, and compatibility checks
          belong beside the benefits.
        </p>
      </section>
      <section>
        <h2>8. Corrections are part of the product</h2>
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
