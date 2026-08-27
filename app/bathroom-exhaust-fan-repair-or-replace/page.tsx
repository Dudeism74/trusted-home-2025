import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getResource } from "../lib/resources";

const resource = getResource("bathroom-exhaust-fan-repair-or-replace")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function BathroomFanRepairDecisionPage() {
  return <ResourcePage resource={resource} />;
}
