import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getAdditionalResource } from "../lib/additional-resources";

const resource = getAdditionalResource(
  "water-heater-not-providing-hot-water-solutions",
)!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function NoHotWaterPage() {
  return <ResourcePage resource={resource} />;
}
