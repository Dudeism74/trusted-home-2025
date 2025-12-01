import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = projectId && dataset
  ? createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  })
  : {
    fetch: async () => null,
  } as unknown as ReturnType<typeof createClient>;