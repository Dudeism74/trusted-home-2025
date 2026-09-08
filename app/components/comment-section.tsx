import { supportsSitesServices } from "../lib/server-capabilities";
import { SITE_CONTACT_HREF } from "../lib/site-contact";
import { CommentSectionClient } from "./comment-section-client";

export function CommentSection({ guideSlug }: { guideSlug: string }) {
  if (supportsSitesServices()) {
    return <CommentSectionClient guideSlug={guideSlug} />;
  }

  return (
    <section className="reader-section" aria-labelledby="reader-comments">
      <div className="reader-heading">
        <div>
          <p className="eyebrow">Reader questions</p>
          <h2 id="reader-comments">Have a question or correction?</h2>
        </div>
        <p>
          On-site comments are paused. <a className="text-link" href={SITE_CONTACT_HREF}>Email Jim</a>{" "}
          with the guide title and relevant details.
        </p>
      </div>
    </section>
  );
}
