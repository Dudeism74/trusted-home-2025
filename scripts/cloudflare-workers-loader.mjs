const workersStub = `
export const env = new Proxy({}, {
  get() {
    return undefined;
  },
});
`;

export async function resolve(specifier, context, nextResolve) {
  if (specifier === "cloudflare:workers") {
    return {
      url: `data:text/javascript,${encodeURIComponent(workersStub)}`,
      shortCircuit: true,
    };
  }

  return nextResolve(specifier, context);
}
