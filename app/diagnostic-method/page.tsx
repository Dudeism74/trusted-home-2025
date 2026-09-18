import Link from "next/link";
import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";
import { JsonLd } from "../components/json-ld";
import { SITE_NAME, SITE_URL } from "../lib/products";

const PUBLISHED_DATE = "2026-09-18";

export const metadata: Metadata = {
  title: "The Maintenance Troubleshooting Method I Use at Home",
  description:
    "A practical failure-mode-first troubleshooting method adapted from electromechanical and industrial maintenance, with a printable worksheet and a real Whirlpool oven example.",
  alternates: { canonical: "/diagnostic-method" },
};

export default function DiagnosticMethodPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Maintenance Troubleshooting Method I Use at Home",
    description:
      "A failure-mode-first diagnostic method for home problems, adapted from electromechanical and industrial maintenance.",
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    mainEntityOfPage: `${SITE_URL}/diagnostic-method`,
    author: {
      "@type": "Person",
      name: "Jim",
      url: `${SITE_URL}/about`,
      jobTitle: "Electromechanical and industrial maintenance",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <InfoPage
        eyebrow="Original troubleshooting method"
        title="The Maintenance Troubleshooting Method I Use at Home"
        intro="My day job is electromechanical and industrial maintenance. The most useful habit that work has taught me is not how to replace parts. It is how to avoid replacing the wrong part. This is the diagnostic sequence I adapt to ordinary home problems."
      >
        <section>
          <h2>Why I start with the failure mode</h2>
          <p>
            A symptom is only the visible end of a system. A dryer that runs but
            does not heat, a fan that gets louder, an oven igniter that glows
            without lighting the burner, and a window that feels drafty all create
            the same temptation: name a failed part too early. That is where wasted
            parts and repeat repairs begin.
          </p>
          <p>
            I use a failure-mode-first approach instead. The goal is to describe
            exactly what changed, identify which parts of the system still work,
            and choose the next check because its result will eliminate possible
            causes. The sequence matters more than the number of checks.
          </p>
        </section>

        <section>
          <h2>1. Write the symptom before naming the cause</h2>
          <p>
            Start with an observation that another person could verify. “The oven
            does not work” is too broad. “The bake igniter glows orange, but the
            bake burner does not light reliably” is useful. “The bathroom fan is
            noisy” is broad. “The fan rattles only at full speed and the sound
            changes when the grille is held” is useful.
          </p>
          <p>
            Include what still works. A machine that has power, responds to
            controls, and completes part of its sequence has already ruled out some
            failure paths. Preserving that evidence keeps the diagnosis from
            restarting at zero.
          </p>
        </section>

        <section>
          <h2>2. Define the safety boundary before testing</h2>
          <p>
            Home troubleshooting can involve electricity, fuel gas, moving parts,
            hot surfaces, stored water, pressure, refrigerant, and structural
            damage. Decide what can be inspected safely before opening anything.
            If a check would require energized electrical measurements, opening a
            fuel-gas system, disturbing refrigerant, defeating a safety device, or
            working beyond the training and equipment available, that is the point
            to stop and use qualified service.
          </p>
          <p>
            A diagnostic method is not permission to take every system apart. A
            good diagnosis also identifies the point where the safest next test
            belongs to someone with the right tools and qualifications.
          </p>
        </section>

        <section>
          <h2>3. Divide the system into functions</h2>
          <p>
            I usually separate a problem into a few functional blocks rather than a
            long list of parts. What supplies the system? What tells it what to do?
            What moves, heats, cools, pumps, seals, or switches? What path carries
            air, water, heat, or mechanical force? What safety device can interrupt
            the sequence?
          </p>
          <p>
            This makes the troubleshooting tree smaller. A dryer that tumbles but
            never heats tells you the motor path can operate while the heating path
            still needs investigation. A bathroom fan that spins freely by hand
            with the power off but produces a loud airflow whistle points in a
            different direction than a blower wheel that rubs the housing.
          </p>
        </section>

        <section>
          <h2>4. Check the low-risk evidence first</h2>
          <p>
            Before removing a component, look for the evidence that can be gathered
            without changing the system. Confirm settings. Read the model label.
            Look for loose hardware, blocked airflow, damaged hoses, debris,
            obvious leakage, disconnected plugs, a tripped protective device, or a
            pattern that changes with load or temperature.
          </p>
          <p>
            This is not about always choosing the easiest repair first. It is about
            protecting the original evidence. Cleaning, moving, tightening, or
            replacing several things at once can erase the clue that would have
            identified the actual cause.
          </p>
        </section>

        <section>
          <h2>5. Choose a test that separates causes</h2>
          <p>
            The next check should answer a question, not just create activity. If
            two possible causes would produce the same symptom, look for a test
            where they would produce different results. That is a discriminating
            test.
          </p>
          <p>
            For a window that feels cold, a simple airflow check can separate
            actual outdoor-air leakage from the natural downward movement of room
            air cooled by cold glass. For a washer that will not drain, proving
            that the house standpipe can accept water separates a plumbing problem
            from a machine problem before a drain pump is condemned.
          </p>
        </section>

        <section>
          <h2>6. Change one thing at a time</h2>
          <p>
            Once a likely cause has evidence behind it, make the smallest safe
            change that should affect the symptom. Then retest. Replacing several
            parts at once may get a machine running, but it destroys the ability to
            know which change actually solved the problem.
          </p>
          <p>
            This matters later. If the symptom returns, a repair record that says
            what changed and what result followed is far more useful than a bag of
            replaced parts.
          </p>
        </section>

        <section>
          <h2>7. Verify the repair under the condition that caused the complaint</h2>
          <p>
            “It turned on” is not always a completed repair. Run the system through
            the operating condition that originally failed. Watch for normal
            sequence, sound, temperature, airflow, leakage, vibration, and
            protective-device behavior as appropriate.
          </p>
          <p>
            If the original symptom cannot be reproduced and the system completes
            its normal job without a new problem, the repair has stronger evidence
            behind it. If the symptom only improves, keep the diagnosis open.
          </p>
        </section>

        <section>
          <h2>8. Record enough information to make the next repair easier</h2>
          <p>
            Save the model number, the exact symptom, the checks that mattered,
            the part number if something was replaced, and the final verification
            result. Photos of labels, connectors, routing, and the original
            condition can be more useful than memory months later.
          </p>
          <p>
            This site uses that same idea. A firsthand repair should show what was
            observed, what decision was made, what was changed, and whether the
            final operating test passed.
          </p>
        </section>

        <section>
          <h2>A real example: the Whirlpool oven repair</h2>
          <p>
            The documented Whirlpool repair on this site started with a useful
            symptom: the bake igniter glowed, but the bake burner was not reliably
            lighting. That observation was more valuable than simply saying the
            oven would not heat because it showed that the control sequence was
            reaching the igniter.
          </p>
          <p>
            The repair also produced an unexpected fit issue. The replacement OEM
            igniter did not arrive with the same connector arrangement, so the
            connector mismatch had to be handled correctly instead of forcing the
            original plug onto the new part. After installation, the operating
            check showed a stable blue bake-burner flame and normal heating. The
            page includes the actual photos because the evidence is part of the
            repair record.
          </p>
          <p>
            <Link href="/whirlpool-oven-igniter-glows-but-wont-heat">
              Read the photographed Whirlpool oven repair
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Printable diagnostic worksheet</h2>
          <p>
            Use this before ordering a part. The fields are intentionally simple
            enough to print or fill in on screen. The objective is to preserve what
            you know before the repair changes the evidence.
          </p>
          <form className="diagnostic-worksheet" aria-label="Home troubleshooting worksheet">
            <label>
              Equipment or system
              <input type="text" name="equipment" />
            </label>
            <label>
              Model number
              <input type="text" name="model" />
            </label>
            <label>
              Exact symptom
              <textarea name="symptom" rows={3} />
            </label>
            <label>
              What still works normally?
              <textarea name="working" rows={3} />
            </label>
            <label>
              What changed before the problem started?
              <textarea name="change" rows={3} />
            </label>
            <label>
              Safety boundary for this job
              <textarea name="safety" rows={3} />
            </label>
            <label>
              Possible system blocks involved
              <textarea
                name="blocks"
                rows={3}
                placeholder="Supply, control, mechanical, airflow, water path, heat path, safety device..."
              />
            </label>
            <label>
              Next test and the question it answers
              <textarea name="test" rows={3} />
            </label>
            <label>
              Result
              <textarea name="result" rows={3} />
            </label>
            <label>
              Repair or adjustment made
              <textarea name="repair" rows={3} />
            </label>
            <label>
              Final verification
              <textarea name="verification" rows={3} />
            </label>
          </form>
        </section>

        <section>
          <h2>How this method is used on Trusted Home Essentials</h2>
          <p>
            The troubleshooting library is being held to this standard. Pages that
            only repeat common advice or published specifications are not treated
            as equivalent to firsthand repair evidence or original diagnostic
            analysis. The goal is a smaller library that earns its place by helping
            a reader make a better decision.
          </p>
          <p>
            Read the <Link href="/editorial-policy">editorial policy</Link> for the
            sourcing and safety rules, or open the{" "}
            <Link href="/troubleshooting">troubleshooting library</Link> to apply
            the method to a specific problem.
          </p>
        </section>
      </InfoPage>
    </>
  );
}
