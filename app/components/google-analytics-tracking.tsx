"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function isAmazonUrl(url: URL) {
  return (
    url.hostname === "amzn.to" ||
    url.hostname === "amazon.com" ||
    url.hostname.endsWith(".amazon.com")
  );
}

function currentPagePath(pathname: string) {
  return `${pathname}${window.location.search}`;
}

export function GoogleAnalyticsTracking() {
  useEffect(() => {
    function measureAmazonAffiliateClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }

      if (!isAmazonUrl(url)) return;

      const productName = link.dataset.productName?.trim();
      const amazonAsin = link.dataset.amazonAsin?.trim();
      const affiliateTag = link.dataset.affiliateTag?.trim();
      const campaignId = link.dataset.campaignId?.trim();
      const linkId = link.dataset.linkId?.trim();

      window.gtag?.("event", "amazon_affiliate_click", {
        link_url: url.href,
        link_domain: url.hostname,
        link_text: link.textContent?.trim().slice(0, 120) || "Amazon link",
        page_location: window.location.href,
        page_path: currentPagePath(window.location.pathname),
        ...(productName ? { product_name: productName } : {}),
        ...(amazonAsin ? { amazon_asin: amazonAsin } : {}),
        ...(affiliateTag ? { affiliate_tag: affiliateTag } : {}),
        ...(campaignId ? { campaign_id: campaignId } : {}),
        ...(linkId ? { link_id: linkId } : {}),
        transport_type: "beacon",
      });
    }

    document.addEventListener("click", measureAmazonAffiliateClick, true);
    return () =>
      document.removeEventListener("click", measureAmazonAffiliateClick, true);
  }, []);

  return null;
}
