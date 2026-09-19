import type { TroubleshootingResource } from "./resources";

export const homeSystemsInspectionResource: TroubleshootingResource = {
  slug: "pre-service-home-hvac-water-heater-inspection",
  reviewedDate: "2026-09-19",
  reviewedDateLabel: "September 19, 2026",
  title: "What I Found Inspecting My AC, Boiler, and Water Heater Before Annual Service",
  metaTitle: "AC, Boiler & Water Heater Pre-Service Inspection",
  metaDescription:
    "A hands-on pre-service inspection of a 2022 Bryant AC, 2023 Crown boiler, and 2017 Bradford White water heater, with original photos, findings, and service questions.",
  eyebrow: "Original field inspection",
  dek:
    "I photographed the accessible parts of three working home systems before their next service visit, recorded what looked normal, found one real maintenance item, and stopped where professional service made more sense.",
  quickAnswer:
    "A useful homeowner inspection does not require opening a gas burner, attaching refrigerant gauges, or crawling into a difficult attic. On this house, the accessible checks documented a mostly clean Bryant condenser, one localized gap in the suction-line insulation, a dry and visually clean Crown hydronic boiler installation, and a 2017 Bradford White water heater whose top fittings showed age but no obvious fresh moisture during a paper-towel check.",
  principle:
    "Inspect what is safely accessible, record what normal looks like, and save refrigerant, combustion, and safety-control work for qualified service.",
  accent: "cobalt",
  steps: [
    {
      title: "Start with the equipment labels",
      detail:
        "Photograph the model and serial labels before drawing conclusions. The labels on these systems established a Bryant 126BNA024-A condenser manufactured in April 2022, a Crown AWR070BNT3SU1 boiler, and a Bradford White RG240S6N water heater.",
    },
    {
      title: "Look for visible changes without opening sealed or hazardous systems",
      detail:
        "Check accessible coils, insulation, piping, valves, vents, discharge tubes, electrical whips, and the floor around the equipment for debris, damaged insulation, moisture, corrosion, or staining. A visual inspection cannot verify refrigerant charge, combustion, internal controls, or hidden tank condition.",
    },
    {
      title: "Document the finding before touching it",
      detail:
        "A close photo of the Bryant suction line showed a localized opening in the black insulation near the condenser. The rest of the exposed insulation looked weathered but generally continuous, so the finding was recorded for the service visit rather than turned into a larger repair project.",
    },
    {
      title: "Use simple checks to separate appearance from an active problem",
      detail:
        "The Bradford White water-heater fittings looked aged and discolored. Wiping around them with a clean white paper towel picked up surface grime but no obvious fresh water, which is more useful than labeling a dry fitting as a leak from appearance alone.",
    },
    {
      title: "Stop where the service boundary is clear",
      detail:
        "The AC and boiler already have professional annual service scheduled. I did not open burner compartments, adjust the boiler feed regulator, operate relief valves for the sake of an article, connect refrigerant gauges, or crawl into a difficult attic just to create content.",
    },
  ],
  sections: [
    {
      kicker: "Central air",
      title: "The AC inspection found one small but real maintenance item",
      paragraphs: [
        "The outdoor unit is a Bryant 126BNA024-A. Its data plate shows an April 2022 manufacture date and R-410A refrigerant. The condenser coil was generally open when photographed, with light debris and cobwebbing concentrated near the lower sections rather than a heavy blanket over the fins.",
        "The useful finding was at the larger insulated refrigerant line near the condenser. A short section of the black foam had opened enough to expose the line beneath it. Farther toward the house, the insulation showed normal outdoor weathering but remained substantially intact. Because the system is already scheduled for annual service, I recorded the damaged area for the technician instead of removing panels or duplicating the professional cleaning.",
        "The indoor air handler is in a difficult attic location. Routine filter access is much easier: a 14 by 24 by 1 filter sits in a hinged return-air grille inside the house. That is a good example of a maintenance plan that respects the actual house instead of assuming every component is convenient to reach.",
      ],
    },
    {
      kicker: "Hydronic heat",
      title: "The boiler inspection became a map of the system",
      paragraphs: [
        "The Crown boiler service tag records a new-boiler installation on October 27, 2023. The equipment label identifies model AWR070BNT3SU1, and the front EnergyGuide label shows an 84 AFUE rating. From the outside, the visible copper and black-iron piping looked clean for its age, with no obvious active seepage or heavy corrosion in the areas photographed.",
        "The inspection identified the Taco 007-F5 circulator that moves boiler water through the hydronic loop, the gray Zilmet Cal-Pro expansion tank, the 30 PSI safety relief valve and its open-ended copper discharge tube, the automatic vent damper, and the Watts boiler-feed/backflow assembly. Those components are far more useful to explain from a real installation than from a generic diagram.",
        "One item remains unresolved: I could not find a readable boiler temperature/pressure gauge from the accessible angles. Crown documentation for the AWR family includes a combination temperature/pressure gauge, so the correct next step is not to assume the installation is wrong. I am simply asking the service technician to show me where the operating pressure and temperature are read on this installation.",
      ],
    },
    {
      kicker: "Domestic hot water",
      title: "The older water heater was dry where it mattered during this check",
      paragraphs: [
        "The water heater is a Bradford White RG240S6N, a 40-gallon natural-gas atmospheric-vent model rated at 40,000 BTU per hour on its label. Its serial number begins PB. Bradford White's date-code chart uses the first character for year and the second for month; in the context of this installed unit, PB corresponds to February 2017.",
        "The hot and cold connections on top show visible age, oxidation, and discoloration. A clean white paper towel wiped around the accessible fittings picked up dry grime and residue but showed no obvious fresh water at the time of inspection. That does not prove the tank or every fitting is leak-free forever. It simply records what was actually observed instead of turning discoloration into a diagnosis.",
        "Dark staining on the basement floor beside the tank came from a known past bathroom leak and is not being attributed to the water heater. That context matters because a photograph without the history could easily lead a reader to the wrong conclusion.",
      ],
    },
    {
      kicker: "Questions for the service visit",
      title: "The inspection produced a better list of questions than a list of repairs",
      paragraphs: [
        "For the AC, I want the technician to inspect the localized suction-line insulation opening and tell me whether the exposed section should be repaired or replaced during service. I also want the normal annual cleaning and operating checks documented rather than repeated as a DIY project beforehand.",
        "For the boiler, I want the technician to identify the temperature/pressure reading point, verify the safety controls and relief system as part of the normal service, and confirm that the visible feed-water and backflow components are operating as intended. Those are service tasks, not settings I plan to change for an article.",
        "For the water heater, I want to know whether it is included in the annual service, whether it has been drained or flushed before and when, whether its anode rod has ever been inspected or replaced, whether the temperature-and-pressure relief valve is checked during service, and whether its current condition suggests planning for replacement. Until the maintenance history is clear, I am not doing an aggressive first-time flush just to produce a how-to.",
      ],
    },
    {
      kicker: "Why this approach matters",
      title: "A maintenance article is more useful when it records the limits too",
      paragraphs: [
        "Nothing in this inspection proves refrigerant charge, combustion quality, flue draft, boiler operating pressure, or the internal condition of a water-heater tank. Those require the proper access, instruments, procedures, and in some cases professional training. The useful homeowner work was identifying equipment, documenting accessible condition, finding visible changes, and knowing what to hand off.",
        "These photos now create a baseline. If corrosion, insulation damage, seepage, noise, or other visible conditions change later, there is a dated reference showing what the same equipment looked like in September 2026. I will update this article after the scheduled service with the technician's findings rather than rewriting today's observations as if they were already confirmed.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I need to open my AC condenser to inspect it?",
      answer:
        "Not for the checks documented here. I photographed the exterior coil, line insulation, service connections, electrical whip, and surrounding area without removing a panel. The system already has professional service scheduled.",
    },
    {
      question: "Is discolored copper around a water heater automatically a leak?",
      answer:
        "No. Discoloration can remain after old moisture, flux, oxidation, or ordinary aging. On this tank, the fittings looked aged but a clean paper-towel check found no obvious fresh water at the time of inspection.",
    },
    {
      question: "Should I operate a boiler relief valve just to test it myself?",
      answer:
        "This article does not recommend operating safety valves merely for documentation. The boiler already has scheduled professional service, so the relief valve and related safety checks are being left to that visit.",
    },
    {
      question: "Why not flush the 2017 water heater now?",
      answer:
        "Its maintenance history is uncertain. Before turning a nearly decade-old tank with unknown prior service into a first-time flushing experiment, I want the service technician to confirm whether it has been flushed before and assess its present condition.",
    },
  ],
  sources: [
    {
      label: "Bryant: Maintaining your Bryant system",
      url: "https://www.bryant.com/en/us/before-you-buy/servicing-your-system/",
    },
    {
      label: "Bryant: HVAC air filters",
      url: "https://www.bryant.com/en/us/current-owners/air-filters/",
    },
    {
      label: "Crown Boiler: Aruba 5 (AWR) documentation",
      url: "https://www.crownboiler.com/",
    },
    {
      label: "Taco Comfort Solutions: Model 007 cartridge circulator",
      url: "https://www.tacocomfort.com/documents/FileLibrary/Model-007-Cartridge-Circulator_Submittal_101-029.pdf",
    },
    {
      label: "Watts: BD911 combination fill valve and backflow preventer",
      url: "https://www.watts.com/products/plumbing-flow-control-solutions/hydronic-steam-heating/boiler-feed-water-pressure-regulators/bd911",
    },
    {
      label: "Zilmet: Cal-Pro hydronic expansion tank catalog",
      url: "https://zilmetusa.com/wp-content/uploads/2026/01/2025-Catalog.pdf",
    },
    {
      label: "Bradford White: Serial-number date-code chart",
      url: "https://www.bradfordwhite.com/bw-faq/how-to-read-the-serial-number-date-code-reference-chart/",
    },
    {
      label: "Bradford White: Atmospheric-vent gas water-heater technical documents",
      url: "https://forthepro.bradfordwhite.com/documentation/usa-en/residential/tank-type-gas/",
    },
  ],
  relatedSlugs: [
    "whirlpool-oven-igniter-glows-but-wont-heat",
    "air-purifier-cadr-room-size-guide",
    "stop-drafts-from-windows-without-replacement",
  ],
};
