// Vercel's Node runtime has neither the Sites D1 binding nor its trusted
// authentication proxy. Preserve the Sites integration without accepting
// submissions or trusting identity headers on the unsupported deployment.
export function supportsSitesServices() {
  return process.env.VERCEL !== "1";
}
