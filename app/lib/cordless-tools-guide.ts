export const CORDLESS_TOOLS_SLUG = "essential-cordless-power-tools-diyers";
export const CORDLESS_TOOLS_PUBLISHED_DATE = "2026-08-30";
export const CORDLESS_TOOLS_PUBLISHED_DATE_LABEL = "August 30, 2026";

export type CordlessToolCategory = {
  id: string;
  name: string;
  position: string;
  job: string;
  buyWhen: string;
  waitWhen: string;
  explanation: string[];
  buyingChecks: string[];
  safetyNote: string;
};

export const cordlessToolsGuide = {
  title: "The First 5 Cordless Power Tools for Home DIY",
  metaTitle: "5 Essential Cordless Power Tools for Home DIY",
  metaDescription:
    "Start with a drill/driver, then choose the next cordless tool by the job. Compare uses, limits, battery platforms, safety, and the right buying order.",
  eyebrow: "Project-first power tool guide",
  dek:
    "A drill/driver belongs first. The next four tools earn their place only when your projects need their specific kind of fastening or cutting.",
  quickAnswer:
    "For most homeowners, the cordless drill/driver is the first power tool to buy. Add an impact driver when you regularly drive long or resistant fasteners, a circular saw for straight cuts, a jigsaw for curves and cutouts, and an oscillating multi-tool for flush cuts, plunge cuts, scraping, and tight repair work. You do not need all five immediately. Choose one supported battery platform, then add the next tool only when a real project justifies it.",
  durabilityAnswer:
    "No cordless tool lasts forever. Long service life depends on choosing a supported battery system, matching the tool and accessory to the job, maintaining it properly, and avoiding battery abuse. The chuck, switch, bearings, guards, battery, and electronics can still wear or fail regardless of the motor type.",
  image: "/guides/cordless-power-tools/home-diy-cordless-power-tools.webp",
  imageAlt:
    "Illustrated homeowner workbench with a cordless drill, impact driver, circular saw, jigsaw, and oscillating multi-tool",
  starterKit: {
    name: "DEWALT DCK240C2 20V MAX drill/driver and impact driver kit",
    shortName: "DEWALT DCK240C2 two-tool kit",
    asin: "B00IJ0ALYS",
    affiliateTag: "pinterest1-2025-20",
    linkId: "a1412bcb6c417073a66110ccc7adddde",
    amazonUrl:
      "https://www.amazon.com/dp/B00IJ0ALYS/ref=cm_sw_r_as_gl_api_gl_i_9F44BNXGSBXPKJTRV3SQ?linkCode=ml1&tag=pinterest1-2025-20&linkId=a1412bcb6c417073a66110ccc7adddde",
    manufacturerUrl:
      "https://www.dewalt.com/en-us/product/dck240c2/20v-max-lithium-ion-drill-driverimpact-driver-combo-kit13-ah",
  },
} as const;

