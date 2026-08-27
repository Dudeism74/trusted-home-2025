import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getResource } from "../lib/resources";

const resource = getResource("fix-noisy-bathroom-exhaust-fan")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function NoisyBathroomFanPage() {
  return <ResourcePage resource={resource} />;
}
