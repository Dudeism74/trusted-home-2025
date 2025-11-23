import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

let client: any;
if (!projectId) {
  // Fallback noop client for build environments without Sanity config
  client = {
    fetch: async () => {
      // Return empty arrays/objects to avoid build-time failures
      return [];
    },
  } as any;
} else {
  client = createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-05-03",
    useCdn: false,
  });
}

export { client };