import { createClient } from "@sanity/client";
const PUBLIC_SANITY_STUDIO_PROJECT_ID = "w92n6o3c";
const sanityClient = createClient({
  projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-19",
  useCdn: false
});
export {
  sanityClient as s
};
