export const SITE_URL = "https://www.trustedhomeessentials.com";
export const SITE_NAME = "Trusted Home Essentials";
export const REVIEWED_DATE = "2026-07-30";
export const REVIEWED_DATE_LABEL = "July 30, 2026";

export type ProductGuide = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  image: string;
  alt: string;
  accent: "coral" | "cobalt" | "sage" | "aqua" | "lime";
  amazonUrl: string;
  manufacturerUrl: string;
  manufacturerLabel: string;
  amazonAsin: string;
  affiliateTag: string;
  campaignId?: string;
  linkId?: string;
  campaignEndsAt?: string;
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
    campaignEndsAt: "2026-09-01T06:59:59Z",
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
    campaignEndsAt: "2027-04-01T06:59:59Z",
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
    campaignEndsAt: "2026-09-04T06:59:59Z",
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
    campaignEndsAt: "2026-09-12T06:59:59Z",
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
  {
    slug: "shark-wandvac-wv201",
    name: "Shark WANDVAC WV201",
    shortName: "WANDVAC WV201",
    category: "Quick cleanup",
    image: "/products/shark-wandvac-wv201.png",
    alt: "Shark WANDVAC WV201 cordless handheld vacuum on its charging dock",
    accent: "lime",
    amazonAsin: "B07FX5K4D6",
    affiliateTag: "sharkwandvacweb-20",
    campaignEndsAt: "2026-08-22T06:59:59Z",
    amazonUrl:
      "https://www.amazon.com/dp/B07FX5K4D6?tag=sharkwandvacweb-20",
    manufacturerUrl:
      "https://www.sharkninja.com/shark-wandvac-cordless-handheld-vacuum/WV201.html",
    manufacturerLabel: "Shark WANDVAC WV201 specifications",
    metaTitle: "Shark WANDVAC WV201 Guide: Fit, Facts, and Limits",
    metaDescription:
      "Evaluate the Shark WANDVAC WV201 handheld vacuum, including its 1.4 pound design, charging dock, small dust cup, included tools, and best uses.",
    dek: "A specification based guide to the slim handheld vacuum made for small, fast cleanup jobs.",
    quickAnswer:
      "The Shark WANDVAC WV201 is a strong fit for quick crumbs, upholstery, car interiors, and other small messes where a full size vacuum feels excessive. Its compact dust cup and handheld format make it a poor substitute for cleaning whole rooms.",
    bestFor:
      "Small, frequent cleanups in kitchens, cars, on furniture, and around tight spaces.",
    skipIf:
      "You want one vacuum for floors and whole rooms, need a large debris bin, or prefer long cleaning sessions between charges.",
    bottomLine:
      "The WANDVAC WV201 makes sense as a convenient second vacuum, not a household's only vacuum. Its slim docked design keeps it visible and charged for fast jobs, while the included tools extend it to crevices and upholstery. The deciding tradeoff is capacity: the small dust cup and handheld body favor speed and access over sustained cleaning.",
    facts: [
      { label: "Published weight", value: "About 1.4 pounds" },
      { label: "Dust cup", value: "0.1 quart" },
      { label: "Charging", value: "Dock with onboard accessory storage" },
      { label: "Included narrow tool", value: "Duster Crevice Tool" },
      { label: "Included fabric tool", value: "Multi Surface Pet Tool" },
      { label: "Filter", value: "Washable fabric filter" },
    ],
    strengths: [
      "The slim, lightweight body is designed for fast one handed cleanup.",
      "The charging dock keeps the vacuum powered and stores two accessories.",
      "One touch debris emptying reduces contact with the contents of the dust cup.",
      "The included tools target tight spaces, upholstery, and pet hair.",
    ],
    tradeoffs: [
      "The 0.1 quart dust cup will need frequent emptying during larger jobs.",
      "A handheld vacuum does not provide the floor coverage of a stick or upright vacuum.",
      "Battery runtime and suction needs vary by debris type and cleaning surface.",
      "The dock needs an accessible outlet and a practical place to remain between uses.",
    ],
    useCases: [
      {
        title: "Kitchen and dining messes",
        detail:
          "The light handheld format suits crumbs on counters, tables, seats, and nearby floor edges.",
      },
      {
        title: "Car interiors",
        detail:
          "The Duster Crevice Tool can reach between seats and into other narrow interior spaces.",
      },
      {
        title: "Furniture and pet hair",
        detail:
          "The included Multi Surface Pet Tool is intended for hair and debris on upholstery and similar surfaces.",
      },
    ],
    checks: [
      "Confirm that the current Amazon variation is model WV201 in the color you expect.",
      "Check the included tool list because bundles and variations can change.",
      "Choose a dock location near an outlet where the vacuum remains easy to grab.",
      "Treat it as a quick cleanup tool rather than a replacement for a full size vacuum.",
    ],
    faq: [
      {
        question: "How much does the Shark WANDVAC WV201 weigh?",
        answer:
          "Shark describes the WANDVAC as a roughly 1.4 pound handheld vacuum. Published page fields can vary, so confirm the current listing if exact weight is important.",
      },
      {
        question: "What comes with the WANDVAC WV201?",
        answer:
          "Shark currently lists a charging dock, Duster Crevice Tool, and Multi Surface Pet Tool with the WV201.",
      },
      {
        question: "Can the filter be washed?",
        answer:
          "Yes. Shark describes the fabric filter as washable and recommends hand washing it to maintain cleaning performance.",
      },
      {
        question: "Can it replace a full size vacuum?",
        answer:
          "It is better suited to small, quick jobs. Its handheld format and 0.1 quart dust cup are not designed for the floor coverage or capacity of a full size vacuum.",
      },
      {
        question: "Has Trusted Home Essentials tested the WV201?",
        answer:
          "No. This guide evaluates Shark's published specifications and practical fit constraints. It is not a hands on cleaning test.",
      },
    ],
  },
  {
    slug: "cosori-twinfry-9qt",
    name: "Cosori TWINFRY 9 Qt",
    shortName: "TWINFRY 9 Qt",
    category: "Kitchen cooking",
    image: "/products/cosori-twinfry-9qt.webp",
    alt: "Cosori TWINFRY 9 Qt air fryer with its divided cooking basket open",
    accent: "coral",
    amazonAsin: "B0GLX9TGJV",
    affiliateTag: "myfinancials-20",
    campaignId: "amzn1.campaign.3RW31B8BPFG3K",
    linkId: "amzn1.campaign.3RW31B8BPFG3K_1785441515192",
    campaignEndsAt: "2027-05-01T06:59:59Z",
    amazonUrl:
      "https://www.amazon.com/dp/B0GLX9TGJV?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3RW31B8BPFG3K&linkCode=tr1&tag=myfinancials-20&linkId=amzn1.campaign.3RW31B8BPFG3K_1785441515192",
    manufacturerUrl:
      "https://cosori.com/products/cosori-twinfry-9-quart-double-air-fryer",
    manufacturerLabel: "Cosori TWINFRY 9 Qt specifications",
    metaTitle: "Cosori TWINFRY 9 Qt Guide: Divider, Capacity, and Fit",
    metaDescription:
      "Evaluate the Cosori TWINFRY 9 Qt air fryer, including its removable divider, dual 4.5 quart zones, six modes, Sync and Match controls, and fit checks.",
    dek: "A specification based guide to a flexible air fryer that switches between two cooking zones and one large basket.",
    quickAnswer:
      "The Cosori TWINFRY 9 Qt is a strong fit for households that regularly cook a main dish and side at once or need one large basket for a bigger batch. Its removable divider and Sync and Match controls are less valuable if you usually cook one small portion.",
    bestFor:
      "Families and meal preppers who will use both independent 4.5 quart zones as well as the full 9 quart basket.",
    skipIf:
      "Counter space is tight, your usual portions are small, or you do not need separate cooking settings for two foods.",
    bottomLine:
      "The TWINFRY earns consideration because its removable divider changes the appliance from two 4.5 quart zones into one 9 quart basket. That is a practical distinction for buyers who alternate between complete meals and larger single batches. Measure the countertop footprint and confirm that you will use both configurations before choosing it over a smaller air fryer.",
    facts: [
      { label: "Capacity", value: "9 quarts total" },
      { label: "Basket setup", value: "Two 4.5 quart zones or one 9 quart basket" },
      { label: "Temperature range", value: "95°F to 465°F" },
      { label: "Cooking modes", value: "Six functions" },
      { label: "Rated power", value: "1,750 watts" },
      { label: "Dimensions", value: "19.0 by 11.1 by 11.9 inches" },
    ],
    strengths: [
      "The removable divider supports two independent 4.5 quart zones or one open 9 quart basket.",
      "Sync can coordinate different settings so two foods finish together, while Match copies settings across both zones.",
      "Cosori specifies PFAS-free ceramic coating on the basket and crisper plate.",
      "The basket and crisper plate are described as dishwasher safe for easier cleanup.",
    ],
    tradeoffs: [
      "The 19 inch width requires more countertop space than many compact air fryers.",
      "The dual-zone design adds the most value only when two foods or larger batches are common.",
      "The 1,750 watt rating should be considered when choosing an outlet and sharing a kitchen circuit.",
      "Cooking times still vary with food size, load, arrangement, and starting temperature.",
    ],
    useCases: [
      {
        title: "Main dish and side",
        detail:
          "Use the divider and separate settings for two foods, then use Sync when they require different cooking times but should finish together.",
      },
      {
        title: "One larger batch",
        detail:
          "Remove the divider to use the full 9 quart basket for a larger single recipe or food that needs more open space.",
      },
      {
        title: "Meal prep and gatherings",
        detail:
          "The larger format can suit batch cooking and mixed menus when its countertop footprint and electrical needs fit the kitchen.",
      },
    ],
    checks: [
      "Measure the 19.0 by 11.1 inch footprint and allow the clearances required by the manual.",
      "Decide whether you will regularly use both the divided and open-basket configurations.",
      "Confirm that the intended outlet and kitchen circuit suit a 1,750 watt appliance.",
      "Check the current Amazon variation, included accessories, warranty, and return terms before ordering.",
    ],
    faq: [
      {
        question: "Can the Cosori TWINFRY work as one large air fryer?",
        answer:
          "Yes. Cosori specifies a removable divider that converts the two 4.5 quart cooking zones into one 9 quart basket.",
      },
      {
        question: "Can both sides use different settings?",
        answer:
          "Yes. The divided basket supports independent settings. The Sync function is designed to have two foods finish together, while Match duplicates settings across both zones.",
      },
      {
        question: "What cooking functions are included?",
        answer:
          "Cosori lists Air Fry, Roast, Bake, Broil, Reheat, and Dry as the six cooking functions.",
      },
      {
        question: "Are the basket and crisper plate dishwasher safe?",
        answer:
          "Cosori describes both as dishwasher safe and specifies a PFAS-free ceramic coating.",
      },
      {
        question: "Has Trusted Home Essentials cooked with the TWINFRY?",
        answer:
          "No. This guide evaluates Cosori's published specifications and practical fit constraints. It is not a hands-on cooking test.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
