import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getAdditionalResource } from "../lib/additional-resources";

const resource = getAdditionalResource(
  "central-air-conditioner-not-cooling-troubleshooting-guide",
)!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function CentralAirNotCoolingPage() {
  return <ResourcePage resource={resource} />;
}
