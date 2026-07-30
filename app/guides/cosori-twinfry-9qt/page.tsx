import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";
import { getProduct } from "../../lib/products";

const product = getProduct("cosori-twinfry-9qt")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: { canonical: `/guides/${product.slug}` },
  openGraph: {
    type: "article",
    title: product.metaTitle,
    description: product.metaDescription,
    url: `/guides/${product.slug}`,
    images: [{ url: product.image, alt: product.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: product.metaTitle,
    description: product.metaDescription,
    images: [product.image],
  },
};

export default function CosoriTwinfryGuide() {
  return <GuidePage product={product} />;
}
