import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getAdditionalResource } from "../lib/additional-resources";

const resource = getAdditionalResource("toilet-keeps-running")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: `/${resource.slug}` },
};

export default function ToiletKeepsRunningPage() {
  return <ResourcePage resource={resource} />;
}
