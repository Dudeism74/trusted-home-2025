import Image from "next/image";
import Link from "next/link";
import type { ProductGuide } from "../lib/products";
import { AffiliateButton } from "./affiliate-button";

export function FeaturedProductGrid({
  products,
}: {
  products: ProductGuide[];
}) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
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
      ))}
    </div>
  );
}
