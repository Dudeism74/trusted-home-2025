import { supportsSitesServices } from "../lib/server-capabilities";
import { SITE_CONTACT_EMAIL, SITE_CONTACT_HREF } from "../lib/site-contact";
import { NewsletterFormClient } from "./newsletter-signup-client";

export function NewsletterForm({ source = "site" }: { source?: string }) {
  if (supportsSitesServices()) {
    return <NewsletterFormClient source={source} />;
  }

  return (
    <div className="newsletter-form">
      <p>Newsletter signup is paused. Send Jim a question, correction, or topic suggestion.</p>
      <a className="text-link" href={SITE_CONTACT_HREF}>{SITE_CONTACT_EMAIL}</a>
      <p className="form-note">Emailing does not subscribe you to a mailing list.</p>
    </div>
  );
}
