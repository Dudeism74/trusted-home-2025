import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getResource } from "../lib/resources";

const resource = getResource("prevent-bathroom-mold-growth-steps")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function BathroomMoldPage() {
  return <ResourcePage resource={resource} />;
}
