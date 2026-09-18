import Link from "next/link";
import type { Metadata } from "next";
import { InfoPage } from "../components/info-page";
import { supportsSitesServices } from "../lib/server-capabilities";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Learn what information Trusted Home Essentials collects, how analytics and advertising technologies are used, and what choices visitors have.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Plain language data policy"
      title="Privacy"
      intro="Trusted Home Essentials collects only the information needed to operate the site, respond to readers, measure performance, and support advertising and affiliate relationships."
    >
      <section>
        <h2>Information you provide</h2>
        <p>
          {supportsSitesServices()
            ? "Newsletter signup and on-site comments collect the information you choose to submit."
            : "Newsletter signup and on-site comments are currently paused on this site."}{" "}
          Existing newsletter records can include an email address and signup
          source. Existing comment records can include a display name, comment
          text, optional email address, moderation status, and submission time.
          Comment email addresses are kept private. If you email Jim, your email
          address and message are used to respond to your request.
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
          Google Analytics 4 is used to measure page views, referral sources,
          device and browser categories, approximate geography, and selected site
          events. We also record an <strong>amazon_affiliate_click</strong> event
          when a visitor follows an Amazon link so we can understand which pages
          lead readers to product listings. Google Analytics is configured without
          Google Signals or ad personalization signals on this site.
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
        <h2>Google advertising</h2>
        <p>
          Trusted Home Essentials is connected to Google AdSense for site review
          and may use Google advertising after approval. Third party vendors,
          including Google, may use cookies to serve ads based on a visitor&apos;s
          prior visits to this site or other websites. Google&apos;s use of
          advertising cookies enables Google and its partners to serve ads based on
          those visits.
        </p>
        <p>
          Visitors can manage or opt out of personalized Google advertising through{" "}
          <a href="https://adssettings.google.com/" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . Visitors can also learn about opting out of some third party vendors&apos;
          use of cookies for personalized advertising at{" "}
          <a href="https://www.aboutads.info/" rel="noopener noreferrer">
            AboutAds.info
          </a>
          .
        </p>
        <p>
          If additional advertising vendors or networks are enabled, this policy
          will be updated to identify them and explain the available privacy choices.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          Request removal of a submitted comment or newsletter email address through
          the <Link href="/contact">contact page</Link>. Sending a question by
          email does not subscribe you to a newsletter.
        </p>
      </section>
    </InfoPage>
  );
}
