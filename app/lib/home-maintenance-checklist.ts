export const HOME_MAINTENANCE_SLUG = "home-maintenance-checklist";
export const HOME_MAINTENANCE_PUBLISHED_DATE = "2026-09-01";
export const HOME_MAINTENANCE_PUBLISHED_DATE_LABEL = "September 1, 2026";
export const HOME_MAINTENANCE_AFFILIATE_TAG = "pinterest1-2025-20";

export type MaintenanceTask = {
  title: string;
  detail: string;
  scope: "Every home" | "If equipped" | "Climate dependent";
  href?: string;
};

export type MonthlyMaintenancePlan = {
  month: string;
  focus: string;
  summary: string;
  tasks: MaintenanceTask[];
};

export const recurringMaintenanceTasks: MaintenanceTask[] = [
  {
    title: "Test smoke and carbon monoxide alarms",
    detail:
      "Use each alarm's test button once a month. Follow the manufacturer's replacement and battery instructions, and never disable an alarm to stop a nuisance alert.",
    scope: "Every home",
  },
  {
    title: "Inspect the heating or cooling filter",
    detail:
      "Check the filter monthly during heavy-use seasons. Clean a reusable filter or replace a disposable one when dirty, using the size and type specified for the equipment.",
    scope: "If equipped",
  },
  {
    title: "Look for active water and moisture problems",
    detail:
      "Scan beneath sinks, around toilets, near supply hoses, at ceilings, and along basement or crawlspace walls. Fix the water source before treating stains or mold as a surface-only problem.",
    scope: "Every home",
  },
  {
    title: "Clean the dryer lint filter before each load",
    detail:
      "Make this an every-load habit rather than a once-a-month task. A longer drying time is a reason to inspect the exhaust path, not to add more drying time automatically.",
    scope: "If equipped",
    href: "/dryer-not-heating",
  },
  {
    title: "Test GFCI receptacles with their test and reset buttons",
    detail:
      "Follow the device manufacturer's monthly test procedure. Stop using and replace a GFCI that will not trip and reset correctly; do not bypass the protection.",
    scope: "If equipped",
    href: "/breaker-keeps-tripping",
  },
  {
    title: "Test the garage-door auto-reverse feature",
    detail:
      "Use the opener manufacturer's monthly reversal test. Adjust it exactly as instructed or call qualified service if the door does not reverse correctly.",
    scope: "If equipped",
  },
];

