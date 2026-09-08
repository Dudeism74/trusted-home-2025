import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";
import { SITE_CONTACT_EMAIL, SITE_CONTACT_HREF } from "../lib/site-contact";

export const metadata: Metadata = {
  title: "Contact Jim",
  description: "Contact Jim at Trusted Home Essentials with a guide correction, homeowner question, or privacy request.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact the editor"
      title="Questions and corrections"
      intro="Send Jim a question, a factual correction, or an idea for a future home troubleshooting guide."
    >
      <section>
        <h2>Email Jim</h2>
        <p><a href={SITE_CONTACT_HREF}>{SITE_CONTACT_EMAIL}</a></p>
        <p>For a guide correction, include the page address, the detail you think needs attention, and a source or model number if available.</p>
      </section>
      <section>
        <h2>Privacy requests</h2>
        <p>Use the same address to request removal of a submitted comment or newsletter email address. Include enough information to identify the submission, and do not send passwords or payment details.</p>
      </section>
      <section>
        <h2>Before you send a repair question</h2>
        <p>Email is not an emergency service. Stop using unsafe equipment and contact the appropriate local emergency service or qualified professional for an urgent hazard.</p>
      </section>
    </InfoPage>
  );
}
