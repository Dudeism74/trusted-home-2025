import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getAdditionalResource } from "../lib/additional-resources";

const resource = getAdditionalResource("why-dishwasher-not-cleaning-properly")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function DishwasherNotCleaningPage() {
  return <ResourcePage resource={resource} />;
}
