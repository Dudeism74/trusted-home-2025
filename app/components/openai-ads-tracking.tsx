"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type OpenAIAdsContent = {
  id: string;
  name: string;
  content_type: "product";
};

type OpenAIAdsEventData = {
  type: "contents" | "custom";
  contents?: OpenAIAdsContent[];
};

type OpenAIAdsQueue = (
  command: "measure",
  eventName: "contents_viewed" | "custom",
  eventData: OpenAIAdsEventData,
  options?: { custom_event_name: "amazon_outbound_click" },
) => void;

declare global {
  interface Window {
    oaiq?: OpenAIAdsQueue;
  }
}

function isAmazonUrl(url: URL) {
  return url.hostname === "amazon.com" || url.hostname.endsWith(".amazon.com");
}

function getAsin(link: HTMLAnchorElement) {
  const dataAsin = link.dataset.amazonAsin?.trim();
  if (dataAsin) return dataAsin;

  return new URL(link.href).pathname.match(/\/dp\/([A-Z0-9]{10})(?:\/|$)/i)?.[1];
}

function getProductName(link: HTMLAnchorElement) {
  return (
    link.dataset.productName?.trim() ||
    document.querySelector("h1")?.textContent?.trim() ||
    "Amazon product"
  );
}

function getContent(link: HTMLAnchorElement): OpenAIAdsContent | undefined {
  const asin = getAsin(link);
  if (!asin) return undefined;

  return {
    id: asin,
    name: getProductName(link),
    content_type: "product",
  };
}

export function OpenAIAdsTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/guides/")) return;

    const productLink = document.querySelector<HTMLAnchorElement>(
      'a[data-amazon-asin][href*="amazon.com"]',
    );
    const content = productLink ? getContent(productLink) : undefined;

    if (!content) return;

    window.oaiq?.("measure", "contents_viewed", {
      type: "contents",
      contents: [content],
    });
  }, [pathname]);

  useEffect(() => {
    function measureAmazonClick(event: MouseEvent) {
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

      const content = getContent(link);
      window.oaiq?.(
        "measure",
        "custom",
        {
          type: "custom",
          ...(content ? { contents: [content] } : {}),
        },
        { custom_event_name: "amazon_outbound_click" },
      );
    }

    document.addEventListener("click", measureAmazonClick, true);
    return () => document.removeEventListener("click", measureAmazonClick, true);
  }, []);

  return null;
}
