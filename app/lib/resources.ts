export const RESOURCE_REVIEWED_DATE = "2026-08-27";
export const RESOURCE_REVIEWED_DATE_LABEL = "August 27, 2026";

export type ResourceSource = {
  label: string;
  url: string;
};

export type DiagnosticStep = {
  title: string;
  detail: string;
};

export type ResourceSection = {
  kicker: string;
  title: string;
  paragraphs: string[];
};

export type TroubleshootingResource = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  dek: string;
  quickAnswer: string;
  principle: string;
  accent: "coral" | "cobalt" | "sage" | "aqua" | "lime";
  steps: DiagnosticStep[];
  sections: ResourceSection[];
  faq: Array<{ question: string; answer: string }>;
  sources: ResourceSource[];
  relatedSlugs: string[];
};

export const resources: TroubleshootingResource[] = [
  {
    slug: "stop-drafts-from-windows-without-replacement",
    title: "How to Stop Drafts From Windows Without Replacing Them",
    metaTitle: "Stop Drafts From Windows Without Replacement",
    metaDescription:
      "Diagnose where a window draft is actually entering, then choose weatherstripping, caulk, backer rod, low expansion foam, or a window covering without replacing a sound window.",
    eyebrow: "Window air leak troubleshooting",
    dek: "Find the leak path first. A draft at a moving sash needs a different repair than a gap behind stationary trim.",
    quickAnswer:
      "Do not start by shopping for replacement windows. First determine whether air is entering at a moving sash, a fixed frame joint, the rough opening behind the trim, or not entering at all. Weatherstripping belongs on moving joints. Caulk belongs on small stationary gaps. Larger hidden frame gaps may need backer rod or low expansion window and door foam. If you feel cold near the glass but cannot detect airflow, the issue may be surface temperature rather than an air leak.",
    principle:
      "Treat a draft like a leak in a machine enclosure: locate the path before choosing the sealing material.",
    accent: "cobalt",
    steps: [
      {
        title: "Confirm that air is actually moving",
        detail:
          "On a cool or windy day, move a thin tissue strip or a smoke pencil slowly around the sash edges, meeting rail, trim, sill, and frame. A repeatable deflection points to an air leak. Avoid using an open flame.",
      },
      {
        title: "Separate moving joints from fixed joints",
        detail:
          "If the leak follows the operable sash, inspect the existing weatherstripping for compression loss, tears, gaps, or misalignment. If the leak comes from a fixed trim or frame joint, inspect the caulk line instead.",
      },
      {
        title: "Check behind the interior trim when the edge still leaks",
        detail:
          "A window can have an intact sash seal and still leak through the gap between the window jamb and the rough framing. Where trim can be removed without damage, inspect that cavity and seal it with an appropriate backer rod, caulk, or low expansion window and door foam.",
      },
      {
        title: "Retest before adding another layer",
        detail:
          "After each repair, repeat the same airflow check. If the original leak disappears, stop. Layering several products over an unidentified problem can hide water damage or make future service harder.",
      },
    ],
    sections: [
      {
        kicker: "Choose the material by the joint",
        title: "Weatherstripping and caulk solve different problems",
        paragraphs: [
          "The U.S. Department of Energy distinguishes between weatherstripping for components that move and caulk for cracks and openings between stationary components. That distinction is useful because a seal that must flex every time a sash moves needs different properties from a fixed perimeter joint.",
          "For an operable window that leaks only when closed, check whether the sash is fully latching and pulling evenly into the seal before replacing the weatherstripping. A latch or alignment problem can mimic a failed seal.",
        ],
      },
      {
        kicker: "Do not confuse conduction with leakage",
        title: "Cold glass can feel drafty even when the window is sealed",
        paragraphs: [
          "Air next to cold glass cools and falls, which can feel like a draft even if outdoor air is not entering. If the tissue or smoke test shows no consistent leakage, insulating shades, curtains, storm panels, or seasonal window film may improve comfort more than adding caulk to an already sealed joint.",
          "Condensation between panes, rotten framing, failed hardware, recurring water intrusion, or a sash that cannot close squarely are different problems. Those conditions can justify repair by a window specialist or eventual replacement even when simple air sealing is not the answer.",
        ],
      },
      {
        kicker: "Know when the project is bigger",
        title: "Local sealing is not the same as whole house air sealing",
        paragraphs: [
          "Sealing an obvious window gap is a targeted repair. A major whole house air sealing project can change how the building exchanges air and how fuel burning equipment receives combustion air. If you are tightening an older home extensively, especially one with atmospherically vented combustion appliances, include ventilation and combustion safety in the plan.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I caulk every edge of an operable window?",
        answer:
          "No. Do not caulk a joint that must move for the window to operate or drain. Use weatherstripping on the intended moving seal and caulk only appropriate stationary gaps.",
      },
      {
        question: "Can plastic window film stop a draft?",
        answer:
          "Seasonal interior film can reduce air movement and improve comfort, but it is better treated as a secondary measure. If a serviceable joint is leaking, repair the actual leak first.",
      },
      {
        question: "When is replacement more reasonable than sealing?",
        answer:
          "Replacement becomes more reasonable when the frame or sash is structurally damaged, badly warped, repeatedly leaking water, unable to operate safely, or no longer repairable with available parts.",
      },
    ],
    sources: [
      {
        label: "U.S. Department of Energy: Insulation and air sealing essentials",
        url: "https://www.energy.gov/cmei/buildings/articles/energy-efficient-home-improvement-credit-insulation-and-air-sealing",
      },
      {
        label: "U.S. Department of Energy: Renters energy saving guidance",
        url: "https://www.energy.gov/save/renters",
      },
    ],
    relatedSlugs: [
      "air-purifier-cadr-room-size-guide",
      "prevent-bathroom-mold-growth-steps",
    ],
  },
  {
    slug: "fix-noisy-bathroom-exhaust-fan",
    title: "How to Fix a Noisy Bathroom Exhaust Fan",
    metaTitle: "Fix a Noisy Bathroom Exhaust Fan: Diagnose the Sound",
    metaDescription:
      "Diagnose bathroom fan rattling, squealing, grinding, humming, vibration, and airflow noise before replacing the whole fan.",
    eyebrow: "Bathroom fan troubleshooting",
    dek: "The sound is a symptom. Dust, loose hardware, a damaged blower wheel, worn bearings, a stuck damper, and restrictive ductwork do not make the same noise.",
    quickAnswer:
      "Start with the breaker off. Remove the grille, clean the housing and blower wheel, and check for anything loose or rubbing. Rattling usually points toward loose parts or imbalance. Grinding or squealing often points toward motor bearings. A louder rushing or whistling sound can come from a restricted duct or damper. If the housing and ductwork are sound, a compatible motor assembly can sometimes restore the fan without replacing the entire ceiling housing.",
    principle:
      "Do not replace a motor to fix a duct restriction, and do not redesign the duct to fix a worn bearing. Identify the failure mode first.",
    accent: "sage",
    steps: [
      {
        title: "De energize the fan before opening it",
        detail:
          "Turn the fan circuit off at the breaker before removing the grille or touching the motor, blower wheel, wiring, or internal connectors. Confirm the fan cannot start before continuing.",
      },
      {
        title: "Clean before condemning parts",
        detail:
          "Vacuum dust from the grille, housing, and blower wheel. Dust can restrict airflow and create imbalance. Spin the blower by hand with power off and look for rubbing, wobble, or debris.",
      },
      {
        title: "Match the sound to the likely system",
        detail:
          "Rattling and vibration suggest looseness or imbalance. Grinding or squealing suggest bearing or motor wear. Humming with little or no rotation suggests a stalled mechanical load or motor problem. Airflow roar or whistle points more toward restriction, duct shape, or a damper problem.",
      },
      {
        title: "Inspect the air path",
        detail:
          "Check that the fan damper and exterior wall or roof cap open freely. Long duct runs, sharp turns, crushed flex duct, undersized duct, and blocked exterior caps can reduce airflow and increase noise.",
      },
      {
        title: "Decide whether the service boundary is the motor or the whole fan",
        detail:
          "If the housing is solid, the duct is adequate, and a compatible replacement motor is available, motor replacement can be the least disruptive repair. If the fan is undersized, badly corroded, poorly ducted, or inherently loud, a complete replacement may solve more than one problem.",
      },
    ],
    sections: [
      {
        kicker: "Sound is diagnostic information",
        title: "Rattle, squeal, hum, and airflow noise point in different directions",
        paragraphs: [
          "Broan NuTone identifies dust buildup, loose components, worn motor bearings, an aging motor, and a damaged blower wheel as common causes of increasing bathroom fan noise. Its installation guidance also calls out stuck backdraft dampers and obstructed exterior dampers as possible noise sources.",
          "That is why a fan that suddenly becomes louder should not automatically be treated as a failed motor. A loose grille spring or debris in the blower can produce a large change in sound with a much smaller repair.",
        ],
      },
      {
        kicker: "Airflow still matters",
        title: "A quiet fan that does not exhaust outdoors is not fixed",
        paragraphs: [
          "The purpose of the fan is moisture removal. EPA guidance says bathroom exhaust should discharge outdoors rather than into an attic or another enclosed space. If the motor sounds better after service but steam still lingers, verify the duct, exterior termination, makeup air path, and actual airflow.",
        ],
      },
    ],
    faq: [
      {
        question: "Can dust really make a bathroom fan loud?",
        answer:
          "Yes. Dust can restrict airflow and create imbalance on the blower wheel. Cleaning is the lowest cost first check when the fan has gradually become louder.",
      },
      {
        question: "What does a squealing bathroom fan usually mean?",
        answer:
          "Persistent squealing or grinding often points toward motor bearing wear, although rubbing or debris should be ruled out first with the power off.",
      },
      {
        question: "Can I replace only the bathroom fan motor?",
        answer:
          "Sometimes. If the existing housing is sound and the manufacturer offers a compatible motor or upgrade assembly, replacing the internal assembly can avoid ceiling and duct modifications.",
      },
    ],
    sources: [
      {
        label: "Broan NuTone: Bathroom exhaust fan making noise",
        url: "https://broan-nutone.com/en-us/home/learn/my-bath-fan-sounds-like-a-lawnmower",
      },
      {
        label: "Home Ventilating Institute: Bathroom exhaust fans",
        url: "https://www.hvi.org/resources/publications/bathroom-exhaust-fans/",
      },
      {
        label: "U.S. EPA: Bathroom ventilation during remodeling",
        url: "https://www.epa.gov/indoor-air-quality-iaq/remodeling-your-home-and-indoor-air-quality",
      },
    ],
    relatedSlugs: [
      "bathroom-exhaust-fan-repair-or-replace",
      "bathroom-exhaust-fan-cfm-sizing",
      "prevent-bathroom-mold-growth-steps",
    ],
  },
  {
    slug: "prevent-bathroom-mold-growth-steps",
    title: "How to Prevent Bathroom Mold by Fixing the Moisture Problem",
    metaTitle: "Prevent Bathroom Mold: Control Moisture and Ventilation",
    metaDescription:
      "Reduce recurring bathroom mold by controlling humidity, exhausting shower moisture outdoors, checking fan airflow, and fixing leaks or condensation sources.",
    eyebrow: "Bathroom moisture control",
    dek: "Recurring mold is usually a moisture problem first. Cleaning matters, but the room must also dry reliably after showers.",
    quickAnswer:
      "If bathroom mold keeps returning, reduce the amount of time surfaces stay damp. Run a properly ducted exhaust fan during showers and continue ventilation afterward. EPA guidance generally favors indoor relative humidity around 30 to 50 percent when practical and below 60 percent. Fix plumbing or building leaks promptly. If steam and condensation remain long after a shower, inspect fan airflow, duct restrictions, exterior discharge, and makeup air instead of assuming the fan is effective just because it makes noise.",
    principle:
      "Mold cleanup treats the result. Moisture control addresses the condition that lets it return.",
    accent: "aqua",
    steps: [
      {
        title: "Confirm where the moisture is coming from",
        detail:
          "Separate shower humidity from plumbing leaks, roof or wall leaks, and condensation on cold surfaces. A fan cannot solve water entering through a failed pipe or building envelope.",
      },
      {
        title: "Exhaust bathroom air outdoors",
        detail:
          "Verify the fan duct terminates outdoors and that the exterior damper opens. Exhausting into an attic or enclosed cavity relocates the moisture instead of removing it from the building.",
      },
      {
        title: "Give the fan enough runtime",
        detail:
          "HVI recommends continuing bathroom ventilation for about 20 minutes after use. A timer or humidity sensing control can make this consistent.",
      },
      {
        title: "Watch the humidity trend, not one instant reading",
        detail:
          "A humidity meter can show whether the room spikes during a shower and then returns toward normal. If humidity stays elevated, investigate fan capacity, duct resistance, makeup air, and other moisture sources.",
      },
    ],
    sections: [
      {
        kicker: "The fan must move air",
        title: "Noise from the grille does not prove adequate ventilation",
        paragraphs: [
          "EPA guidance specifically notes that a bathroom fan needs to exhaust enough air and discharge it outdoors. A running motor with a blocked cap, crushed duct, or poor makeup air path can still leave the room wet.",
          "If mirrors remain wet for a long time, paint stays damp, or condensation forms repeatedly on the ceiling and walls, treat that as evidence that the moisture removal process needs attention.",
        ],
      },
      {
        kicker: "Humidity is only part of the picture",
        title: "Leaks and cold surfaces can keep feeding the problem",
        paragraphs: [
          "EPA recommends fixing water problems promptly and drying damp materials. A bathroom with good ventilation can still develop mold if a supply line, tub surround, roof penetration, or exterior wall is leaking.",
          "Condensation can also form on cold surfaces. Insulation, air sealing, surface temperature, and ventilation can all affect whether water condenses even when there is no plumbing leak.",
        ],
      },
    ],
    faq: [
      {
        question: "What humidity should I aim for in a bathroom?",
        answer:
          "EPA guidance commonly recommends keeping indoor relative humidity around 30 to 50 percent when practical and below 60 percent. Short shower spikes are normal; the important question is whether the room dries back down.",
      },
      {
        question: "How long should a bathroom fan run after a shower?",
        answer:
          "HVI recommends about 20 minutes after bathroom use. A timer or humidity sensing control can make that easier to maintain.",
      },
      {
        question: "Will a stronger fan always fix mold?",
        answer:
          "No. The problem can also be a blocked or poorly routed duct, lack of makeup air, a plumbing leak, condensation, or a building envelope leak. Fan capacity is one part of the system.",
      },
    ],
    sources: [
      {
        label: "U.S. EPA: A brief guide to mold, moisture and your home",
        url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
      },
      {
        label: "U.S. EPA: Main ways to control moisture in your home",
        url: "https://www.epa.gov/mold/what-are-main-ways-control-moisture-your-home",
      },
      {
        label: "Home Ventilating Institute: Bathroom ventilation",
        url: "https://www.hvi.org/resources/publications/bathroom-ventilation/",
      },
    ],
    relatedSlugs: [
      "fix-noisy-bathroom-exhaust-fan",
      "bathroom-exhaust-fan-cfm-sizing",
    ],
  },
  {
    slug: "bathroom-exhaust-fan-cfm-sizing",
    title: "Bathroom Exhaust Fan CFM Sizing Without Guesswork",
    metaTitle: "Bathroom Exhaust Fan CFM Sizing Guide",
    metaDescription:
      "Size a bathroom exhaust fan using HVI airflow guidance, room area, fixture count, duct resistance, makeup air, and noise considerations.",
    eyebrow: "Ventilation sizing",
    dek: "CFM is only useful when the installed fan can actually deliver it through the duct system.",
    quickAnswer:
      "HVI recommends at least 50 CFM for bathrooms 50 square feet and smaller. From 50 to 100 square feet, a common HVI guideline is about 1 CFM per square foot. For bathrooms over 100 square feet, HVI recommends sizing by fixtures: 50 CFM each for a toilet, shower, or standard bathtub, and 100 CFM for a jetted tub. The rated number is not the whole story because duct length, bends, diameter, exterior dampers, and makeup air affect installed airflow.",
    principle:
      "Size the air path, not just the fan box. A high CFM motor connected to a restrictive duct can still underperform.",
    accent: "coral",
    steps: [
      {
        title: "Measure the bathroom floor area",
        detail:
          "Multiply room length by width. For rooms up to 100 square feet, use the HVI guidance as the starting airflow target, with a 50 CFM minimum for smaller bathrooms.",
      },
      {
        title: "Use fixture based sizing for larger bathrooms",
        detail:
          "Above 100 square feet, HVI recommends adding 50 CFM for each toilet, shower, and standard tub, and 100 CFM for each jetted tub.",
      },
      {
        title: "Check duct diameter and route",
        detail:
          "Long runs, sharp elbows, crushed flex duct, and undersized duct increase static pressure. Choose a fan and duct arrangement that can deliver the required airflow under realistic resistance.",
      },
      {
        title: "Make sure replacement air can enter",
        detail:
          "Air cannot leave the bathroom efficiently if there is no path for air to enter. Door undercut and the relationship between the exhaust point and supply or transfer air affect performance.",
      },
      {
        title: "Compare sound after airflow is adequate",
        detail:
          "Sones describe perceived loudness. A quieter fan can still move adequate air, so do not assume louder means stronger.",
      },
    ],
    sections: [
      {
        kicker: "Example",
        title: "A 70 square foot bathroom starts around 70 CFM",
        paragraphs: [
          "Using the HVI 1 CFM per square foot guideline, a 7 by 10 foot bathroom starts at about 70 CFM. That is a target for delivered ventilation, not permission to ignore the duct. If the existing duct is undersized or badly routed, the installed airflow can be lower than the fan label suggests.",
        ],
      },
      {
        kicker: "Large bathroom example",
        title: "Fixture count can matter more than floor area",
        paragraphs: [
          "For a bathroom over 100 square feet with a shower, standard bathtub, and toilet, the HVI fixture method totals 150 CFM. An enclosed toilet room may need its own exhaust or operable window depending on the design and applicable requirements.",
        ],
      },
    ],
    faq: [
      {
        question: "Is 50 CFM enough for a small bathroom?",
        answer:
          "HVI recommends 50 CFM as the minimum for bathrooms 50 square feet and smaller. Actual needs can be higher if the room has unusual ceiling height, duct resistance, or moisture load.",
      },
      {
        question: "Does a higher CFM fan always ventilate better?",
        answer:
          "Not automatically. The duct system and makeup air path must allow the fan to move the rated airflow. More motor capacity cannot fully compensate for a severely restricted air path.",
      },
      {
        question: "What is a sone?",
        answer:
          "A sone is a perceived loudness rating used for ventilation equipment. Lower sone ratings are quieter, but airflow and installation quality still need to be evaluated separately.",
      },
    ],
    sources: [
      {
        label: "Home Ventilating Institute: Bathroom exhaust fans",
        url: "https://www.hvi.org/resources/publications/bathroom-exhaust-fans/",
      },
      {
        label: "Home Ventilating Institute: Bathroom ventilation",
        url: "https://www.hvi.org/resources/publications/bathroom-ventilation/",
      },
      {
        label: "Broan NuTone: Exhaust fan buying guide",
        url: "https://broan-nutone.com/en-us/home/learn/exhaust-fan-buying-guide",
      },
    ],
    relatedSlugs: [
      "fix-noisy-bathroom-exhaust-fan",
      "bathroom-exhaust-fan-repair-or-replace",
      "prevent-bathroom-mold-growth-steps",
    ],
  },
  {
    slug: "bathroom-exhaust-fan-repair-or-replace",
    title: "Bathroom Exhaust Fan: Repair the Motor or Replace the Whole Fan?",
    metaTitle: "Bathroom Fan Repair or Replace Decision Guide",
    metaDescription:
      "Decide whether to clean, replace a bathroom fan motor assembly, use an upgrade kit, fix the duct, or replace the entire exhaust fan.",
    eyebrow: "Repair versus replacement",
    dek: "The least invasive repair is not always the cheapest long term choice. Base the decision on the housing, motor, airflow requirement, duct, and available parts.",
    quickAnswer:
      "Repair or replace the motor assembly when the housing is solid, the duct system is adequate, the fan is properly sized, and a compatible replacement assembly is available. Replace the whole fan when the housing is damaged or corroded, the original fan is undersized or inherently too loud, the duct connection needs redesign, or replacement parts are unavailable. If airflow is poor because the duct or exterior damper is restricted, fix that first because a new motor may not solve the system problem.",
    principle:
      "Define the failed component before deciding the repair boundary. The motor, blower, housing, and duct are separate parts of one ventilation system.",
    accent: "lime",
    steps: [
      {
        title: "Clean and inspect before pricing parts",
        detail:
          "With power off, clean the grille, housing, and blower. Check for loose mounting, damaged blower parts, rubbing, and a freely moving damper.",
      },
      {
        title: "Identify the fan model and housing",
        detail:
          "Look for a model label inside the housing. Manufacturer specific motor assemblies and upgrade kits can sometimes fit the existing housing and avoid ceiling repair.",
      },
      {
        title: "Verify the fan is large enough for the room",
        detail:
          "If the original fan was undersized, replacing only the motor with an equivalent assembly preserves the same basic limitation. Compare the required CFM with the existing fan and duct.",
      },
      {
        title: "Inspect the duct before installing a stronger fan",
        detail:
          "A larger fan on a small or restrictive duct can create more noise without delivering the expected airflow. Duct diameter, length, bends, and exterior termination belong in the decision.",
      },
      {
        title: "Choose the smallest repair that fixes the whole problem",
        detail:
          "A motor assembly is attractive when the rest of the system is correct. A complete fan replacement is better when it lets you correct airflow, noise, housing, and duct compatibility at the same time.",
      },
    ],
    sections: [
      {
        kicker: "When motor replacement makes sense",
        title: "A good housing can be worth keeping",
        paragraphs: [
          "Broan NuTone notes that compatible motor and cover upgrade kits can refresh some existing fans without removing the entire housing. This is most attractive when the ceiling opening, housing, and duct are already in good condition.",
          "The model number matters. Do not assume a motor that physically fits is electrically or mechanically compatible. Use the manufacturer compatibility information for the specific housing.",
        ],
      },
      {
        kicker: "When full replacement makes sense",
        title: "Fixing several limitations at once can justify more work",
        paragraphs: [
          "A complete replacement becomes more compelling when the old unit is undersized, has a high original sone rating, uses an inadequate duct connection, has a damaged housing, or lacks available service parts. In that case the additional installation work can solve problems a motor swap would preserve.",
        ],
      },
    ],
    faq: [
      {
        question: "Is replacing a bathroom fan motor a normal repair?",
        answer:
          "Yes, for some models. Manufacturers sell compatible motor assemblies and upgrade kits for selected housings. Verify the exact model and compatibility before ordering.",
      },
      {
        question: "Should I install a higher CFM motor in the old housing?",
        answer:
          "Only if the manufacturer provides a compatible assembly and the housing and duct are designed for it. Improvised motor substitutions can create fit, airflow, noise, and electrical problems.",
      },
      {
        question: "What if the fan is quiet but the bathroom stays wet?",
        answer:
          "Treat that as an airflow or moisture control problem. Check CFM sizing, duct restriction, exterior discharge, makeup air, runtime, and other moisture sources before blaming the motor.",
      },
    ],
    sources: [
      {
        label: "Broan NuTone: Bathroom exhaust fan making noise",
        url: "https://broan-nutone.com/en-us/home/learn/my-bath-fan-sounds-like-a-lawnmower",
      },
      {
        label: "Broan NuTone: Fan upgrade kits",
        url: "https://broan-nutone.com/en-us/freshen-up-landing/fan-upgrade-kit",
      },
      {
        label: "Home Ventilating Institute: Bathroom exhaust fans",
        url: "https://www.hvi.org/resources/publications/bathroom-exhaust-fans/",
      },
    ],
    relatedSlugs: [
      "fix-noisy-bathroom-exhaust-fan",
      "bathroom-exhaust-fan-cfm-sizing",
    ],
  },
  {
    slug: "air-purifier-cadr-room-size-guide",
    title: "Air Purifier CADR and Room Size: Use the Airflow Math",
    metaTitle: "Air Purifier CADR and Room Size Guide",
    metaDescription:
      "Use CADR, room volume, ceiling height, and equivalent air changes per hour to compare portable air purifier coverage claims with actual airflow capacity.",
    eyebrow: "Air purifier sizing",
    dek: "Square foot claims are easy to market. CADR lets you compare how much clean air the machine can actually deliver.",
    quickAnswer:
      "For particle filtration, compare the purifier's CADR with the size and volume of the room. EPA's current sizing table uses about 65 CFM of CADR for each 100 square feet with an 8 foot ceiling. Another useful calculation is equivalent air changes per hour: multiply CADR in CFM by 60 and divide by room volume in cubic feet. Higher ceilings increase room volume and reduce the air change rate from the same purifier.",
    principle:
      "A coverage claim is an outcome under chosen assumptions. CADR is the airflow input that lets you check those assumptions.",
    accent: "sage",
    steps: [
      {
        title: "Find the particle CADR",
        detail:
          "Use a recognized clean air delivery rate when available. CADR is a measure of clean particle filtered airflow. It does not by itself rate gas or VOC removal performance.",
      },
      {
        title: "Calculate room volume",
        detail:
          "Multiply room length by width by ceiling height. A 20 by 15 foot room with an 8 foot ceiling contains 2,400 cubic feet of air.",
      },
      {
        title: "Calculate equivalent air changes per hour",
        detail:
          "Use eACH = CADR in CFM × 60 ÷ room volume in cubic feet. A 235 CFM purifier in a 300 square foot room with an 8 foot ceiling provides about 5.9 equivalent air changes per hour at the rated airflow.",
      },
      {
        title: "Compare several room sizes instead of one marketing number",
        detail:
          "The same 235 CFM is about 3.5 eACH in 500 square feet with an 8 foot ceiling and about 1.8 eACH in 1,000 square feet. This makes the tradeoff between coverage and cleaning rate visible.",
      },
      {
        title: "Account for real operating conditions",
        detail:
          "CADR is typically associated with a high fan setting. Lower fan speeds, filter loading, room layout, door position, pollutant sources, and placement affect real performance.",
      },
    ],
    sections: [
      {
        kicker: "EPA sizing reference",
        title: "EPA's table provides a useful reality check",
        paragraphs: [
          "EPA lists minimum CADR estimates of 65 CFM for 100 square feet, 130 CFM for 200, 195 CFM for 300, 260 CFM for 400, 325 CFM for 500, and 390 CFM for 600, based on an 8 foot ceiling. The agency also notes that higher ceilings call for a larger unit.",
          "That table is not the only possible sizing method, but it is a useful neutral benchmark when manufacturer coverage claims use different test assumptions.",
        ],
      },
      {
        kicker: "PM20 worked example",
        title: "What a 400 m³/h CADR means in ordinary rooms",
        paragraphs: [
          "Dreame publishes a 400 m³/h CADR for the AirPursue PM20. That converts to about 235 CFM. Using the EPA table's approximate relationship, 235 CFM corresponds to roughly 360 square feet at an 8 foot ceiling. Using an equivalent air change calculation, it is about 5.9 eACH in 300 square feet, 3.5 eACH in 500 square feet, and 1.8 eACH in 1,000 square feet at an 8 foot ceiling.",
          "Dreame also publishes much larger coverage figures. Those numbers can use different time windows and performance definitions, so they should not be interpreted as the same thing as maintaining a high equivalent air change rate across the entire stated area. For comparison, 235 CFM in 1,690 square feet with a 9 foot ceiling is about 0.93 eACH from the purifier alone.",
        ],
      },
      {
        kicker: "Particles versus gases",
        title: "CADR does not settle every air quality question",
        paragraphs: [
          "EPA explains that CADR is a particle filtration metric. Gas and VOC removal depend on different filter media and do not have the same widely used consumer performance rating system. A purifier can therefore have a strong particle CADR without that number proving how quickly it removes formaldehyde, odors, or other gases.",
        ],
      },
    ],
    faq: [
      {
        question: "What is CADR?",
        answer:
          "Clean air delivery rate represents how much particle filtered air an air cleaner can deliver. Higher CADR generally supports a larger room or a higher cleaning rate in the same room.",
      },
      {
        question: "How do I calculate air changes per hour from CADR?",
        answer:
          "Convert CADR to cubic feet per minute if needed, multiply by 60, then divide by the room volume in cubic feet. The result is an equivalent air change rate attributable to the purifier at that airflow.",
      },
      {
        question: "Does a 1,700 square foot coverage claim mean the purifier cleans that space five times per hour?",
        answer:
          "Not necessarily. Coverage claims can be based on different time periods and assumptions. Use the CADR and room volume to calculate the equivalent air change rate you would actually expect from the rated clean airflow.",
      },
    ],
    sources: [
      {
        label: "U.S. EPA: Guide to air cleaners in the home",
        url: "https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home",
      },
      {
        label: "AHAM: Air cleaners and air changes per hour white paper",
        url: "https://ahamverifide.org/wp-content/uploads/2026/02/AHAM-White-Paper_Air-Cleaner-ACH_2025.pdf",
      },
      {
        label: "Dreame: AirPursue PM20 product specifications",
        url: "https://www.dreametech.com/products/pm20-air-purifier",
      },
    ],
    relatedSlugs: [
      "stop-drafts-from-windows-without-replacement",
      "prevent-bathroom-mold-growth-steps",
    ],
  },
];

export const featuredResourceSlugs = [
  "stop-drafts-from-windows-without-replacement",
  "fix-noisy-bathroom-exhaust-fan",
  "prevent-bathroom-mold-growth-steps",
];

export const featuredResources = featuredResourceSlugs
  .map((slug) => resources.find((resource) => resource.slug === slug))
  .filter((resource): resource is TroubleshootingResource => Boolean(resource));

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
