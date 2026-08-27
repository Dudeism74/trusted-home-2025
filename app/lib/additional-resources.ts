import type { TroubleshootingResource } from "./resources";

export const additionalResources: TroubleshootingResource[] = [
  {
    slug: "refrigerator-not-cooling",
    title: "Refrigerator Not Cooling? Diagnose the Problem Before Food Spoils",
    metaTitle: "Refrigerator Not Cooling: What to Check First",
    metaDescription:
      "Troubleshoot a refrigerator that is not cooling by checking temperature, power, controls, airflow, door sealing, condenser guidance, and food safety before replacing parts.",
    eyebrow: "Refrigerator cooling troubleshooting",
    dek: "A warm refrigerator can come from a control setting, blocked airflow, a power problem, a door issue, or a refrigeration-system fault. Separate those paths before replacing parts.",
    quickAnswer:
      "First verify the refrigerator is actually above 40°F with an appliance thermometer. Confirm it has power, the controls are set for cooling, the doors close fully, and food is not blocking internal air vents. If your owner's manual calls for condenser cleaning, unplug the refrigerator before cleaning it. If the unit has power and proper settings but temperatures keep rising, limit door opening and arrange service. Perishable food held above 40°F for more than two hours should be treated as a food-safety problem, not just an appliance problem.",
    principle:
      "Cooling failure is a system problem until proven otherwise. Verify temperature, power, controls, airflow, and heat rejection before condemning a compressor or control board.",
    accent: "cobalt",
    steps: [
      {
        title: "Measure the temperature instead of judging by touch",
        detail:
          "Use an appliance thermometer and confirm whether the fresh-food compartment is staying at 40°F or below. A measured temperature gives you a baseline and tells you how urgent the food-safety decision is.",
      },
      {
        title: "Confirm power and cooling controls",
        detail:
          "Check whether interior lights or the display work, confirm the refrigerator is not in demo or cooling-off mode, and verify the temperature controls have not been changed. After a power interruption, some models delay compressor restart.",
      },
      {
        title: "Inspect the airflow path",
        detail:
          "Move tall containers or packed food away from supply and return vents. Cold air has to circulate between compartments. A refrigerator can run and still cool poorly when the internal air path is blocked.",
      },
      {
        title: "Check doors and model-specific condenser maintenance",
        detail:
          "Make sure the doors close squarely and the gaskets are clean and contacting the cabinet. If the owner's manual says the condenser requires cleaning, unplug the refrigerator before doing so. Many newer refrigerators use condensers that are not intended for routine homeowner cleaning.",
      },
      {
        title: "Escalate when the basic systems check out",
        detail:
          "If power, settings, doors, airflow, and required maintenance are correct but the temperature keeps rising, the fault may be in a fan, sensor, defrost system, sealed refrigeration circuit, compressor, or control. That is the point to use model diagnostics or qualified service rather than guessing at expensive parts.",
      },
    ],
    sections: [
      {
        kicker: "Food safety comes first",
        title: "A cooling failure has a clock attached to it",
        paragraphs: [
          "FoodSafety.gov recommends keeping a refrigerator at 40°F or below. During a power outage, an unopened refrigerator can generally keep food cold for about four hours. Perishable food that has been above 40°F for two hours or more should be discarded, with a shorter one-hour limit when ambient temperatures exceed 90°F.",
          "Do not repeatedly open the doors while troubleshooting. Every inspection dumps cold air and shortens the time available to protect the food. If the problem cannot be corrected quickly, move perishables to a cooler with enough ice or gel packs to hold 40°F or below.",
        ],
      },
      {
        kicker: "Airflow is easy to overlook",
        title: "A running refrigerator can still be starved for circulation",
        paragraphs: [
          "GE specifically lists blocked internal airflow as a cause of poor cooling. Large containers pushed against rear vents can keep cold air from reaching the rest of the compartment. Frost around an evaporator cover, a non-running fan, or a door that never fully closes can create a similar symptom but require different repairs.",
          "This is why 'the compressor is running' is not enough evidence to condemn or clear the refrigeration system. The machine also needs air movement through the evaporator section and a way to reject heat at the condenser.",
        ],
      },
      {
        kicker: "Know the service boundary",
        title: "Do not open the sealed refrigeration circuit as a diagnostic shortcut",
        paragraphs: [
          "Refrigerant pressure, sealed-system leaks, compressor faults, and many control-board diagnoses require tools and procedures beyond a basic homeowner check. If the simple external checks are good and the temperature still climbs, model-specific diagnostics and qualified service are more reliable than swapping parts based on symptoms alone.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is my refrigerator running but not getting cold?",
        answer:
          "Possible causes include blocked airflow, a door that is not sealing, a fan problem, a defrost-system issue, a sensor or control problem, or a sealed-system fault. Confirm temperature, settings, airflow, and doors before assuming the compressor has failed.",
      },
      {
        question: "Should I clean the condenser coils?",
        answer:
          "Only if your model's owner's manual calls for it. GE notes that many refrigerators manufactured since 2001 use condenser locations that do not require routine cleaning. Unplug the refrigerator before any cleaning or maintenance near electrical components.",
      },
      {
        question: "How long is food safe if the refrigerator stops cooling?",
        answer:
          "During a power outage, FoodSafety.gov says an unopened refrigerator generally keeps food cold for about four hours. Food that has been above 40°F for two hours or more may be unsafe, so use an appliance thermometer and follow food-safety guidance rather than relying on smell or taste.",
      },
    ],
    sources: [
      {
        label: "GE Appliances: Refrigerator not cooling enough",
        url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=21185",
      },
      {
        label: "FoodSafety.gov: Food safety in a disaster or emergency",
        url: "https://www.foodsafety.gov/keep-food-safe/food-safety-in-disaster-or-emergency",
      },
    ],
    relatedSlugs: [
      "air-purifier-cadr-room-size-guide",
      "central-air-conditioner-not-cooling-troubleshooting-guide",
    ],
  },
  {
    slug: "toilet-keeps-running",
    title: "Toilet Keeps Running? Find Where the Water Is Going",
    metaTitle: "Toilet Keeps Running: Flapper, Fill Valve, or Overflow?",
    metaDescription:
      "Diagnose a toilet that keeps running by checking the flapper seal, tank water level, overflow tube, chain, fill valve, and hidden tank-to-bowl leakage.",
    eyebrow: "Running toilet troubleshooting",
    dek: "A running toilet is usually a leak path or a level-control problem. Watch what the tank is doing before replacing a valve.",
    quickAnswer:
      "Remove the tank lid and observe the water after a flush. If water keeps entering the overflow tube, the fill level or fill valve is the first suspect. If the tank reaches its normal level but water still leaks into the bowl, test the flapper or flush-valve seal with food coloring. Also check that the chain has enough slack to let the flapper seat completely. Shut off the toilet's supply valve if water is rising toward the top of the tank or a failed valve will not stop filling.",
    principle:
      "Separate a level-control failure from a sealing failure. Both waste water, but they happen on opposite sides of the tank's control loop.",
    accent: "aqua",
    steps: [
      {
        title: "Watch the tank after a normal flush",
        detail:
          "Do not touch anything at first. See whether the water level stabilizes below the overflow tube or keeps climbing into it. Continuous flow into the overflow points toward fill-valve or level adjustment rather than the flapper alone.",
      },
      {
        title: "Check the flapper and chain",
        detail:
          "Make sure the lift chain is not holding the flapper slightly open and is not so loose that it tangles underneath. Look for mineral buildup, warping, or deterioration on the sealing surface.",
      },
      {
        title: "Use a dye test for a quiet leak",
        detail:
          "Place a few drops of food coloring in the tank and wait without flushing. If color appears in the bowl, water is crossing the flush-valve seal even if you cannot hear it.",
      },
      {
        title: "Verify the fill level",
        detail:
          "The fill valve should stop before water continuously enters the overflow tube. Follow the toilet or fill-valve manufacturer's adjustment instructions rather than bending or forcing parts that are not designed for it.",
      },
      {
        title: "Replace the failed service part, not the whole toilet by default",
        detail:
          "Flappers, seals, and fill valves are common service parts. Match the replacement to the toilet model or bring the old part for comparison when possible. Replace the whole toilet only when the fixture itself is damaged, obsolete, or replacement makes more sense for other reasons.",
      },
    ],
    sections: [
      {
        kicker: "The tank tells you the failure mode",
        title: "Overflow and seepage are two different problems",
        paragraphs: [
          "If the tank level rises until water spills into the overflow tube, the toilet is receiving more water than the fill-control system is stopping. If the tank reaches the correct level and then slowly loses water into the bowl, the leak is more likely across the flapper or flush-valve seal.",
          "Those symptoms can sound similar because the fill valve may cycle periodically in either case. Watching the tank between cycles is more useful than replacing the fill valve simply because it is the part making noise.",
        ],
      },
      {
        kicker: "A small leak adds up",
        title: "Running toilets are worth fixing even when they still flush",
        paragraphs: [
          "EPA WaterSense identifies worn toilet flappers as a common household leak. The agency recommends a simple dye test because a tank-to-bowl leak can be nearly silent while still wasting water. EPA also reports that easily corrected household leaks can reduce water bills by about 10 percent when repaired.",
        ],
      },
      {
        kicker: "Know when to stop",
        title: "A cracked tank or uncontrolled supply leak is not a flapper job",
        paragraphs: [
          "If water is escaping onto the floor, the tank is cracked, the supply stop will not close, or a connection begins spraying while you work, stop the repair and control the water supply. A running toilet is normally low risk; uncontrolled water outside the fixture is a property-damage problem.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I know if the flapper is leaking?",
        answer:
          "Put a few drops of food coloring in the tank and wait without flushing. If color appears in the bowl, water is leaking from the tank into the bowl and the flapper or flush-valve sealing surface should be inspected.",
      },
      {
        question: "Why does my toilet run every few minutes instead of constantly?",
        answer:
          "Intermittent refilling often means the tank is slowly losing water into the bowl. Once the level drops far enough, the fill valve opens to restore it. A flapper or flush-valve seal is a common cause.",
      },
      {
        question: "Can I replace just the flapper or fill valve?",
        answer:
          "Usually, yes. They are common service parts. Match the replacement to the toilet or valve design and follow the manufacturer's instructions.",
      },
    ],
    sources: [
      {
        label: "U.S. EPA WaterSense: Fix a Leak Week",
        url: "https://www.epa.gov/watersense/fix-leak-week",
      },
      {
        label: "U.S. EPA WaterSense: Home maintenance",
        url: "https://www.epa.gov/watersense/home-maintenance",
      },
    ],
    relatedSlugs: [
      "fix-leaking-kitchen-faucet-guide",
      "water-heater-not-providing-hot-water-solutions",
    ],
  },
  {
    slug: "dryer-not-heating",
    title: "Dryer Runs but Does Not Heat? Check Power and Airflow First",
    metaTitle: "Dryer Not Heating: Power, Settings, Vent, or Heater?",
    metaDescription:
      "Troubleshoot an electric dryer that runs but does not heat by checking the 240V circuit, cycle settings, airflow, vent restriction, and service symptoms safely.",
    eyebrow: "Electric dryer troubleshooting",
    dek: "An electric dryer can tumble on partial power and still have no heat. Verify the supply and airflow before blaming the heating element.",
    quickAnswer:
      "For an electric dryer that tumbles but does not heat, first confirm the cycle is not Air Fluff or another no-heat setting. Then fully reset the dryer's double-pole breaker by switching it off and back on. An electric dryer can sometimes run its motor on 120V while losing the other leg needed for 208/240V heating. Clean the lint filter and make sure the exhaust path is not crushed or blocked. If the breaker trips again, the cord or outlet shows heat damage, or there is a burning smell, stop using the dryer and have the electrical fault inspected.",
    principle:
      "Tumbling proves the motor circuit can run. It does not prove the heater has the full supply voltage or the airflow needed to operate safely.",
    accent: "coral",
    steps: [
      {
        title: "Confirm the selected cycle calls for heat",
        detail:
          "Check the temperature and cycle selections. Air Fluff, cool-down, and some delicate settings can create a no-heat complaint even when the machine is operating normally.",
      },
      {
        title: "Reset the two-pole dryer breaker once",
        detail:
          "GE notes that an electric dryer may tumble with only 120V present but needs the full 208/240V supply to heat. Move the dryer's breaker fully off and then back on. If it trips again, do not keep resetting it.",
      },
      {
        title: "Check the lint filter and exhaust path",
        detail:
          "Clean the lint filter and inspect the accessible vent for crushing or restriction. Verify the exterior vent opens while the dryer runs. Restricted airflow lengthens drying time and can create dangerous heat buildup.",
      },
      {
        title: "Separate no heat from weak drying",
        detail:
          "If the drum never warms, focus on supply voltage, controls, thermal protection, and the heating circuit. If it warms but clothes take much longer than normal, airflow restriction is more likely and should be corrected before replacing heat components.",
      },
      {
        title: "Stop at damaged wiring or repeated tripping",
        detail:
          "A burned plug, scorched receptacle, damaged cord, repeated breaker trip, or burning odor is not a continue-testing condition. Disconnect the appliance if it can be done safely and use qualified service or an electrician as appropriate.",
      },
    ],
    sections: [
      {
        kicker: "Partial power is a real failure mode",
        title: "The drum can turn even when the heater does not have full voltage",
        paragraphs: [
          "GE explains that an electric dryer may operate with a partial 120V supply while the heating system requires a dedicated 208/240V supply. That makes a partially tripped double-pole breaker a useful first check when the symptom is 'runs normally but no heat.'",
          "A one-time breaker reset is different from repeatedly resetting a breaker that trips again. Repeated tripping is evidence of an unresolved overload, short, appliance fault, or wiring problem and deserves diagnosis rather than persistence.",
        ],
      },
      {
        kicker: "Airflow is also a safety system",
        title: "A heating dryer still needs a clear exhaust path",
        paragraphs: [
          "The U.S. Fire Administration advises cleaning the lint filter, checking that the vent behind the dryer is not damaged, crushed, or restricted, and confirming the exterior vent opens during operation. Poor airflow can make a dryer seem weak while also increasing fire risk.",
          "If a dryer heats but drying time has steadily increased, solve the airflow problem before assuming the heater is weak. A restricted system keeps moisture and heat in the machine instead of moving them outdoors.",
        ],
      },
      {
        kicker: "Do not turn diagnosis into live electrical work",
        title: "Internal heater and terminal-block testing has a higher safety boundary",
        paragraphs: [
          "Heating elements, thermal devices, relays, terminal blocks, and supply conductors can require electrical measurements and disassembly. If the external checks do not resolve the problem, model-specific service information and safe electrical isolation are more appropriate than probing energized dryer circuits without the training and equipment to do so.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a dryer run on 120 volts but not heat?",
        answer:
          "An electric 208/240V dryer can sometimes tumble when one supply leg is missing, while the heating circuit cannot operate normally. That is why a fully reset double-pole breaker is an important first check.",
      },
      {
        question: "Can a clogged vent make a dryer stop heating?",
        answer:
          "A restriction can reduce drying performance and contribute to overheating or protective-device operation. Regardless of whether it is the sole cause, a crushed or blocked dryer exhaust is a safety issue that should be corrected.",
      },
      {
        question: "Should I keep resetting the breaker if the dryer trips it?",
        answer:
          "No. A breaker that trips again is reporting an unresolved condition. Stop using the dryer and have the appliance or circuit diagnosed.",
      },
    ],
    sources: [
      {
        label: "GE Appliances: Electric dryer runs but does not heat",
        url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16921",
      },
      {
        label: "U.S. Fire Administration: Clothes dryer fire safety",
        url: "https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf",
      },
    ],
    relatedSlugs: [
      "breaker-keeps-tripping",
      "washer-not-draining",
    ],
  },
  {
    slug: "breaker-keeps-tripping",
    title: "Circuit Breaker Keeps Tripping? Treat the Trip as Evidence",
    metaTitle: "Breaker Keeps Tripping: Overload, Short, Arc, or Ground Fault?",
    metaDescription:
      "Troubleshoot a breaker that keeps tripping by separating overloads, appliance faults, short circuits, arc faults, and ground faults without bypassing protection.",
    eyebrow: "Electrical circuit troubleshooting",
    dek: "A breaker is a protective device, not an inconvenience to defeat. What was running when it opened is the first useful clue.",
    quickAnswer:
      "If a breaker trips repeatedly, stop resetting it blindly. Unplug or switch off loads on that circuit, identify what was running when the trip occurred, and reset the breaker once only after obvious loads are removed. If it holds until a particular appliance is reconnected, the appliance or its load may be involved. If it trips with loads disconnected, will not reset, smells hot, buzzes, shows discoloration, or is an AFCI/GFCI reporting repeated faults, stop and have the circuit inspected by a qualified electrician. Never replace a breaker with a larger amp rating to stop nuisance trips.",
    principle:
      "The trip is data. Removing the protection or increasing its rating erases the symptom while leaving the hazard in place.",
    accent: "lime",
    steps: [
      {
        title: "Identify the affected circuit and recent load",
        detail:
          "Note which rooms, receptacles, lights, or appliances lost power and what had just started or been added. Portable heaters, hair dryers, microwaves, kettles, and other high-current loads can expose an overloaded branch circuit quickly.",
      },
      {
        title: "Remove plug-in loads before one controlled reset",
        detail:
          "Unplug portable loads on the affected circuit. Move the breaker fully to OFF, then back to ON. If it trips immediately with loads removed, stop. That points away from a simple plug-in overload and toward wiring, a fixed appliance, or the protective device itself.",
      },
      {
        title: "Reconnect loads one at a time only if the circuit is stable",
        detail:
          "If the breaker holds with loads removed, reconnect normal loads individually. A repeatable trip when one appliance is used is useful evidence. Stop using that appliance until its condition and the circuit demand are understood.",
      },
      {
        title: "Respect AFCI and GFCI trips",
        detail:
          "Arc-fault and ground-fault breakers respond to hazards beyond simple overcurrent. ESFI contractor data shows many AFCI trips are associated with actual arc-fault conditions. Do not assume the protective device is defective because it trips.",
      },
      {
        title: "Escalate on heat, odor, arcing, or repeated unexplained trips",
        detail:
          "A hot panel, burning smell, sizzling or buzzing, visible arcing, damaged receptacle, water intrusion, or breaker that will not remain reset warrants prompt professional inspection. Do not remove panel covers or work on energized conductors as a homeowner troubleshooting step.",
      },
    ],
    sections: [
      {
        kicker: "Protection is supposed to interrupt faults",
        title: "Repeated resetting is not a repair",
        paragraphs: [
          "The U.S. Consumer Product Safety Commission advises investigating why a fuse blows or breaker trips instead of simply resetting it. Common explanations include too many loads, a malfunctioning product, or a short circuit. A properly sized breaker protects wiring from carrying more current than the circuit is designed to handle.",
          "That is also why installing a larger breaker is not an acceptable shortcut. Breaker size has to match the circuit conductors and equipment requirements. Upsizing protection without verifying the circuit can let wiring overheat before the breaker opens.",
        ],
      },
      {
        kicker: "Modern breakers see more than overload",
        title: "AFCI and GFCI trips can reveal faults a standard breaker would miss",
        paragraphs: [
          "ESFI's 2025 contractor survey found that 37 percent of surveyed electrical service calls involved tripped breakers or fuses. Among AFCI-related trip calls, 84 percent were attributed to arc faults; other reported causes included short circuits, overloaded circuits, and defective interrupters.",
          "The practical lesson is not that every trip proves dangerous wiring. It is that the breaker type matters. A repeatable AFCI or GFCI trip should be diagnosed according to what that device is designed to detect rather than treated as generic nuisance tripping.",
        ],
      },
      {
        kicker: "The homeowner boundary is clear",
        title: "Observation and load isolation are useful; live panel work is not",
        paragraphs: [
          "A homeowner can safely gather valuable information by identifying the circuit, removing plug-in loads, noting which device triggers the trip, and observing heat or odor without opening the panel. Removing the dead front, measuring live bus voltage, changing conductor terminations, or replacing protection is electrical work with much higher shock and arc-flash risk.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does my breaker trip when I use two appliances at once?",
        answer:
          "The combined load may exceed what the branch circuit is designed to carry, especially with high-wattage heating appliances. Move loads only if the circuits and appliance instructions allow it; do not install a larger breaker as a workaround.",
      },
      {
        question: "What if the breaker trips with everything unplugged?",
        answer:
          "Stop resetting it. The fault may be in fixed wiring, a hardwired appliance, the breaker, or another part of the circuit that is not isolated by unplugging portable loads. A qualified electrician should inspect it.",
      },
      {
        question: "Does a tripping AFCI mean the AFCI is bad?",
        answer:
          "Not necessarily. AFCIs are designed to detect arcing conditions. ESFI contractor surveys have found real arc faults among AFCI trip calls, so the cause should be investigated before blaming the protective device.",
      },
    ],
    sources: [
      {
        label: "Electrical Safety Foundation International: 2025 AFCI and GFCI performance survey",
        url: "https://www.esfi.org/2025-afci-and-gfci-performance-survey/",
      },
      {
        label: "U.S. Consumer Product Safety Commission: Circuit breaker safety guidance",
        url: "https://www.cpsc.gov/Newsroom/News-Releases/1983/Commission-Closes-Investigation-Of-FPE-Circuit-Breakers-And-Provides-Safety-Information-For-Consumers",
      },
    ],
    relatedSlugs: [
      "dryer-not-heating",
      "water-heater-not-providing-hot-water-solutions",
    ],
  },
  {
    slug: "central-air-conditioner-not-cooling-troubleshooting-guide",
    title: "Central Air Conditioner Not Cooling? Check Airflow Before Refrigerant",
    metaTitle: "Central AC Not Cooling: Airflow, Thermostat, Coil, or Refrigerant?",
    metaDescription:
      "Troubleshoot a central air conditioner that runs but does not cool by checking thermostat mode, filter airflow, outdoor unit operation, coils, and service symptoms.",
    eyebrow: "Central AC troubleshooting",
    dek: "Poor cooling can come from control settings, restricted airflow, dirty heat-transfer surfaces, outdoor-unit failure, or refrigerant problems. Start with what you can verify safely.",
    quickAnswer:
      "Set the thermostat to COOL and below room temperature, then confirm the indoor blower and outdoor unit are operating. Inspect the return-air filter and replace or clean it if needed. Make sure supply and return registers are open and unobstructed. If airflow is weak, ice is forming, the outdoor unit is not running, a breaker trips, or the system still cannot pull the house temperature down, stop cycling it and schedule HVAC service. Refrigerant charge and sealed-system work are not homeowner adjustments.",
    principle:
      "Cooling depends on both refrigeration and airflow. A refrigerant diagnosis made before checking airflow is incomplete.",
    accent: "aqua",
    steps: [
      {
        title: "Verify the thermostat is actually calling for cooling",
        detail:
          "Confirm COOL mode, a setpoint below room temperature, and normal thermostat power. If the thermostat uses batteries, check them according to the manufacturer's instructions.",
      },
      {
        title: "Check the air filter and registers",
        detail:
          "ENERGY STAR recommends inspecting, cleaning, or changing HVAC filters regularly. A loaded filter restricts airflow. Verify return grilles and supply registers are not blocked by furniture, rugs, or closed dampers.",
      },
      {
        title: "Observe indoor and outdoor operation",
        detail:
          "Listen for the indoor blower and check whether the outdoor condenser starts. Do not remove electrical panels. A system with an indoor fan but no outdoor operation has a different fault path from a system where both run but cooling is weak.",
      },
      {
        title: "Look for ice and obvious coil blockage",
        detail:
          "Ice on the refrigerant line or evaporator area can be associated with airflow or refrigeration problems. Heavy debris around the outdoor coil also reduces heat transfer. Turn the system off if it is icing and arrange diagnosis rather than forcing it to continue.",
      },
      {
        title: "Escalate refrigerant, capacitor, compressor, and electrical faults",
        detail:
          "ENERGY STAR places refrigerant-level checks and blower adjustments in the professional maintenance checklist. Repeated breaker trips, a non-starting outdoor unit, damaged wiring, or continuing poor cooling after basic airflow checks should be serviced professionally.",
      },
    ],
    sections: [
      {
        kicker: "Airflow changes the whole refrigeration system",
        title: "A dirty filter can create more than a comfort problem",
        paragraphs: [
          "ENERGY STAR lists filter maintenance, clean evaporator and condenser coils, correct refrigerant level, and proper blower airflow as core cooling-system maintenance. The agency notes that airflow problems can reduce system efficiency by up to 15 percent.",
          "Low airflow can also make evaporator temperatures fall enough for condensation to freeze on the coil. That is why an iced system should not be treated as proof that it simply needs more refrigerant.",
        ],
      },
      {
        kicker: "Seasonal demand is predictable",
        title: "Cooling-failure searches surge when the weather puts every system under load",
        paragraphs: [
          "Google Trends-derived 2026 datasets show AC repair interest climbing sharply through spring and peaking in summer. That seasonality matches the physical load on residential cooling equipment: the first long heat waves expose weak airflow, dirty coils, electrical starting problems, and refrigeration faults that were less obvious in mild weather.",
          "For troubleshooting, the seasonal pattern does not change the diagnostic order. It makes early filter and coil maintenance more valuable because service availability is usually worst when cooling demand is highest.",
        ],
      },
      {
        kicker: "Refrigerant is not a consumable setting",
        title: "Low charge means the system needs a reason, not just refrigerant",
        paragraphs: [
          "A properly sealed air-conditioning system does not use refrigerant like fuel. If charge is low, the system needs diagnosis for leakage or another service condition. Refrigerant handling and charging require the right equipment and regulatory compliance, so they belong beyond the basic homeowner checklist.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is my central AC running but not cooling the house?",
        answer:
          "Common paths include a dirty filter, blocked airflow, dirty coils, an outdoor-unit problem, thermostat or control issues, or a refrigeration fault. Check the thermostat, filter, registers, and whether both indoor and outdoor units operate before assuming the refrigerant is low.",
      },
      {
        question: "Should I turn the AC off if the line is frozen?",
        answer:
          "Yes. Continuing to operate an iced system can worsen the condition. Turn cooling off, correct an obvious airflow restriction such as a clogged filter if safe to do so, and have the system diagnosed if icing returns.",
      },
      {
        question: "Can I add refrigerant myself if the AC is not cold?",
        answer:
          "That is not a recommended homeowner troubleshooting step. Correct charge depends on the system and operating conditions, and low refrigerant can indicate a leak that needs diagnosis rather than topping off.",
      },
    ],
    sources: [
      {
        label: "ENERGY STAR: Heating and cooling maintenance checklist",
        url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist",
      },
    ],
    relatedSlugs: [
      "refrigerator-not-cooling",
      "stop-drafts-from-windows-without-replacement",
      "air-purifier-cadr-room-size-guide",
    ],
  },
  {
    slug: "water-heater-not-providing-hot-water-solutions",
    title: "No Hot Water? Separate the Water, Power, and Heat Source",
    metaTitle: "No Hot Water: Electric and Gas Water Heater Checks",
    metaDescription:
      "Troubleshoot no hot water by confirming the scope of the problem, water supply, electric breaker or gas status, temperature controls, and when service is required.",
    eyebrow: "Water heater troubleshooting",
    dek: "Before replacing a water heater, determine whether the problem is at one fixture, the whole hot-water system, the energy supply, or the heater itself.",
    quickAnswer:
      "First test more than one hot-water fixture. If only one faucet or shower is affected, the problem may be local to that fixture rather than the water heater. If the whole home has no hot water, verify the water heater has water supply and energy. For an electric tank heater, check whether its dedicated breaker has tripped and reset it once. For gas equipment, do not attempt combustion troubleshooting if you smell gas, see soot, or have a carbon-monoxide alarm. If power or fuel is present but there is still no hot water, internal thermostats, high-limit protection, heating elements, ignition, or controls may require model-specific service.",
    principle:
      "No hot water is not a component diagnosis. First prove whether the failure is local plumbing, energy supply, temperature control, or heat generation.",
    accent: "coral",
    steps: [
      {
        title: "Check more than one fixture",
        detail:
          "Test hot water at a second sink or tub. A single-fixture problem can come from a cartridge, mixing valve, aerator, or local plumbing and should not send you directly to the water heater.",
      },
      {
        title: "Verify the heater has water and energy",
        detail:
          "Confirm the water supply valves are in their normal positions. For an electric heater, inspect the dedicated breaker and reset it once if tripped. If it trips again, stop. For gas equipment, follow the manufacturer's status and ignition guidance without bypassing safety controls.",
      },
      {
        title: "Separate no hot water from not enough hot water",
        detail:
          "Completely cold water points toward a different set of faults than water that starts hot and quickly becomes lukewarm. Tank capacity, simultaneous use, one failed electric element, thermostat settings, or a mixing issue can cause limited hot water without a total loss.",
      },
      {
        title: "Look for leak or safety evidence",
        detail:
          "Water around the tank, corrosion, a relief-valve discharge, burned electrical odor, soot, gas odor, or a carbon-monoxide alarm changes the priority from comfort to safety. Control the appropriate utility only if it can be done safely and obtain qualified service.",
      },
      {
        title: "Use model-specific diagnostics for internal faults",
        detail:
          "A.O. Smith lists no power, tripped high-limit protection, heating elements, thermostats, and installation or plumbing issues among electric no-hot-water paths. Internal testing can involve high voltage and should follow the manufacturer procedure and proper lockout practices.",
      },
    ],
    sections: [
      {
        kicker: "Scope the failure first",
        title: "One cold shower does not prove the water heater failed",
        paragraphs: [
          "A shower mixing cartridge can fail while every sink still produces normal hot water. Conversely, if every hot-water fixture is cold, the probability shifts toward the heater, its energy source, or a whole-system plumbing issue. Checking another fixture takes less than a minute and prevents a large diagnostic detour.",
        ],
      },
      {
        kicker: "Electric heaters need both power and working heat controls",
        title: "A tripped breaker is a clue, not the end of the diagnosis",
        paragraphs: [
          "A.O. Smith's residential electric troubleshooting material lists no electrical power and tripped energy-cutoff protection among common reasons for no hot water. It also provides separate procedures for thermostats and heating elements, which reinforces that a cold tank can have several electrical causes.",
          "Reset a tripped breaker once only after checking for obvious problems. If it trips again, repeated resetting is not a repair. The circuit and heater should be diagnosed before further use.",
        ],
      },
      {
        kicker: "Combustion adds another safety layer",
        title: "Gas odor, soot, or carbon-monoxide warnings end the DIY checklist",
        paragraphs: [
          "Gas water heaters include combustion, venting, and flame-safety systems. If there is a gas odor, suspected exhaust spillage, soot, or a carbon-monoxide alarm, leave the equipment alone and follow emergency guidance from the gas utility, fire department, or other appropriate authority. Do not repeatedly relight or bypass a safety control to keep the heater operating.",
        ],
      },
    ],
    faq: [
      {
        question: "Why do I have no hot water after resetting the breaker?",
        answer:
          "If the breaker remains on but the tank stays cold, the problem may involve high-limit protection, thermostats, heating elements, wiring, controls, or another internal fault. Use the manufacturer's service information or qualified service rather than continuing to reset protection.",
      },
      {
        question: "Why is there hot water at one faucet but not another?",
        answer:
          "That usually points toward a local fixture or mixing problem rather than a failed water heater. Compare several fixtures before working on the heater.",
      },
      {
        question: "When should a water heater leak be treated as urgent?",
        answer:
          "Active tank leakage, water near electrical parts, a relief valve that is discharging abnormally, gas odor, soot, or carbon-monoxide warnings warrant prompt attention. Shut down utilities only if you can do so safely and get qualified help.",
      },
    ],
    sources: [
      {
        label: "A.O. Smith University: Residential standard electric troubleshooting",
        url: "https://university.hotwater.com/products/residential/standard-electric/",
      },
    ],
    relatedSlugs: [
      "breaker-keeps-tripping",
      "fix-leaking-kitchen-faucet-guide",
      "toilet-keeps-running",
    ],
  },
  {
    slug: "dishwasher-not-draining",
    title: "Dishwasher Not Draining? Trace the Drain Path Before Replacing the Pump",
    metaTitle: "Dishwasher Not Draining: Filter, Hose, Air Gap, or Pump?",
    metaDescription:
      "Troubleshoot standing water in a dishwasher by checking the cycle, filter, sink drain, air gap, high loop, disposer connection, and drain path before replacing the pump.",
    eyebrow: "Dishwasher drain troubleshooting",
    dek: "Standing water can be caused inside the dishwasher or downstream in the sink plumbing. Follow the water path before condemning the drain pump.",
    quickAnswer:
      "First let the cycle finish and confirm the dishwasher is truly retaining abnormal water. Turn power off before reaching into the sump. Clean the removable filter or accessible debris screen according to the owner's manual, then check whether the connected sink drain or disposer is also slow. Inspect the air gap if fitted and confirm the drain hose has the required high loop. If a garbage disposer was recently installed, verify its dishwasher inlet knockout plug was removed. Do not pour chemical drain cleaner into the dishwasher. If the drain path is clear and the machine still will not pump out, the drain pump, control, or internal obstruction may require service.",
    principle:
      "A drain pump can only move water into a path that is open. Prove the path before blaming the pump.",
    accent: "sage",
    steps: [
      {
        title: "Confirm the cycle completed",
        detail:
          "A small amount of water in the sump can be normal on some models. If the cycle was interrupted, cancel or drain it according to the owner's manual before deciding there is a drain fault.",
      },
      {
        title: "De energize before cleaning the filter or sump",
        detail:
          "Turn off dishwasher power before reaching into areas where broken glass or moving components could be present. Remove and clean only filters and screens that the owner's manual identifies as user-serviceable.",
      },
      {
        title: "Check the household drain side",
        detail:
          "Run the kitchen sink and verify it drains normally. If the dishwasher connects to a disposer, check that connection. A downstream clog can make a working dishwasher drain system appear defective.",
      },
      {
        title: "Inspect the air gap, high loop, and disposer connection",
        detail:
          "GE specifies that the drain hose needs the correct high loop when no air gap is used. A clogged air gap or a disposer inlet knockout left in place after installation can also prevent draining.",
      },
      {
        title: "Escalate when the path is clear but pumping does not occur",
        detail:
          "If accessible filters, plumbing, air gap, hose routing, and disposer connection are correct, a failed drain pump, control problem, check valve, or internal blockage may require model-specific diagnosis.",
      },
    ],
    sections: [
      {
        kicker: "Think downstream",
        title: "Dishwasher drainage depends on the sink-side installation",
        paragraphs: [
          "GE's troubleshooting guidance specifically points to the high drain loop and disposer connection because the dishwasher does not discharge into an isolated system. It normally shares part of the kitchen drain path. A new disposer whose dishwasher knockout was never removed can produce an immediate no-drain symptom even though the dishwasher itself is fine.",
          "Likewise, a slow sink, clogged air gap, or badly routed hose can restrict discharge. Those are installation or plumbing faults, not pump failures.",
        ],
      },
      {
        kicker: "Chemicals are the wrong shortcut",
        title: "Do not use household drain cleaner in the dishwasher",
        paragraphs: [
          "GE explicitly says not to use drain cleaner in a dishwasher. The machine contains pumps, seals, hoses, metals, and plastics that are not the same as a simple household drain pipe, and caustic chemicals can create both equipment and exposure hazards during later service.",
        ],
      },
      {
        kicker: "The pump earns suspicion last",
        title: "A hum, silence, and normal pump sound are different clues",
        paragraphs: [
          "If the drain command produces a normal pump sound but water barely moves, restriction is still plausible. A pump that hums but cannot move may be jammed or failing. No pump activity can involve power, control, wiring, or the pump itself. The sound changes the diagnostic direction but does not justify reaching into an energized machine.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is there water in the bottom of my dishwasher?",
        answer:
          "Possible causes include an interrupted cycle, clogged filter, blocked sink-side drain, clogged air gap, incorrect drain-hose routing, a disposer connection problem, or a pump fault. Trace the drain path before replacing the pump.",
      },
      {
        question: "Can a garbage disposal make the dishwasher stop draining?",
        answer:
          "Yes. A clogged disposer or a newly installed disposer whose dishwasher inlet knockout was not removed can block dishwasher discharge.",
      },
      {
        question: "Can I put drain cleaner in the dishwasher?",
        answer:
          "No. GE specifically advises against using drain cleaner in a dishwasher. Diagnose and clear the correct mechanical drain path instead.",
      },
    ],
    sources: [
      {
        label: "GE Appliances: Dishwasher not draining",
        url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240",
      },
    ],
    relatedSlugs: [
      "why-dishwasher-not-cleaning-properly",
      "fix-leaking-kitchen-faucet-guide",
    ],
  },
  {
    slug: "washer-not-draining",
    title: "Washer Not Draining? Separate the Machine From the House Drain",
    metaTitle: "Washer Not Draining: Hose, Pump Filter, Load, or Pump?",
    metaDescription:
      "Troubleshoot a washer that will not drain by checking the household standpipe, drain hose, accessible pump filter, load balance, and pump symptoms safely.",
    eyebrow: "Clothes washer drain troubleshooting",
    dek: "A washer can fail to drain because the machine cannot pump, because its hose is wrong, or because the house drain cannot accept the water.",
    quickAnswer:
      "Pause the washer and protect the floor before opening anything that can release trapped water. Check the drain hose for kinks and verify it is installed at the height and depth specified by the washer manufacturer. Test whether the household standpipe or drain can accept water. On front-load models with a user-accessible pump filter, follow the owner's manual to drain the machine and clean that filter. Redistribute an obviously unbalanced load. If the tub is full and the machine only hums, or the pump filter is not designed for homeowner access, stop and arrange service rather than forcing the pump.",
    principle:
      "The washer pump, drain hose, and house standpipe form one hydraulic path. Isolate which section cannot move the water.",
    accent: "cobalt",
    steps: [
      {
        title: "Control the trapped water first",
        detail:
          "A washer full of water can release several gallons quickly. Protect the floor, use the manufacturer's emergency-drain procedure if provided, and do not remove hoses or filters until you are prepared to contain the water.",
      },
      {
        title: "Inspect the drain hose installation",
        detail:
          "Check for kinks, crushing, and an incorrect standpipe insertion depth. GE notes that a hose pushed too far into the standpipe or improperly sealed can contribute to siphoning and drainage problems.",
      },
      {
        title: "Prove the household drain can accept water",
        detail:
          "GE recommends checking the standpipe or drain itself. If the household drain will not take water freely, the washer may be functioning while the plumbing is blocked.",
      },
      {
        title: "Clean a user-accessible pump filter only as designed",
        detail:
          "Many front-load washers have a pump clean-out accessible from the front. Follow the model's manual because access differs. Models without a designed homeowner access point should not be disassembled simply to hunt for a clog.",
      },
      {
        title: "Use sound and load behavior as clues",
        detail:
          "An unbalanced load can interrupt normal spin and drain behavior. A tub full of water with only a pump hum can indicate a jammed or failed pump. If redistribution and the external drain checks do not help, service is appropriate.",
      },
    ],
    sections: [
      {
        kicker: "The house drain is part of the system",
        title: "A washer can pump correctly and still leave you with standing water",
        paragraphs: [
          "GE's front-load washer guidance tells owners to verify the household drain is not clogged. That is an important boundary because replacing a drain pump cannot fix a blocked standpipe. If the standpipe backs up or accepts water slowly, solve the plumbing problem first.",
          "The reverse is also true. A clear standpipe does not prove the washer pump works. That is why the test sequence moves from external plumbing toward the machine rather than starting with parts replacement.",
        ],
      },
      {
        kicker: "Pump filters are model-specific",
        title: "Accessible clean-outs are service points, not permission to disassemble every washer",
        paragraphs: [
          "GE notes that many front-load washers provide a pump-filter access door while models without front access require service. Coins, small clothing items, and pocket debris can reach the filter and obstruct drainage. Use the owner's manual to find the actual service point for your model.",
        ],
      },
      {
        kicker: "Drain and spin are related",
        title: "An unbalanced load can look like a drain failure",
        paragraphs: [
          "Modern washers monitor load balance before high-speed spin. A badly unbalanced load can interrupt the sequence, leave clothes wetter than expected, and make the cycle appear incomplete. Redistributing the load is a low-risk check before moving deeper into pump diagnosis.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is my washer full of water and humming?",
        answer:
          "A humming pump with a full tub can point toward a pump obstruction or failed pump, but first verify the drain hose and household drain are clear. If the model's accessible filter is clean and the tub still will not drain, service is appropriate.",
      },
      {
        question: "Can a clogged house drain make the washer look broken?",
        answer:
          "Yes. The washer has to discharge into the standpipe or household drain. If that plumbing cannot accept water, the washer may back up or fail to complete drainage normally.",
      },
      {
        question: "Should I remove the washer pump myself?",
        answer:
          "Not as a first step. Use only the pump-filter or emergency-drain access the manufacturer identifies for the owner. Deeper disassembly should follow model-specific service procedures.",
      },
    ],
    sources: [
      {
        label: "GE Appliances: Front-load washer will not drain or drains slowly",
        url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=23081",
      },
      {
        label: "GE Appliances: Front-load washer troubleshooting",
        url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=18538",
      },
    ],
    relatedSlugs: [
      "dryer-not-heating",
      "dishwasher-not-draining",
    ],
  },
  {
    slug: "why-dishwasher-not-cleaning-properly",
    title: "Dishwasher Not Cleaning? Diagnose Coverage Before Buying a New One",
    metaTitle: "Dishwasher Not Cleaning: Filter, Spray Arms, Water, or Loading?",
    metaDescription:
      "Troubleshoot a dishwasher that leaves dishes dirty by checking the filter, spray-arm clearance, loading, water supply, detergent, and wash coverage.",
    eyebrow: "Dishwasher wash-performance troubleshooting",
    dek: "Dirty dishes do not automatically mean a weak pump. Filtration, spray coverage, loading, water, and detergent all affect the same result.",
    quickAnswer:
      "Start by cleaning the dishwasher filter according to the owner's manual and make sure the spray arms can rotate without hitting dishes or utensils. Reload dishes so dirty surfaces face the spray and water paths are not blocked. Confirm the water supply is open and use automatic dishwasher detergent in the amount recommended for your water conditions and machine. If one rack stays dirty, inspect the spray path serving that rack. If coverage, filter, loading, and water conditions are correct but soil remains, a circulation pump, diverter, heater, sensor, or control fault may need model-specific service.",
    principle:
      "Cleaning is the result of water reaching the soil with enough flow, temperature, chemistry, and time. Find which part of that process is missing.",
    accent: "sage",
    steps: [
      {
        title: "Clean the filter using the model instructions",
        detail:
          "Whirlpool identifies a dirty or clogged filter as a common cause of poor wash performance. Remove and clean only the filter components designed for owner maintenance.",
      },
      {
        title: "Verify spray-arm movement and loading clearance",
        detail:
          "Rotate the spray arms by hand with the dishwasher off and make sure tall cookware, utensils, or rack items do not block them. Point dirty surfaces inward and downward toward the spray path.",
      },
      {
        title: "Check water supply and the start-of-cycle hot-water condition",
        detail:
          "Make sure the dishwasher water supply is on. Whirlpool recommends running the nearby sink hot before starting in some troubleshooting situations so the dishwasher receives hot water promptly.",
      },
      {
        title: "Use the correct detergent and amount",
        detail:
          "Use automatic dishwasher detergent, not hand soap. Too much detergent can leave residue while too little can underperform in hard water. Follow the appliance and detergent guidance for the local water conditions.",
      },
      {
        title: "Escalate a repeatable rack or circulation failure",
        detail:
          "If one zone consistently stays dirty after loading and filter checks, the problem may be a blocked spray arm, diverter, circulation pump, or internal water-distribution fault. That pattern is more informative than a general complaint that the machine is old.",
      },
    ],
    sections: [
      {
        kicker: "Coverage is the first mechanical question",
        title: "If water cannot reach the dish, stronger detergent will not solve it",
        paragraphs: [
          "Whirlpool notes that dishes should be placed soiled-side down and inward toward the spray arms and that loading should not block the spray arms. That sounds simple, but it is a useful diagnostic test: when only one rack, corner, or tall-item zone stays dirty, look at water coverage before blaming the entire wash system.",
          "A clogged filter can also reduce performance by keeping debris in circulation or restricting the designed water path. Cleaning the filter is therefore both maintenance and a diagnostic step.",
        ],
      },
      {
        kicker: "Chemistry and temperature matter too",
        title: "Mechanical flow is only one part of cleaning",
        paragraphs: [
          "Dishwasher performance also depends on detergent, water temperature, and cycle selection. Residue, cloudy glassware, greasy soil, and dried-on starch can point in different directions. Use the correct automatic dishwasher detergent and the cycle intended for the soil load before diagnosing a component failure.",
        ],
      },
      {
        kicker: "Pattern beats age",
        title: "A repeatable failure zone can be more useful than the machine's birthday",
        paragraphs: [
          "A dishwasher that cleans the bottom rack but not the top has already told you something: the machine can fill, circulate at least some water, and complete a wash. The diagnosis can narrow toward the upper spray path, rack loading, diverter, or related components instead of treating the whole appliance as failed.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is my dishwasher leaving food on dishes?",
        answer:
          "Common causes include a dirty filter, blocked spray arms, poor loading, insufficient water supply, wrong detergent use, or a circulation problem. Start with filter and spray coverage because they are low-risk and easy to verify.",
      },
      {
        question: "Why does the dishwasher clean one rack but not the other?",
        answer:
          "That pattern points toward loading, a blocked spray arm, or a water-distribution problem serving that rack. Check clearance and the spray path before assuming the main pump has failed.",
      },
      {
        question: "Should I rinse dishes completely before loading?",
        answer:
          "Follow your dishwasher and detergent instructions. Scrape large food debris, but modern dishwashers and detergents are generally designed to wash normal food soil. The troubleshooting focus should be whether the machine has proper filtration, loading, spray coverage, water, and detergent conditions.",
      },
    ],
    sources: [
      {
        label: "Whirlpool: Why is my dishwasher not cleaning dishes properly?",
        url: "https://www.whirlpool.com/blog/kitchen/dishwasher-not-cleaning.html",
      },
    ],
    relatedSlugs: [
      "dishwasher-not-draining",
      "fix-leaking-kitchen-faucet-guide",
    ],
  },
  {
    slug: "fix-leaking-kitchen-faucet-guide",
    title: "Leaking Kitchen Faucet? Identify the Leak Before Replacing the Faucet",
    metaTitle: "Fix a Leaking Kitchen Faucet: Spout, Handle, or Supply Leak?",
    metaDescription:
      "Diagnose a kitchen faucet leak by identifying whether water comes from the spout, handle, base, supply connection, or drain area before replacing parts.",
    eyebrow: "Kitchen faucet leak troubleshooting",
    dek: "A drip from the spout and water under the sink can come from completely different seals. Dry the area and identify the exact leak path first.",
    quickAnswer:
      "Dry the faucet, sink deck, cabinet floor, and supply connections, then operate the faucet while watching for the first place water appears. A drip from the spout with the faucet off points toward an internal valve cartridge, washer, or seal depending on the faucet design. Water around a handle or base can involve O-rings or body seals. Water under the sink may come from supply hoses, shutoff valves, faucet shanks, the sprayer hose, or even the drain rather than the faucet valve. Turn off the fixture's water supply before disassembly and replace parts by exact faucet model when possible.",
    principle:
      "Water travels. The wet spot is not always the source, so dry the system and watch where the first drop forms.",
    accent: "aqua",
    steps: [
      {
        title: "Dry everything before testing",
        detail:
          "Wipe the faucet body, sink deck, supply hoses, shutoff valves, drain connections, and cabinet floor dry. Old moisture makes it difficult to tell where a new leak begins.",
      },
      {
        title: "Test the faucet off, then cold, then hot",
        detail:
          "Watch the spout with the faucet off. Then run cold and hot separately while looking around the handles, base, pull-down hose, supply fittings, and cabinet. Different conditions can expose different seals.",
      },
      {
        title: "Separate valve leakage from connection leakage",
        detail:
          "A spout that drips while shut off is usually an internal faucet-sealing issue. Water on the cabinet floor during operation may be a supply, sprayer-hose, faucet-body, or drain connection instead.",
      },
      {
        title: "Shut off water before opening the faucet",
        detail:
          "EPA WaterSense specifically reminds homeowners to shut off the water line before faucet repair. Confirm the local stops actually hold before removing a cartridge, stem, or supply connection.",
      },
      {
        title: "Match the service part to the faucet",
        detail:
          "Modern faucets use different cartridges, ceramic discs, seals, and proprietary assemblies. Use the model number, manufacturer diagrams, or the removed part to match replacements instead of buying a generic washer kit by default.",
      },
    ],
    sections: [
      {
        kicker: "Leak location changes the repair",
        title: "A spout drip is not the same failure as water under the sink",
        paragraphs: [
          "EPA WaterSense identifies worn washers and gaskets as frequent faucet leak causes, but modern kitchen faucets can also use cartridges and ceramic-valve assemblies. The useful first distinction is whether the valve fails to shut off internally or water escapes from an external connection.",
          "If the spout stays dry when off but the cabinet gets wet only while water runs, inspect the spray hose, supply connections, faucet mounting area, and drain. Rebuilding the cartridge will not fix a leaking hose under the sink.",
        ],
      },
      {
        kicker: "Small drips have measurable cost",
        title: "One drip per second can waste thousands of gallons a year",
        paragraphs: [
          "EPA reports that a faucet dripping at one drip per second can waste more than 3,000 gallons per year. The agency also identifies dripping faucets, worn toilet flappers, and leaking valves as common household leaks that are often straightforward to correct.",
        ],
      },
      {
        kicker: "Control the water before the repair",
        title: "A shutoff valve that does not shut off changes the job",
        paragraphs: [
          "Before disassembling a faucet, close the fixture stops and confirm flow actually stops. If a shutoff valve is seized, leaking, or will not isolate the faucet, the repair boundary moves upstream. Do not remove a pressurized cartridge or supply line while assuming an old stop valve will eventually hold.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does my kitchen faucet drip after I turn it off?",
        answer:
          "A continuing spout drip usually means the internal valve is not sealing completely. The service part may be a cartridge, washer, seal, or ceramic-valve component depending on the faucet design.",
      },
      {
        question: "Why is there water under the sink only when the faucet is running?",
        answer:
          "Inspect the supply connections, pull-down or side-sprayer hose, faucet shank area, and sink drain. Water below the sink during operation does not automatically mean the faucet cartridge is leaking.",
      },
      {
        question: "Do I need a whole new faucet for a drip?",
        answer:
          "Often no. Many faucets have replaceable cartridges, seals, hoses, or other service parts. Replacement makes more sense when the faucet body is damaged, badly corroded, parts are unavailable, or repair cost no longer makes sense.",
      },
    ],
    sources: [
      {
        label: "U.S. EPA WaterSense: Fix a Leak Week",
        url: "https://www.epa.gov/watersense/fix-leak-week",
      },
      {
        label: "U.S. EPA WaterSense: Home maintenance",
        url: "https://www.epa.gov/watersense/home-maintenance",
      },
    ],
    relatedSlugs: [
      "toilet-keeps-running",
      "dishwasher-not-draining",
      "water-heater-not-providing-hot-water-solutions",
    ],
  },
];

export function getAdditionalResource(slug: string) {
  return additionalResources.find((resource) => resource.slug === slug);
}
