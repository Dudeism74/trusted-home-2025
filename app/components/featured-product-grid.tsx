"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ProductGuide } from "../lib/products";
import { AffiliateButton } from "./affiliate-button";

const DAY_MS = 24 * 60 * 60 * 1000;

function campaignMessage(product: ProductGuide, now: number) {
  if (!product.campaignEndsAt) {
    return null;
  }

  const remaining = new Date(product.campaignEndsAt).getTime() - now;
  if (remaining <= 0) {
    return null;
  }

  const days = Math.ceil(remaining / DAY_MS);
  return days <= 1 ? "Last day on THE" : `${days} days left on THE`;
}

export function FeaturedProductGrid({
  products,
}: {
  products: ProductGuide[];
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    const initialTimer = window.setTimeout(updateNow, 0);
    const hourlyTimer = window.setInterval(updateNow, 60 * 60 * 1000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(hourlyTimer);
    };
  }, []);

  const activeProducts = useMemo(
    () =>
      now === null
        ? products
        : products.filter(
            (product) =>
              !product.campaignEndsAt ||
              new Date(product.campaignEndsAt).getTime() > now,
          ),
    [now, products],
  );

  return (
    <div className="product-grid">
      {activeProducts.map((product, index) => {
        const countdown =
          now === null ? null : campaignMessage(product, now);

        return (
          <article
            className={`product-card ${product.accent}`}
            id={product.slug}
            key={product.name}
          >
            <div className="product-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <Link
              className="product-image"
              href={`/guides/${product.slug}`}
              aria-label={`Read the ${product.name} buying guide`}
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={1000}
                height={1000}
                sizes="(max-width: 720px) 92vw, (max-width: 1120px) 44vw, 520px"
                priority={index < 2}
                unoptimized
              />
            </Link>
            <div className="product-content">
              <p className="product-category">{product.category}</p>
              {countdown ? (
                <p className="campaign-countdown" aria-live="polite">
                  {countdown}
                </p>
              ) : null}
              <h3>
                <Link href={`/guides/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="product-answer">{product.quickAnswer}</p>

              <dl>
                <div>
                  <dt>Best fit</dt>
                  <dd>{product.bestFor}</dd>
                </div>
                <div>
                  <dt>Skip if</dt>
                  <dd>{product.skipIf}</dd>
                </div>
              </dl>

              <ul className="fact-list">
                {product.facts.slice(0, 3).map((fact) => (
                  <li key={fact.label}>{fact.value}</li>
                ))}
              </ul>

              <div className="card-actions">
                <Link
                  className="button button-primary"
                  href={`/guides/${product.slug}`}
                >
                  Read the complete guide
                </Link>
                <AffiliateButton
                  href={product.amazonUrl}
                  productName={product.name}
                  amazonAsin={product.amazonAsin}
                  affiliateTag={product.affiliateTag}
                  campaignId={product.campaignId}
                  linkId={product.linkId}
                />
                <a
                  className="source-link"
                  href={product.manufacturerUrl}
                  rel="noopener"
                  target="_blank"
                >
                  Source: {product.manufacturerLabel}
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
