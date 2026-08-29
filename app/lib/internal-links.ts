export type SupplementalContextualLink = {
  href: string;
  terms: string[];
};

export const relatedResourceOverrides: Record<string, string[]> = {
  "stop-drafts-from-windows-without-replacement": [
    "central-air-conditioner-not-cooling-troubleshooting-guide",
    "prevent-bathroom-mold-growth-steps",
  ],
  "fix-noisy-bathroom-exhaust-fan": [
    "bathroom-exhaust-fan-repair-or-replace",
    "bathroom-exhaust-fan-cfm-sizing",
    "prevent-bathroom-mold-growth-steps",
  ],
  "prevent-bathroom-mold-growth-steps": [
    "fix-noisy-bathroom-exhaust-fan",
    "bathroom-exhaust-fan-cfm-sizing",
    "stop-drafts-from-windows-without-replacement",
  ],
  "bathroom-exhaust-fan-cfm-sizing": [
    "fix-noisy-bathroom-exhaust-fan",
    "bathroom-exhaust-fan-repair-or-replace",
    "prevent-bathroom-mold-growth-steps",
  ],
  "bathroom-exhaust-fan-repair-or-replace": [
    "fix-noisy-bathroom-exhaust-fan",
    "bathroom-exhaust-fan-cfm-sizing",
    "prevent-bathroom-mold-growth-steps",
  ],
  "air-purifier-cadr-room-size-guide": [
    "central-air-conditioner-not-cooling-troubleshooting-guide",
    "stop-drafts-from-windows-without-replacement",
    "prevent-bathroom-mold-growth-steps",
  ],
  "central-air-conditioner-not-cooling-troubleshooting-guide": [
    "stop-drafts-from-windows-without-replacement",
    "air-purifier-cadr-room-size-guide",
    "breaker-keeps-tripping",
  ],
  "toilet-keeps-running": [
    "fix-leaking-kitchen-faucet-guide",
    "water-heater-not-providing-hot-water-solutions",
  ],
  "fix-leaking-kitchen-faucet-guide": [
    "toilet-keeps-running",
    "dishwasher-not-draining",
    "water-heater-not-providing-hot-water-solutions",
  ],
  "water-heater-not-providing-hot-water-solutions": [
    "breaker-keeps-tripping",
    "fix-leaking-kitchen-faucet-guide",
    "toilet-keeps-running",
  ],
  "whirlpool-oven-igniter-glows-but-wont-heat": [
    "dryer-not-heating",
    "dishwasher-not-draining",
    "breaker-keeps-tripping",
  ],
  "refrigerator-not-cooling": ["breaker-keeps-tripping"],
  "dryer-not-heating": [
    "whirlpool-oven-igniter-glows-but-wont-heat",
    "breaker-keeps-tripping",
    "washer-not-draining",
  ],
  "washer-not-draining": ["dryer-not-heating", "dishwasher-not-draining"],
  "dishwasher-not-draining": [
    "why-dishwasher-not-cleaning-properly",
    "fix-leaking-kitchen-faucet-guide",
  ],
  "why-dishwasher-not-cleaning-properly": [
    "dishwasher-not-draining",
    "fix-leaking-kitchen-faucet-guide",
  ],
  "breaker-keeps-tripping": [
    "dryer-not-heating",
    "water-heater-not-providing-hot-water-solutions",
    "central-air-conditioner-not-cooling-troubleshooting-guide",
  ],
};

export const contextualAnchorTerms: Record<string, string[]> = {
  "stop-drafts-from-windows-without-replacement": [
    "window drafts",
    "window draft",
    "drafty window",
    "air sealing",
  ],
  "fix-noisy-bathroom-exhaust-fan": [
    "bathroom fan",
    "exhaust fan",
    "fan noise",
  ],
  "prevent-bathroom-mold-growth-steps": [
    "bathroom mold",
    "mold",
    "moisture problem",
  ],
  "bathroom-exhaust-fan-cfm-sizing": [
    "fan capacity",
    "CFM",
    "fan sizing",
    "undersized fan",
  ],
  "bathroom-exhaust-fan-repair-or-replace": [
    "motor replacement",
    "replacement motor",
    "replace the fan",
    "whole fan",
  ],
  "air-purifier-cadr-room-size-guide": ["air purifier", "air cleaner", "CADR"],
  "central-air-conditioner-not-cooling-troubleshooting-guide": [
    "central air conditioner",
    "air conditioner",
    "central AC",
  ],
  "toilet-keeps-running": ["running toilet", "toilet"],
  "fix-leaking-kitchen-faucet-guide": ["leaking faucet", "kitchen faucet", "faucet"],
  "water-heater-not-providing-hot-water-solutions": ["water heater", "hot water"],
  "whirlpool-oven-igniter-glows-but-wont-heat": [
    "oven igniter",
    "gas oven",
    "oven not heating",
    "bake burner",
  ],
  "refrigerator-not-cooling": ["refrigerator", "fridge"],
  "dryer-not-heating": ["clothes dryer", "dryer"],
  "washer-not-draining": ["washing machine", "washer"],
  "dishwasher-not-draining": ["dishwasher drain", "dishwasher not draining"],
  "why-dishwasher-not-cleaning-properly": [
    "dishwasher not cleaning",
    "cleaning dishes",
  ],
  "breaker-keeps-tripping": ["circuit breaker", "breaker", "tripping"],
};

export const supplementalContextualLinks: Record<
  string,
  SupplementalContextualLink[]
> = {
  "air-purifier-cadr-room-size-guide": [
    {
      href: "/guides/dreame-pm20",
      terms: ["AirPursue PM20", "PM20"],
    },
  ],
};

export function getRelatedResourceSlugs(slug: string, fallback: string[]) {
  return relatedResourceOverrides[slug] ?? fallback;
}
