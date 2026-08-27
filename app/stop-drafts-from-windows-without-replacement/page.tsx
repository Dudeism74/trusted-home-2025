import type { Metadata } from "next";
import { ResourcePage } from "../components/resource-page";
import { getResource } from "../lib/resources";

const resource = getResource("stop-drafts-from-windows-without-replacement")!;

export const metadata: Metadata = {
  title: resource.metaTitle,
  description: resource.metaDescription,
  alternates: { canonical: `/${resource.slug}` },
};

export default function WindowDraftsPage() {
  return <ResourcePage resource={resource} />;
}