export const cordlessToolCategories: CordlessToolCategory[] = [
  {
    id: "drill-driver",
    name: "Cordless drill/driver",
    position: "Buy first",
    job: "Drilling holes and ordinary screwdriving",
    buyWhen:
      "You want one broad-purpose power tool for repairs, anchors, pilot holes, furniture, and general fastening.",
    waitWhen:
      "Wait only when you already own a suitable drill/driver or your work is limited to light hand-tool tasks.",
    explanation: [
      "A drill/driver combines a three-jaw chuck for common drill and driver-bit shanks with an adjustable clutch that can limit fastening torque. That combination makes it more versatile than the other four tools on this list.",
      "Multiple speed ranges help separate slower, more controlled fastening from higher-speed drilling. A standard drill/driver is not automatically a hammer drill, so masonry impact action must be listed as an actual mode before you count on it.",
    ],
    buyingChecks: [
      "Comfort, balance, and total weight with the battery installed",
      "Chuck size and the bit-shank range accepted by the exact model",
      "A usable clutch, multiple speeds, and locally available service or warranty support",
    ],
    safetyNote:
      "A bound bit can twist the tool opposite the direction of rotation. Brace the tool, release the trigger immediately, remove the battery before clearing the bind, and check behind walls for electrical, water, or gas lines before drilling.",
  },
  {
    id: "impact-driver",
    name: "Cordless impact driver",
    position: "Buy for repeated fastening",
    job: "Long screws and higher-resistance fastening",
    buyWhen:
      "Decking, framing, shelving, structural screws, or repeated fastening makes an ordinary drill slow or tiring.",
    waitWhen:
      "Your work is mostly small household screws, delicate hardware, or occasional furniture assembly.",
    explanation: [
      "An impact driver adds rotational impacts as resistance rises. That makes it well suited to driving long or resistant fasteners while minimizing torque reaction compared with a standard drill.",
      "Most common models use a 1/4-inch hex interface. An impact driver is not an impact wrench, which normally uses a larger square drive for nuts and bolts, and it should not be treated as the default tool for vehicle lug nuts.",
    ],
    buyingChecks: [
      "Variable speed and enough low-speed control for the fasteners you use",
      "A 1/4-inch hex interface and impact-rated bits or accessories",
      "Noise, weight, lighting, and whether the tool shares your existing batteries",
    ],
    safetyNote:
      "Use only accessories rated for impact use, wear hearing protection when exposure requires it, and stop before repeated impacting strips threads or breaks a fastener.",
  },
  {
    id: "circular-saw",
    name: "Cordless circular saw",
    position: "Buy for straight cuts",
    job: "Straight cuts in lumber and sheet goods",
    buyWhen:
      "Shelves, framing, plywood, fencing, decking, or outdoor projects require repeatable straight cuts.",
    waitWhen:
      "You make only rare cuts that can be safely completed with a borrowed, rented, or shop-cut tool.",
    explanation: [
      "A handheld circular saw is the production cutter in this group. With the correct blade it can crosscut lumber, rip along the grain, and break down sheet goods much faster than a jigsaw.",
      "Blade diameter, arbor, material rating, and maximum rated speed must match the saw. Battery size also matters more here than it does for light fastening because sawing is a higher-demand application.",
    ],
    buyingChecks: [
      "Blade diameter, maximum cutting depth, bevel range, and arbor requirements",
      "Clear sight lines, dependable upper and lower guards, and a stable shoe",
      "Battery capacity, charger time, replacement blades, and tool weight",
    ],
    safetyNote:
      "Check both guards before every cut, support the work so the kerf cannot close on the blade, keep your body out of the blade line, and set cutting depth only slightly beyond the workpiece as directed by the tool manual.",
  },
  {
    id: "jigsaw",
    name: "Cordless jigsaw",
    position: "Buy for curves and cutouts",
    job: "Curved cuts, openings, and detailed shapes",
    buyWhen:
      "You need sink cutouts, panel openings, curves, notches, or shaped work that a circular saw cannot follow.",
    waitWhen:
      "Nearly all of your planned cuts are long and straight, where a circular saw is the better first choice.",
    explanation: [
      "A jigsaw trades straight-line speed for maneuverability. The correct blade lets it cut curves and openings in materials such as wood or metal, subject to the exact saw and blade rating.",
      "Orbital-action settings are model-dependent. More aggressive action generally favors faster cutting, while lower settings favor finer finishes. Blade-shank compatibility also varies, so a blade described as common is not automatically compatible with every jigsaw.",
    ],
    buyingChecks: [
      "Blade-shank type, material-specific blade availability, and tool-free blade changes",
      "Variable speed, orbital settings, bevel capability, and a stable shoe",
      "Dust visibility, vibration, battery fit, and the cut capacity of the exact model",
    ],
    safetyNote:
      "Clamp the work, keep the shoe firmly supported, use a sharp material-appropriate blade that clears the work through its full stroke, and wait for the blade to stop before removing or setting down the saw.",
  },
  {
    id: "oscillating-multi-tool",
    name: "Cordless oscillating multi-tool",
    position: "Buy for repair access",
    job: "Flush cuts, plunge cuts, scraping, grout, and tight spaces",
    buyWhen:
      "Repair and remodeling work repeatedly puts you against trim, flooring, drywall, grout, adhesive, or an obstruction that ordinary saws cannot reach cleanly.",
    waitWhen:
      "You mainly need fast production cutting or large-area sanding, where dedicated tools are more effective.",
    explanation: [
      "The oscillating multi-tool is the problem-solver in the group. With the correct accessory it can make flush or plunge cuts, scrape adhesive, remove grout, and handle smaller sanding work in confined areas.",
      "Accessory fit is a real purchasing constraint. Labels such as universal fit can still exclude certain mounts or require adapters, so physical attachment alone does not establish safe compatibility.",
    ],
    buyingChecks: [
      "The accessory interface and the cost and availability of compatible blades",
      "Variable speed, vibration control, lighting, and tool-free accessory changes",
      "Whether the included accessories actually match wood, metal, grout, or scraping work",
    ],
    safetyNote:
      "Confirm the accessory is rated for the material and mount, remove the battery before changing it, control dust appropriately, and remember that blades, accessories, and workpieces can remain hot after use.",
  },
];

export const projectToolMap = [
  {
    project: "Wall anchors, furniture, and basic repairs",
    startWith: "Drill/driver",
    addWhenNeeded: "Impact driver only for repeated or resistant fastening",
  },
  {
    project: "Shelves, framing, fencing, and decking",
    startWith: "Drill/driver and circular saw",
    addWhenNeeded: "Impact driver for repeated structural fastening",
  },
  {
    project: "Countertop, sink, vent, or panel openings",
    startWith: "Drill/driver and jigsaw",
    addWhenNeeded: "Circular saw when the project also includes long straight cuts",
  },
  {
    project: "Trim, flooring, drywall, grout, and repair access",
    startWith: "Drill/driver and oscillating multi-tool",
    addWhenNeeded: "The saw that matches any larger straight or curved cuts",
  },
];

