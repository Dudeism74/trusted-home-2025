import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Learn what information Trusted Home Essentials collects through newsletter and comment forms and how it is used.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Plain language data policy"
      title="Privacy"
      intro="Trusted Home Essentials collects only the information needed to run the newsletter, moderate comments, secure forms, and understand site performance."
    >
      <section>
        <h2>Information you provide</h2>
        <p>
          Newsletter signup stores the email address you submit and the page source
          of the signup. Comment submission stores the display name, comment text,
          optional email address, moderation status, and submission time. Comment
          email addresses are kept private.
        </p>
      </section>
      <section>
        <h2>Security and spam prevention</h2>
        <p>
          A one way technical fingerprint may be created from connection
          information to rate limit abusive submissions. It is used for form
          security and is not published with a comment.
        </p>
      </section>
      <section>
        <h2>Affiliate links and third parties</h2>
        <p>
          Clicking an Amazon or manufacturer link takes you to a third party site.
          That site applies its own privacy and cookie policies. Affiliate link
          parameters allow the retailer to attribute qualifying purchases.
        </p>
      </section>
      <section>
        <h2>Analytics</h2>
        <p>
          Site performance tools may record general usage information such as page
          views, referring source, browser type, device category, and country.
          Trusted Home Essentials does not ask visitors to submit sensitive
          personal information.
        </p>
        <p>
          The OpenAI Ads measurement pixel records visits that follow a ChatGPT ad
          and clicks from our guides to Amazon. It may use a first party attribution
          cookie and receives the page and event details needed to connect those
          actions to an ad. This measurement does not tell Trusted Home Essentials
          what a visitor purchases on Amazon.
        </p>
        <p>
          Automatic advanced matching is enabled for this pixel. When a visitor
          enters supported contact information into a form, the pixel may normalize
          and hash it in the browser before including it with conversion events. Raw
          contact information is not sent to OpenAI through automatic advanced
          matching.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          Every newsletter message will include an unsubscribe option. A reader
          may also request removal of a submitted comment or private email by
          replying through the contact method included in the newsletter or site
          correspondence.
        </p>
      </section>
    </InfoPage>
  );
}
