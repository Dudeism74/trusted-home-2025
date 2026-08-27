import { additionalResources } from "./additional-resources";
import { resources, type TroubleshootingResource } from "./resources";

export const allResources: TroubleshootingResource[] = [
  ...resources,
  ...additionalResources,
];

export function getAnyResource(slug: string) {
  return allResources.find((resource) => resource.slug === slug);
}
