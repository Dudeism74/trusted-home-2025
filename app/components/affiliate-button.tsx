type AffiliateButtonProps = {
  href: string;
  productName: string;
  amazonAsin: string;
  affiliateTag: string;
  campaignId?: string;
  linkId?: string;
  children?: React.ReactNode;
  className?: string;
};

export function AffiliateButton({
  href,
  productName,
  amazonAsin,
  affiliateTag,
  campaignId,
  linkId,
  children = "Check current Amazon listing",
  className = "",
}: AffiliateButtonProps) {
  return (
    <a
      className={`button button-dark ${className}`.trim()}
      href={href}
      rel="sponsored nofollow noopener"
      target="_blank"
      aria-label={`${children} for ${productName}`}
      data-amazon-asin={amazonAsin}
      data-affiliate-tag={affiliateTag}
      data-campaign-id={campaignId}
      data-link-id={linkId}
    >
      {children}
    </a>
  );
}
