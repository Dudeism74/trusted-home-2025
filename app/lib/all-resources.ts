import { additionalResources } from "./additional-resources";
import { ovenIgniterResource } from "./oven-igniter-resource";
import { resources, type TroubleshootingResource } from "./resources";

export const allResources: TroubleshootingResource[] = [
  ...resources,
  ovenIgniterResource,
  ...additionalResources,
];

export function getAnyResource(slug: string) {
  return allResources.find((resource) => resource.slug === slug);
}