export const homeMaintenanceAffiliateKit = [
  {
    name: "HVAC replacement filters",
    reason:
      "Match the exact length, width, depth, and filter type specified for your equipment. A higher rating is not automatically compatible with every system.",
    href: `https://www.amazon.com/s?k=home+HVAC+replacement+air+filter&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
  {
    name: "Indoor digital hygrometers",
    reason:
      "Use measured humidity to investigate condensation and moisture instead of judging the room by feel alone.",
    href: `https://www.amazon.com/s?k=indoor+digital+hygrometer&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
  {
    name: "Refrigerator and freezer thermometers",
    reason:
      "An appliance thermometer verifies whether the refrigerator is at 40°F or below and the freezer is at 0°F or below.",
    href: `https://www.amazon.com/s?k=refrigerator+freezer+appliance+thermometer&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
  {
    name: "Water-leak detector alarms",
    reason:
      "Place suitable alarms near higher-risk plumbing and appliances, following their instructions and without obstructing service access.",
    href: `https://www.amazon.com/s?k=water+leak+detector+alarm&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
  {
    name: "Dryer-vent cleaning kits",
    reason:
      "Choose a kit that fits the accessible duct path. Stop if the duct is crushed, disconnected, damaged, or unsafe to reach.",
    href: `https://www.amazon.com/s?k=dryer+vent+cleaning+kit&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
  {
    name: "Door and window weatherstripping",
    reason:
      "Match the product to the operable joint and required clearance. Do not seal intentional drainage or ventilation openings.",
    href: `https://www.amazon.com/s?k=door+window+weatherstripping&tag=${HOME_MAINTENANCE_AFFILIATE_TAG}`,
  },
];

export const monthlyMaintenancePlans: MonthlyMaintenancePlan[] = [
  {
    month: "January",
    focus: "Heating, vents, and cold-weather leaks",
    summary:
      "Use the first cold stretch to find airflow restrictions and exterior openings while the symptoms are easy to notice.",
    tasks: [
      {
        title: "Check the HVAC filter and supply airflow",
        detail:
          "Replace or clean a dirty filter, then confirm furniture, rugs, and stored items are not blocking supply or return openings.",
        scope: "If equipped",
      },
      {
        title: "Keep combustion and exhaust vents clear",
        detail:
          "After snow, ice, or windblown debris, visually confirm accessible exterior vents are not blocked. Do not climb onto an icy roof.",
        scope: "Climate dependent",
      },
      {
        title: "Map window and door drafts",
        detail:
          "Find the actual leak path before choosing weatherstripping for a moving joint or caulk for a stationary gap.",
        scope: "Every home",
        href: "/stop-drafts-from-windows-without-replacement",
      },
      {
        title: "Test for radon if the home has never been tested",
        detail:
          "EPA recommends that all homes be tested. Retest after relevant renovations or when a previously unused lower level becomes occupied, following EPA test-placement guidance.",
        scope: "Every home",
      },
    ],
  },
  {
    month: "February",
    focus: "Bathroom ventilation and indoor moisture",
    summary:
      "Winter condensation makes this a useful month to verify that moisture is leaving the home instead of collecting on cold surfaces.",
    tasks: [
      {
        title: "Confirm the bathroom fan exhausts outdoors",
        detail:
          "Clean the grille with power off and check that the fan moves air. A running motor is not proof of adequate airflow.",
        scope: "If equipped",
        href: "/fix-noisy-bathroom-exhaust-fan",
      },
      {
        title: "Measure indoor humidity where condensation appears",
        detail:
          "Use a hygrometer instead of guessing. Persistent condensation calls for source control, ventilation, or dehumidification rather than paint alone.",
        scope: "Every home",
        href: "/prevent-bathroom-mold-growth-steps",
      },
      {
        title: "Inspect under-sink plumbing and toilet bases",
        detail:
          "Look for active drips, swollen cabinet material, staining, or a toilet that refills between uses.",
        scope: "Every home",
        href: "/toilet-keeps-running",
      },
      {
        title: "Schedule annual water-heater service",
        detail:
          "Follow the unit's manual and use qualified service for flushing, temperature-and-pressure relief valve checks, combustion work, or any task you cannot perform safely.",
        scope: "If equipped",
        href: "/water-heater-not-providing-hot-water-solutions",
      },
      {
        title: "Run the first six-month electrical safety scan",
        detail:
          "Look for damaged cords, hot or discolored receptacles, loose plugs, overloaded power strips, and extension cords used as permanent wiring. Stop using damaged equipment.",
        scope: "Every home",
        href: "/breaker-keeps-tripping",
      },
    ],
  },
  {
    month: "March",
    focus: "Drainage and spring readiness",
    summary:
      "Check where rainwater is supposed to go before the wettest part of spring arrives in your region.",
    tasks: [
      {
        title: "Clear accessible gutters, downspouts, and drains",
        detail:
          "Remove debris from safely reachable drainage points and verify downspouts discharge away from the foundation. Hire qualified help for unsafe roof access.",
        scope: "If equipped",
      },
      {
        title: "Test the sump pump before storm season",
        detail:
          "Follow the pump manufacturer's test procedure and verify the discharge path is open. Consider backup power where outages and flooding can overlap.",
        scope: "If equipped",
      },
      {
        title: "Book cooling-system service before peak demand",
        detail:
          "ENERGY STAR recommends a professional pre-season cooling check in spring, before contractor schedules fill.",
        scope: "If equipped",
      },
    ],
  },
  {
    month: "April",
    focus: "Cooling equipment and exterior seals",
    summary:
      "Prepare cooling and rain-control systems without opening refrigerant, electrical, or roof systems that need qualified service.",
    tasks: [
      {
        title: "Clear debris around the outdoor HVAC unit",
        detail:
          "With the system off, remove loose leaves and visible obstructions around the unit. Keep airflow clear without bending fins or opening electrical panels.",
        scope: "If equipped",
      },
      {
        title: "Inspect exterior caulk and weatherstripping",
        detail:
          "Look for failed stationary seals around doors and windows. Preserve drainage openings and use weatherstripping, not caulk, on joints that must move.",
        scope: "Every home",
        href: "/stop-drafts-from-windows-without-replacement",
      },
      {
        title: "Check for new roof or ceiling stains after rain",
        detail:
          "Document the location and timing of any stain. Stop the water source before patching or painting the visible surface.",
        scope: "Every home",
      },
    ],
  },
  {
    month: "May",
    focus: "Plumbing leaks and outdoor water",
    summary:
      "Turn seasonal water systems back on carefully and catch small plumbing losses before they become cabinet, floor, or foundation damage.",
    tasks: [
      {
        title: "Open exterior water valves slowly and inspect",
        detail:
          "Check hose connections and the interior side of exterior faucets for leaks after winter. Stop if water appears inside a wall or basement.",
        scope: "Climate dependent",
      },
      {
        title: "Inspect a private well or septic system on its service cycle",
        detail:
          "Private wells need at least annual water testing and a spring mechanical check. Average septic systems need professional inspection at least every three years, with pumping often every three to five years.",
        scope: "If equipped",
      },
      {
        title: "Check faucets and shutoff valves for active leaks",
        detail:
          "Dry the area first, then watch the spout, handles, supply connections, and cabinet floor to separate the leak path.",
        scope: "Every home",
        href: "/fix-leaking-kitchen-faucet-guide",
      },
      {
        title: "Observe one complete toilet fill cycle",
        detail:
          "Confirm the water stops below the overflow tube and the tank does not restart on its own.",
        scope: "Every home",
        href: "/toilet-keeps-running",
      },
    ],
  },
  {
    month: "June",
    focus: "Dryer exhaust and garage fire safety",
    summary:
      "Use the start of summer to clear lint and separate heat sources from stored materials.",
    tasks: [
      {
        title: "Clean and inspect the dryer exhaust path",
        detail:
          "USFA recommends cleaning dryer vent ductwork every year. Confirm the exhaust terminates outdoors and stop using the dryer if the duct is crushed, disconnected, or damaged.",
        scope: "If equipped",
        href: "/dryer-not-heating",
      },
      {
        title: "Clear combustibles from heat-producing equipment",
        detail:
          "Keep boxes, paper, fuel, and other burnable storage away from furnaces, water heaters, dryers, and similar heat sources.",
        scope: "If equipped",
      },
      {
        title: "Store portable fuel outside living areas",
        detail:
          "Use approved containers in a cool, well-ventilated location away from ignition sources. Never store gasoline in the house or basement.",
        scope: "If equipped",
      },
    ],
  },
  {
    month: "July",
    focus: "Cooling performance and food safety",
    summary:
      "Mid-summer loads make temperature and airflow problems easier to measure accurately.",
    tasks: [
      {
        title: "Verify refrigerator and freezer temperatures",
        detail:
          "Use an appliance thermometer. Keep the refrigerator at 40°F or below and the freezer at 0°F or below.",
        scope: "Every home",
        href: "/refrigerator-not-cooling",
      },
      {
        title: "Check cooling airflow before assuming equipment failure",
        detail:
          "Inspect the filter, thermostat setting, open registers, and accessible outdoor airflow before calling a compressor or refrigerant problem.",
        scope: "If equipped",
        href: "/central-air-conditioner-not-cooling-troubleshooting-guide",
      },
      {
        title: "Look for condensate or humidity problems",
        detail:
          "Water around cooling equipment, repeated drain overflow, or indoor humidity that stays high needs diagnosis rather than repeated cleanup.",
        scope: "If equipped",
      },
    ],
  },
  {
    month: "August",
    focus: "Appliances and electrical safety",
    summary:
      "Give high-use appliance connections and household electrical products a deliberate inspection before fall routines begin.",
    tasks: [
      {
        title: "Run a six-month electrical safety check",
        detail:
          "Look for damaged cords, hot or discolored receptacles, loose plugs, overloaded power strips, and extension cords used as permanent wiring. Stop using damaged equipment.",
        scope: "Every home",
        href: "/breaker-keeps-tripping",
      },
      {
        title: "Inspect washer and dishwasher water paths",
        detail:
          "Check accessible supply and drain connections for dampness, abrasion, kinks, or movement. Follow the appliance manual before removing panels.",
        scope: "If equipped",
        href: "/washer-not-draining",
      },
      {
        title: "Clean dishwasher filters and spray paths as specified",
        detail:
          "Use the model's manual. A dirty filter, blocked spray arm, poor loading, and a drain problem require different corrections.",
        scope: "If equipped",
        href: "/why-dishwasher-not-cleaning-properly",
      },
    ],
  },
  {
    month: "September",
    focus: "Heating service and air sealing",
    summary:
      "Prepare heating equipment and the building envelope before the first sustained cold weather.",
    tasks: [
      {
        title: "Book a professional heating-system check",
        detail:
          "ENERGY STAR recommends a pre-season heating check in fall. Combustion, refrigerant, high-voltage, and venting work belong with qualified service.",
        scope: "If equipped",
      },
      {
        title: "Test carbon monoxide alarms and review placement",
        detail:
          "Use the test button, follow the manufacturer's placement instructions, and replace alarms at the specified end of life.",
        scope: "If equipped",
      },
      {
        title: "Repair verified window and door air leaks",
        detail:
          "Use weatherstripping on operable seals and caulk on appropriate stationary gaps. Do not seal intended drainage or ventilation openings.",
        scope: "Every home",
        href: "/stop-drafts-from-windows-without-replacement",
      },
    ],
  },
  {
    month: "October",
    focus: "Leaves, chimneys, and freeze preparation",
    summary:
      "Finish drainage and heating-safety work before leaves, freezing temperatures, and holiday schedules make access harder.",
    tasks: [
      {
        title: "Clear gutters and exterior drains again",
        detail:
          "Remove seasonal debris from safely accessible areas and verify water can move away from the building.",
        scope: "If equipped",
      },
      {
        title: "Have heating equipment and chimneys inspected",
        detail:
          "USFA recommends annual professional cleaning and inspection of heating equipment and chimneys.",
        scope: "If equipped",
      },
      {
        title: "Protect seasonal water systems from freezing",
        detail:
          "Follow local and manufacturer guidance for irrigation, hoses, exterior faucets, vacant properties, and exposed piping.",
        scope: "Climate dependent",
      },
    ],
  },
  {
    month: "November",
    focus: "Cooking, heating clearance, and exterior vents",
    summary:
      "Check the systems that see heavier use when meals, guests, and heating season overlap.",
    tasks: [
      {
        title: "Keep anything that can burn away from heat sources",
        detail:
          "USFA recommends at least 3 feet of clearance around fireplaces, wood stoves, radiators, and space heaters.",
        scope: "If equipped",
      },
      {
        title: "Inspect the oven before heavy cooking",
        detail:
          "Confirm the appliance is clean, stable, and operating normally. If a gas oven glows but does not heat, stop guessing and diagnose the ignition system safely.",
        scope: "If equipped",
        href: "/whirlpool-oven-igniter-glows-but-wont-heat",
      },
      {
        title: "Check accessible exterior exhaust terminations",
        detail:
          "Look for leaf, nest, snow, or debris blockage at dryer, bath, kitchen, and heating vents without entering unsafe roof areas.",
        scope: "If equipped",
      },
    ],
  },
  {
    month: "December",
    focus: "Annual records and deferred repairs",
    summary:
      "Close the year by documenting what was done, what changed, and what needs qualified help next year.",
    tasks: [
      {
        title: "Record alarm ages, filter sizes, and service dates",
        detail:
          "Keep model numbers and dates in one place so replacement intervals and recurring service do not depend on memory.",
        scope: "Every home",
      },
      {
        title: "Repeat a room-by-room water and damage scan",
        detail:
          "Recheck water stains, plumbing connections, cracked finishes, damaged seals, and changes that were easy to miss during the busier seasons.",
        scope: "Every home",
      },
      {
        title: "Create next year's repair list by risk",
        detail:
          "Put active leaks, electrical heat or arcing, combustion concerns, structural damage, and failed safety devices ahead of cosmetic projects.",
        scope: "Every home",
      },
    ],
  },
];

export const homeMaintenanceFaq = [
  {
    question: "What home maintenance should be done every month?",
    answer:
      "Test smoke and carbon monoxide alarms, inspect the HVAC filter during heavy-use seasons, and scan for active leaks or moisture. Clean the dryer lint filter before every load rather than waiting for a monthly reminder.",
  },
  {
    question: "Does every task apply to every home?",
    answer:
      "No. Equipment, climate, building type, lease terms, and manufacturer instructions change the schedule. Tasks are labeled Every home, If equipped, or Climate dependent so you can remove what does not apply.",
  },
  {
    question: "Should the checklist replace an owner's manual or local code?",
    answer:
      "No. The appliance or equipment manual, local code, lease requirements, and qualified professional guidance take priority. This checklist is a planning cadence, not a substitute for model-specific maintenance.",
  },
  {
    question: "Can renters use this checklist?",
    answer:
      "Yes. Renters can perform permitted observation and routine care, test alarms where allowed, and report leaks, electrical symptoms, blocked ventilation, or failed equipment promptly. The lease and property manager determine who performs repairs and scheduled service.",
  },
  {
    question: "How do I print the monthly home maintenance checklist?",
    answer:
      "Use the Print or save as PDF button near the top of the page. The print layout removes site navigation and produces an ungated checklist with boxes for each task.",
  },
];

export const homeMaintenanceSources = [
  {
    label: "U.S. Fire Administration: Smoke alarms",
    url: "https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/",
    supports: "Monthly alarm testing and smoke-alarm replacement guidance.",
  },
  {
    label: "U.S. Fire Administration: Carbon monoxide alarm testing",
    url: "https://www.usfa.fema.gov/gallery/pictographs/pictograph30.html",
    supports: "Monthly carbon monoxide alarm testing.",
  },
  {
    label: "ENERGY STAR: Heating and cooling maintenance checklist",
    url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist",
    supports:
      "Monthly filter checks and professional cooling service in spring and heating service in fall.",
  },
  {
    label: "ENERGY STAR: Clean heating and cooling",
    url: "https://www.energystar.gov/products/energy_star_home_upgrade/clean_heating_cooling",
    supports: "Keeping indoor and outdoor HVAC units clear of debris.",
  },
  {
    label: "U.S. EPA: Mold, moisture, and your home",
    url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
    supports: "Moisture-source control, ventilation, and condensation prevention.",
  },
  {
    label: "U.S. EPA: Main ways to control moisture",
    url: "https://www.epa.gov/mold/what-are-main-ways-control-moisture-your-home",
    supports: "Bathroom and kitchen exhaust, outdoor dryer venting, and leak control.",
  },
  {
    label: "Ready.gov: Flood preparation",
    url: "https://www.ready.gov/floods",
    supports: "Clearing drains and gutters and considering sump-pump backup.",
  },
  {
    label: "U.S. Fire Administration: Basement and garage fire safety",
    url: "https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/basement-and-garage/",
    supports: "Every-load lint-filter cleaning and annual dryer-vent cleaning.",
  },
  {
    label: "U.S. Fire Administration: Heating fire safety",
    url: "https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/heating/",
    supports: "Annual professional chimney inspection and heat-source clearance.",
  },
  {
    label: "U.S. Consumer Product Safety Commission: Home electrical safety checklist",
    url: "https://www.cpsc.gov/s3fs-public/513.pdf",
    supports: "A room-by-room electrical-product review every six months.",
  },
  {
    label: "U.S. Consumer Product Safety Commission: Carbon monoxide alarms",
    url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center/CO-Alarms",
    supports: "Monthly carbon monoxide alarm tests and manufacturer-led placement and replacement.",
  },
  {
    label: "U.S. Consumer Product Safety Commission: Automatic garage-door openers",
    url: "https://www.cpsc.gov/Newsroom/News-Releases/1993/Safety-Commission-Publishes-Final-Rules-For-Automatic-Garage-Door-Openers",
    supports: "Monthly testing of the automatic reversal feature.",
  },
  {
    label: "U.S. EPA: Radon",
    url: "https://www.epa.gov/radon",
    supports: "Testing every home because measurement is the only way to know the radon level.",
  },
  {
    label: "U.S. EPA WaterSense: Home maintenance",
    url: "https://www.epa.gov/watersense/home-maintenance",
    supports: "Regular leak checks, annual water-heater service, and seasonal irrigation care.",
  },
  {
    label: "CDC: Private well-water testing",
    url: "https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html",
    supports: "A spring mechanical check and at least annual private-well water testing.",
  },
  {
    label: "U.S. EPA: Septic-system care",
    url: "https://www.epa.gov/septic/how-care-your-septic-system",
    supports: "Typical professional inspection and pumping intervals for average septic systems.",
  },
  {
    label: "U.S. Department of Energy: Insulation and air sealing",
    url: "https://www.energy.gov/cmei/buildings/articles/energy-efficient-home-improvement-credit-insulation-and-air-sealing",
    supports: "Caulk for stationary cracks and weatherstripping for moving components.",
  },
  {
    label: "CDC: Preventing food poisoning",
    url: "https://www.cdc.gov/food-safety/prevention/index.html",
    supports: "Refrigerator and freezer temperature targets.",
  },
  {
    label: "U.S. Consumer Product Safety Commission: Fuel-container safety",
    url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Fuel-Container-Gasoline-and-Other-Liquid-Fuel-Safety",
    supports: "Safe portable-fuel storage away from living areas and ignition sources.",
  },
];
