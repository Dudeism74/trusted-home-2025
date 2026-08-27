import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getResource } from "../lib/resources";

const resource = getResource("air-purifier-cadr-room-size-guide")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function AirPurifierCadrPage() {
  return <ResourcePage resource={resource} />;
}
