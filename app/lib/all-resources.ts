import { additionalResources } from "./additional-resources";
import { homeSystemsInspectionResource } from "./home-systems-inspection-resource";
import { ovenIgniterResource } from "./oven-igniter-resource";
import { resources, type TroubleshootingResource } from "./resources";

export const allResources: TroubleshootingResource[] = [
  ...resources,
  homeSystemsInspectionResource,
  ovenIgniterResource,
  ...additionalResources,
];

export function getAnyResource(slug: string) {
  return allResources.find((resource) => resource.slug === slug);
}
