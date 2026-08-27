import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jim and learn how an electromechanical and industrial maintenance mindset shapes Trusted Home Essentials troubleshooting and buying guidance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Who is behind the site"
      title="About Trusted Home Essentials"
      intro="Practical troubleshooting and buying guidance built around a maintenance mindset: identify the symptom, isolate the cause, and replace only what the evidence points to."
    >
      <section>
        <h2>Hi, I am Jim.</h2>
        <p>
          I work in electromechanical and industrial maintenance. That work trains
          you to treat symptoms as clues instead of jumping directly to
          replacement. Separate the mechanical and electrical possibilities, check
          the simple failure modes first, verify the operating condition, and then
          decide what actually needs service. Trusted Home Essentials applies that
          same troubleshooting mindset to ordinary homeowner problems.
        </p>
      </section>
      <section>
        <h2>What this site does</h2>
        <p>
          Troubleshooting guides start with the failure mode and use current
          technical guidance to narrow the likely causes. Product guides come
          second. When buying is the right answer, important specifications are
          traced to current primary sources and translated into practical fit,
          limitations, upkeep, and compatibility checks.
        </p>
      </section>
      <section>
        <h2>Where the limits matter</h2>
        <p>
          Industrial maintenance experience does not turn every residential repair
          into a do it yourself job. Electrical, fuel gas, refrigerant, structural,
          water damage, code, and other safety critical work can require qualified
          professionals. Manufacturer instructions, applicable codes, and safe
          isolation procedures take priority over a general troubleshooting guide.
        </p>
      </section>
      <section>
        <h2>What this site does not pretend</h2>
        <p>
          We do not invent hands on product experience, copy customer reviews as
          our own, or assign a test result that was never measured. A product guide
          that has not been hands on tested says so directly. Technical reasoning
          is also separated from sourced facts so readers can see what is known and
          what is an editorial conclusion.
        </p>
      </section>
      <section>
        <h2>How the site is supported</h2>
        <p>
          Trusted Home Essentials uses affiliate links in some buying guides. If a
          reader follows one of those links and makes a qualifying purchase, the
          site may earn a commission. That does not change the price paid by the
          reader and does not turn a repairable problem into a shopping
          recommendation.
        </p>
      </section>
    </InfoPage>
  );
}
