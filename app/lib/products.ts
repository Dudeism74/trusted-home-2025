export const SITE_URL = "https://trustedhomeessentials.com";
export const SITE_NAME = "Trusted Home Essentials";
export const REVIEWED_DATE = "2026-07-27";
export const REVIEWED_DATE_LABEL = "July 27, 2026";

export type ProductGuide = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  image: string;
  alt: string;
  accent: "coral" | "cobalt" | "sage" | "aqua";
  amazonUrl: string;
  manufacturerUrl: string;
  manufacturerLabel: string;
  amazonAsin: string;
  affiliateTag: string;
  campaignId: string;
  linkId: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  quickAnswer: string;
  bestFor: string;
  skipIf: string;
  bottomLine: string;
  facts: Array<{ label: string; value: string }>;
  strengths: string[];
  tradeoffs: string[];
  useCases: Array<{ title: string; detail: string }>;
  checks: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const products: ProductGuide[] = [
  {
    slug: "solo-stove-pi-prime",
    name: "Solo Stove Pi Prime",
    shortName: "Pi Prime",
    category: "Outdoor cooking",
    image: "/products/solo-stove-pi-prime.jpg",
    alt: "Solo Stove Pi Prime propane outdoor pizza oven",
    accent: "coral",
    amazonAsin: "B0FNPPGKHW",
    affiliateTag: "myfinancials-20",
    campaignId: "amzn1.campaign.QWWLVBYDWL9M",
    linkId: "amzn1.campaign.QWWLVBYDWL9M_1784982844157",
    amazonUrl:
      "https://www.amazon.com/dp/B0FNPPGKHW?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.QWWLVBYDWL9M&linkCode=tr1&tag=myfinancials-20&linkId=amzn1.campaign.QWWLVBYDWL9M_1784982844157",
    manufacturerUrl:
      "https://www.solostove.com/us/en-us/p/pi-prime?sku=PIZZA-OVEN-PRIME",
    manufacturerLabel: "Solo Stove Pi Prime specifications",
    metaTitle: "Solo Stove Pi Prime Guide: Fit, Facts, and Tradeoffs",
    metaDescription:
      "Is the Solo Stove Pi Prime right for your backyard? Compare its propane setup, 15 minute preheat, fast pizza claims, limitations, and buying checks.",
    dek: "A specification based guide to the propane pizza oven built for quick backyard cooking.",
    quickAnswer:
      "The Solo Stove Pi Prime is a strong fit for backyard hosts who want propane convenience, high heat, and quick pizza cooking. It is not a fit for indoor use or buyers who specifically want a wood fueled oven.",
    bestFor:
      "Backyard hosts who want a compact propane oven for pizza nights and other high heat cooking.",
    skipIf:
      "You need an indoor appliance, prefer wood as the fuel, or do not have a stable heat safe outdoor setup.",
    bottomLine:
      "The Pi Prime makes the most sense when speed and propane simplicity matter more than a traditional wood fired process. The key buying decision is not whether it can get hot, but whether its outdoor footprint, fuel setup, and cooking opening fit how you plan to use it.",
    facts: [
      { label: "Fuel", value: "Propane only" },
      { label: "Heat up claim", value: "Up to 900°F in about 15 minutes" },
      { label: "Pizza claim", value: "Pizza in as little as 90 seconds" },
      { label: "Opening", value: "13 inch panoramic opening on the current Solo Stove bundle specification" },
      { label: "Construction", value: "304 stainless steel on the current bundle specification" },
      { label: "Use", value: "Outdoor use only" },
    ],
    strengths: [
      "Propane removes the need to manage a wood fire before each cook.",
      "The published 15 minute heat up time supports spontaneous weeknight or party use.",
      "The demi dome design is intended to distribute heat across the stone.",
      "The front opening is designed to keep launching, turning, and removing food visible.",
    ],
    tradeoffs: [
      "Fast cooking still requires practice with dough, launch technique, and turning.",
      "A propane tank, outdoor clearance, and a stable heat safe surface are part of the real setup.",
      "The oven is designed for outdoor use only.",
      "Bundle contents and opening descriptions can vary by listing, so the current Amazon variation should be checked before ordering.",
    ],
    useCases: [
      {
        title: "Family pizza night",
        detail:
          "The quick published preheat and short cook time suit multiple personal pizzas when ingredients are prepared before the first launch.",
      },
      {
        title: "Backyard entertaining",
        detail:
          "Propane control can reduce the attention needed to maintain a fire while guests are present.",
      },
      {
        title: "More than pizza",
        detail:
          "The campaign and manufacturer materials position the oven for high heat cooking beyond pizza, including vegetables and proteins, with appropriate cookware and technique.",
      },
    ],
    checks: [
      "Confirm the selected Amazon variation includes the accessories you expect.",
      "Measure the intended outdoor surface and clearance before ordering.",
      "Plan where the propane tank and hose will sit during use.",
      "Confirm that outdoor only operation works for your climate and storage plan.",
    ],
    faq: [
      {
        question: "Does the Solo Stove Pi Prime use wood?",
        answer:
          "No. Solo Stove specifies propane only for the Pi Prime and says not to use alternative gases or wood.",
      },
      {
        question: "How long does the Pi Prime take to preheat?",
        answer:
          "Solo Stove says it can heat to 900°F in about 15 minutes. Outdoor temperature, wind, and setup can affect actual timing.",
      },
      {
        question: "Can the Pi Prime be used indoors?",
        answer:
          "No. It is an outdoor propane appliance and should be used only as directed by the manufacturer.",
      },
      {
        question: "Is it only for pizza?",
        answer:
          "No. The published materials also describe cooking foods such as steak, fish, and vegetables. Technique and suitable cookware still matter.",
      },
      {
        question: "Has Trusted Home Essentials cooked with this oven?",
        answer:
          "No. This is an editorial assessment of published specifications and current product information, not a hands on test.",
      },
    ],
  },
  {
    slug: "kroozie-xl",
    name: "Kroozie XL 2.0",
    shortName: "Kroozie XL",
    category: "Ride accessories",
    image: "/products/kroozie-xl.png",
    alt: "Gloss black Kroozie XL 2.0 bicycle cup holder",
    accent: "cobalt",
    amazonAsin: "B078XLZ982",
    affiliateTag: "myfinancials-20",
    campaignId: "amzn1.campaign.35WHM6A6VQKQ6",
    linkId: "amzn1.campaign.35WHM6A6VQKQ6_1784663754602",
    amazonUrl:
      "https://www.amazon.com/dp/B078XLZ982?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.35WHM6A6VQKQ6&linkCode=tr1&tag=myfinancials-20&linkId=amzn1.campaign.35WHM6A6VQKQ6_1784663754602",
    manufacturerUrl:
      "https://kroozie.com/products/kroozie-xl-2-0-gloss-black",
    manufacturerLabel: "Kroozie XL 2.0 specifications",
    metaTitle: "Kroozie XL 2.0 Guide: Drink Fit and Mounting Checks",
    metaDescription:
      "See who the Kroozie XL 2.0 bicycle cup holder suits, its 12 to 48 ounce range, mounting requirements, foam inserts, and fit checks.",
    dek: "A practical fit guide for riders considering a large, adjustable bicycle cup holder.",
    quickAnswer:
      "The Kroozie XL 2.0 is a flexible choice for riders who switch between 12 to 48 ounce drinks and have a compatible horizontal mounting bar. Measure the bar before buying because the standard clamp is not a universal vertical mount.",
    bestFor:
      "Riders who alternate between cans, coffee cups, tumblers, and large fountain drinks.",
    skipIf:
      "Your only mounting point is vertical, angled, or outside the published 5/8 inch to 1 3/8 inch diameter range.",
    bottomLine:
      "The Kroozie XL earns consideration for range, not minimal size. Its two foam inserts are the useful idea because they let one large stainless steel holder close around smaller drinks. The decisive question is whether the clamp and available bar space fit your equipment.",
    facts: [
      { label: "Drink range", value: "12 to 48 ounces" },
      { label: "Standard mount", value: "Horizontal bar clamp" },
      { label: "Bar diameter", value: "5/8 inch to 1 3/8 inch" },
      { label: "Insert", value: "Two removable foam inserts" },
      { label: "Body", value: "One piece stainless steel cup" },
      { label: "Cup height", value: "3.85 inches" },
    ],
    strengths: [
      "The published drink range covers slim cans through large tumblers and fountain drinks.",
      "Two removable foam inserts let the interior adapt to different container sizes.",
      "The stainless steel cup and hardware are intended for repeated outdoor use.",
      "The dual screw clamp is designed to create a secure grip on a compatible horizontal bar.",
    ],
    tradeoffs: [
      "The large cup takes more handlebar or frame space than a narrow bottle cage.",
      "The included clamp is for a horizontal bar within a specific diameter range.",
      "Very top heavy or poorly sealed drinks still require cautious riding.",
      "A secure holder does not replace safe riding or a suitable lid.",
    ],
    useCases: [
      {
        title: "Beach cruiser and e-bike",
        detail:
          "The manufacturer lists cruisers, classic bicycles, electric bicycles, and comfort bikes among the intended uses.",
      },
      {
        title: "Stroller, scooter, boat, or wheelchair",
        detail:
          "The clamp can also suit other equipment when there is a compatible horizontal bar and adequate clearance.",
      },
      {
        title: "Mixed drink sizes",
        detail:
          "Keep the foam inserts in for smaller containers, then remove one or both as the drink diameter increases.",
      },
    ],
    checks: [
      "Measure the bar diameter, not just the visible length.",
      "Confirm that the mounting point is horizontal or budget for the separate angled mount.",
      "Check steering, brake cable, knee, and accessory clearance through the full range of motion.",
      "Use a suitable lid and test the mounted holder at low speed before a full ride.",
    ],
    faq: [
      {
        question: "What drink sizes fit the Kroozie XL 2.0?",
        answer:
          "Kroozie says the holder accommodates drinks from 12 to 48 ounces using its two removable foam inserts.",
      },
      {
        question: "What bar size does the standard clamp fit?",
        answer:
          "The published range is 5/8 inch to 1 3/8 inch on a horizontal bar.",
      },
      {
        question: "Can it mount vertically?",
        answer:
          "The standard product uses a horizontal bar clamp. Kroozie sells a separate mount for vertical or angled installation.",
      },
      {
        question: "Is it only for bicycles?",
        answer:
          "No. The manufacturer also lists strollers, boats, scooters, wheelchairs, and other equipment with a compatible horizontal bar.",
      },
      {
        question: "Has Trusted Home Essentials road tested this holder?",
        answer:
          "No. This guide evaluates current published specifications and fit constraints, not hands on road testing.",
      },
    ],
  },
  {
    slug: "dreame-pm20",
    name: "Dreame AirPursue PM20",
    shortName: "AirPursue PM20",
    category: "Indoor air",
    image: "/products/dreame-pm20.jpg",
    alt: "Dreame AirPursue PM20 air purifier, fan, and heater",
    accent: "sage",
    amazonAsin: "B0F32TGRMR",
    affiliateTag: "myfinancials-20",
    campaignId: "amzn1.campaign.126W4794WNW49",
    linkId: "amzn1.campaign.126W4794WNW49_1785171579666",
    amazonUrl:
      "https://www.amazon.com/dp/B0F32TGRMR?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.126W4794WNW49&linkCode=tr1&tag=myfinancials-20&linkId=amzn1.campaign.126W4794WNW49_1785171579666",
    manufacturerUrl: "https://global.dreametech.com/products/pm20",
    manufacturerLabel: "Dreame AirPursue PM20 specifications",
    metaTitle: "Dreame AirPursue PM20 Guide: Purifier, Fan, Heater",
    metaDescription:
      "Assess the Dreame AirPursue PM20 purifier, fan, and heater, including CADR, directional airflow, sensors, filter upkeep, controls, and tradeoffs.",
    dek: "A specification based look at an ambitious purifier that also moves and heats air.",
    quickAnswer:
      "The Dreame AirPursue PM20 is best suited to a large living space where one premium appliance can justify handling purification, directional airflow, and supplemental heat. It is likely excessive for a small room or a buyer who only needs basic filtration.",
    bestFor:
      "Large shared spaces where air cleaning, circulation, sensing, and supplemental heat are all useful.",
    skipIf:
      "You want a compact purifier, need the lowest ongoing filter cost, or already own capable separate fans and heaters.",
    bottomLine:
      "The PM20 is a feature dense air appliance rather than a simple purifier. Its strongest argument is consolidation: filtration, sensing, directional airflow, app controls, and rapid supplemental heat in one movable unit. Buyers should compare that convenience against footprint, noise, filter availability, and total cost.",
    facts: [
      { label: "CADR", value: "400 m³/h" },
      { label: "Published reach", value: "Air projection up to 10 meters in a 100 m² area" },
      { label: "Filtration", value: "Four layer system with a 0.3 μm minimum captured particle size" },
      { label: "Efficiency claim", value: "99.97 percent filtration efficiency" },
      { label: "Heat", value: "Published 3 second heat up for supplemental warm airflow" },
      { label: "Controls", value: "LCD, remote, app, and voice controls" },
    ],
    strengths: [
      "Directional airflow is designed to send cleaned air toward occupants instead of only circulating around the unit.",
      "The published 400 m³/h CADR and long throw airflow target larger living areas.",
      "Air quality sensing covers particles, gases, temperature, and humidity.",
      "Heating, fan modes, app controls, and hidden wheels make the unit more versatile than a basic purifier.",
    ],
    tradeoffs: [
      "A multi function design brings more size, complexity, and likely cost than a simple room purifier.",
      "Filter replacement price and availability affect the long term value.",
      "Dreame publishes a 60 dB(A) noise figure, which may be noticeable at higher settings.",
      "Coverage and purification claims come from manufacturer testing and depend on room layout and operating conditions.",
    ],
    useCases: [
      {
        title: "Open plan living area",
        detail:
          "The long range forward airflow and published CADR make the PM20 more plausible for a shared room than a compact bedside purifier.",
      },
      {
        title: "Pet household",
        detail:
          "A dedicated Pet Mode is intended to increase airflow for hair and odor capture, although maintenance frequency will depend on the home.",
      },
      {
        title: "Seasonal comfort",
        detail:
          "The fan and supplemental PTC heat can keep the appliance useful in more than one season.",
      },
    ],
    checks: [
      "Measure the floor footprint and confirm clearance for directional airflow.",
      "Check current replacement filter pricing and availability.",
      "Compare the 60 dB(A) published noise figure with the room's intended use.",
      "Confirm whether your region and selected listing support the app and voice features you expect.",
    ],
    faq: [
      {
        question: "Is the Dreame PM20 an air purifier and a heater?",
        answer:
          "Yes. Dreame describes it as a purifier with directional fan modes and a built in PTC heating module for supplemental warm airflow.",
      },
      {
        question: "What is the PM20 CADR?",
        answer:
          "Dreame publishes a clean air delivery rate of 400 cubic meters per hour.",
      },
      {
        question: "Does the PM20 have app controls?",
        answer:
          "Yes. The published controls include the Dreame app, a remote, an LCD screen, and voice assistance.",
      },
      {
        question: "Will it replace a whole home HVAC system?",
        answer:
          "No. It is a portable room appliance. Published coverage does not make it a substitute for whole home ventilation, filtration, or primary heating.",
      },
      {
        question: "Has Trusted Home Essentials tested its air cleaning performance?",
        answer:
          "No. This guide interprets the manufacturer's published specifications and identifies practical buying questions. It is not a laboratory or hands on test.",
      },
    ],
  },
  {
    slug: "dreame-a3-awd-pro",
    name: "Dreame A3 AWD Pro 3500",
    shortName: "A3 AWD Pro 3500",
    category: "Lawn care",
    image: "/products/dreame-a3-awd-pro.png",
    alt: "Dreame A3 AWD Pro 3500 wire-free robotic lawn mower",
    accent: "aqua",
    amazonAsin: "B0GR8TQHV9",
    affiliateTag: "myfinancials-20",
    campaignId: "amzn1.campaign.3JE79Y2H4VDUX",
    linkId: "amzn1.campaign.3JE79Y2H4VDUX_1785171677658",
    amazonUrl:
      "https://www.amazon.com/dp/B0GR8TQHV9?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3JE79Y2H4VDUX&linkCode=tr1&tag=myfinancials-20&linkId=amzn1.campaign.3JE79Y2H4VDUX_1785171677658",
    manufacturerUrl:
      "https://yardcare.dreametech.com/products/a3-awd-pro-robot-lawn-mower",
    manufacturerLabel: "Dreame A3 AWD Pro specifications",
    metaTitle: "Dreame A3 AWD Pro 3500 Guide: Lawn Fit and Limits",
    metaDescription:
      "Evaluate the Dreame A3 AWD Pro 3500 robot lawn mower, including wire-free mapping, all-wheel drive, slope handling, cutting width, coverage, and fit checks.",
    dek: "A specification based guide to the wire-free, all-wheel-drive robot mower for larger and more demanding lawns.",
    quickAnswer:
      "The Dreame A3 AWD Pro 3500 is a strong specification match for large, steep, or uneven lawns where wire-free mapping and four-wheel drive solve real problems. It is likely excessive for a small, flat yard or a buyer who wants the lowest-cost path to automated mowing.",
    bestFor:
      "Large or complex lawns with slopes, obstacles, multiple zones, and no appetite for installing boundary wire or an RTK antenna.",
    skipIf:
      "Your lawn is small and simple, your terrain exceeds the published limits, or you do not want the setup, blade, dock, and cleaning upkeep of a premium robot mower.",
    bottomLine:
      "The A3 AWD Pro 3500 makes its strongest case on difficult properties. Published wire-free mapping, four-wheel drive, wide dual cutting discs, and steep-slope capability can remove several common robot-mower constraints. The deciding question is whether your mowable area, passages, edges, docking location, and terrain match those specifications well enough to justify the premium hardware.",
    facts: [
      { label: "Published coverage", value: "Up to 0.87 acre or 3,500 m²" },
      { label: "Navigation", value: "OmniSense 3.0 LiDAR and binocular AI vision" },
      { label: "Drive", value: "Four-wheel drive" },
      { label: "Maximum slope", value: "Up to 80 percent or 38.7 degrees" },
      { label: "Cutting width", value: "15.8 inch dual-disc system" },
      { label: "Obstacle clearance", value: "Published capability up to 2.2 inches" },
    ],
    strengths: [
      "The wire-free setup avoids burying boundary cable and does not require a separate RTK antenna.",
      "Four-wheel drive and the published slope rating target terrain that can stop simpler robot mowers.",
      "The 15.8 inch dual-disc cutting system is designed to cover more lawn per pass than a narrow single-disc mower.",
      "App-based mapping, zones, schedules, and cutting settings can adapt the mowing plan to a complex property.",
    ],
    tradeoffs: [
      "This is premium hardware whose value depends on having a lawn difficult enough to use its capabilities.",
      "Published terrain and obstacle limits do not guarantee performance on every surface, edge, hole, root, or wet slope.",
      "Maximum coverage depends on the selected model and real operating conditions, so the 3500 variation must be confirmed before ordering.",
      "Blades, wheels, sensors, the charging dock, and the mower body still require routine inspection and maintenance.",
    ],
    useCases: [
      {
        title: "Steep or uneven yard",
        detail:
          "Four-wheel drive and the published 80 percent slope capability make the mower relevant to properties that challenge two-wheel-drive models.",
      },
      {
        title: "Large multi-zone lawn",
        detail:
          "The 3500 model targets up to 0.87 acre and supports app-based maps, zones, schedules, and no-go areas.",
      },
      {
        title: "Wire-free installation",
        detail:
          "LiDAR and vision-based navigation avoid the boundary-wire trenching and external RTK setup used by some competing systems.",
      },
    ],
    checks: [
      "Calculate the actual mowable area and confirm the Amazon variation is the A3 AWD Pro 3500.",
      "Inspect slopes, drop-offs, narrow passages, roots, holes, edging, and obstacles against the published limits.",
      "Choose a practical charging-dock location with power, clearance, and suitable network coverage.",
      "Confirm current warranty terms, replacement-blade availability, app compatibility, and included accessories.",
    ],
    faq: [
      {
        question: "Does the Dreame A3 AWD Pro need boundary wire?",
        answer:
          "No. Dreame describes the A3 AWD Pro as a wire-free mower that maps the lawn with OmniSense 3.0 LiDAR and binocular AI vision.",
      },
      {
        question: "How much lawn can the A3 AWD Pro 3500 cover?",
        answer:
          "Dreame publishes coverage up to 0.87 acre, or 3,500 square meters, for the 3500 model. Actual scheduling and coverage depend on lawn conditions.",
      },
      {
        question: "How steep a slope can it handle?",
        answer:
          "Dreame publishes a maximum slope capability of 80 percent, or 38.7 degrees. Surface conditions and transitions still matter.",
      },
      {
        question: "What cutting height does the mower support?",
        answer:
          "The current Amazon listing specifies a 1 to 4 inch adjustable cutting-height range. Confirm the selected variation before ordering.",
      },
      {
        question: "Has Trusted Home Essentials tested this mower on a lawn?",
        answer:
          "No. This guide evaluates current published specifications and practical fit constraints. It is not a hands-on mowing test.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