export const cordlessToolsFaq = [
  {
    question: "Which cordless power tool should a beginner buy first?",
    answer:
      "A cordless drill/driver is the best first purchase for most homeowners because it handles both drilling holes and ordinary screwdriving. Choose a model that feels balanced with the battery installed and has a useful clutch and speed range.",
  },
  {
    question: "Do I need both a drill and an impact driver?",
    answer:
      "Not initially. A drill/driver covers ordinary holes and fasteners. Add an impact driver when you frequently drive long or resistant fasteners and can justify a dedicated 1/4-inch hex fastening tool.",
  },
  {
    question: "Should I buy a circular saw or a jigsaw first?",
    answer:
      "Buy a circular saw first when your projects primarily need straight cuts in lumber or sheet goods. Choose a jigsaw first when the defining work is curves, openings, and detail cuts. They solve different cutting problems.",
  },
  {
    question: "Is 20V MAX automatically more powerful than 18V?",
    answer:
      "No. Voltage naming does not provide a complete cross-brand performance comparison. DEWALT states that 20V MAX refers to maximum initial voltage while nominal voltage is 18V. Compare the exact tool, battery, tested performance, runtime, weight, service, and compatibility instead of the headline number alone.",
  },
  {
    question: "Is a brushless cordless tool worth paying more for?",
    answer:
      "It can be when the exact brushless model shows a useful advantage in manufacturer data or independent testing, but the motor type alone does not guarantee that the entire tool will last longer. Compare the whole tool, battery, warranty, measured performance, service support, and price.",
  },
  {
    question: "How many cordless-tool batteries does a homeowner need?",
    answer:
      "Two compatible packs are a practical starting point for many homeowners because one can charge while the other is used. Capacity should match the work: compact packs keep drills light, while higher-demand saws can benefit from larger compatible packs when the manufacturer permits them.",
  },
  {
    question: "What does bare tool mean?",
    answer:
      "A bare-tool listing normally includes the tool without a battery or charger. It can save money after you already own compatible packs, but it is not a complete starter purchase for someone entering the battery platform.",
  },
  {
    question: "Can cordless batteries and chargers be mixed between brands?",
    answer:
      "Generally no. Use the tool, battery, and charger combinations approved by the manufacturer. Third-party adapters, counterfeit packs, damaged packs, and incorrect chargers can create compatibility and fire hazards.",
  },
  {
    question: "Can an impact driver remove vehicle lug nuts?",
    answer:
      "Do not confuse an impact driver with an impact wrench. Impact drivers commonly use a 1/4-inch hex interface for screws and similar fasteners, while impact wrenches commonly use larger square drives for nuts and bolts. Use the tool and torque procedure specified for the vehicle work.",
  },
  {
    question: "Do cordless power tools last forever?",
    answer:
      "No. Batteries age, accessories wear, and mechanical and electronic components can fail. Correct use, compatible batteries and chargers, maintenance, dry storage, available service, and replaceable parts can improve useful life, but no honest buying guide can promise forever.",
  },
];

export const cordlessToolsSources = [
  {
    label: "Power Tool Institute: General power tool safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_General-Safety.pdf",
  },
  {
    label: "Power Tool Institute: Cordless battery safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_CordlessBatterySafety.pdf",
  },
  {
    label: "Power Tool Institute: Battery adapter safety",
    url: "https://www.powertoolinstitute.com/battery-safety/battery-adapters/",
  },
  {
    label: "Power Tool Institute: Drill and hammer-drill safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_Drillls-HammerDrills-Rotary-Hammers-Hammers-1.pdf",
  },
  {
    label: "Power Tool Institute: Impact driver and impact wrench safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_Impact-Wrenches-Impact-Drivers-1.pdf",
  },
  {
    label: "Power Tool Institute: Circular saw safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_Circular-Saws.pdf",
  },
  {
    label: "Power Tool Institute: Jigsaw and reciprocating-saw safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_Reciprocating-Saber-Saws-Jig-Saws-1.pdf",
  },
  {
    label: "Power Tool Institute: Oscillating multi-tool safety",
    url: "https://www.powertoolinstitute.com/wp-content/uploads/2025/10/PTI_Multi-Tools-Oscillating-Tools-1.pdf",
  },
  {
    label: "U.S. Consumer Product Safety Commission: Product recalls",
    url: "https://www.cpsc.gov/Recalls",
  },
  {
    label: "DEWALT: Cordless battery platforms",
    url: "https://www.dewalt.com/en-us/products/systems/cordless-platforms",
  },
  {
    label: "DEWALT: DCK240C2 drill/driver and impact driver kit",
    url: cordlessToolsGuide.starterKit.manufacturerUrl,
  },
];
