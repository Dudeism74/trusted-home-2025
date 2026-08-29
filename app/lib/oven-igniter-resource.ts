import type { TroubleshootingResource } from "./resources";

export const ovenIgniterResource: TroubleshootingResource = {
  slug: "whirlpool-oven-igniter-glows-but-wont-heat",
  title: "Whirlpool Oven Igniter Glows but Won't Heat: A Hands-On Repair",
  metaTitle: "Whirlpool Oven Igniter Glows but Won't Heat: The Fix",
  metaDescription:
    "See how a Whirlpool WFG505M0MS0 that stalled near 155°F was repaired with OEM igniter W11590294, including an unexpected connector mismatch.",
  eyebrow: "Hands-on gas oven repair",
  dek: "The igniter glowed orange, but the bake burner did not reliably light. This documented repair shows the diagnosis, OEM part, connector mismatch, and successful final test.",
  quickAnswer:
    "A gas oven igniter can glow and still be too weak to open the oven safety valve reliably. On this Whirlpool WFG505M0MS0, replacing the original igniter with OEM part W11590294 restored prompt ignition, steady blue flame, a normal 350°F preheat, and reliable burner cycling.",
  principle:
    "The glow is only one part of the test. Watch whether the burner lights promptly and then cycles normally before clearing the igniter.",
  accent: "coral",
  steps: [
    {
      title: "Confirm the actual failure pattern",
      detail:
        "Verify that the cooktop has gas, the oven control responds, and the bake igniter glows while the burner fails to light promptly. Stop immediately if you smell unburned gas.",
    },
    {
      title: "Identify the exact range and replacement part",
      detail:
        "Use the model-and-serial label inside the lower drawer opening. This repair was completed on Whirlpool WFG505M0MS0 with genuine OEM igniter W11590294, which supersedes W11208965.",
    },
    {
      title: "Disconnect power and close the gas shutoff",
      detail:
        "Unplug the range and close the manual gas valve before removing the oven floor, igniter, or rear wiring cover. Do not loosen gas fittings for this repair.",
    },
    {
      title: "Compare the old and new connectors before cutting",
      detail:
        "The genuine replacement in this repair matched mechanically but did not plug into the original range harness. Compare every connector first and do not force incompatible housings together.",
    },
    {
      title: "Reassemble and test the complete heating cycle",
      detail:
        "After the new igniter is mounted, all wiring is protected, and the rear cover is installed, verify prompt ignition, an even blue flame, a normal 350°F preheat, and successful burner cycling.",
    },
  ],
  sections: [
    {
      kicker: "A misleading symptom",
      title: "Orange glow did not prove the original igniter was healthy",
      paragraphs: [
        "The original igniter visibly glowed, but the oven could stall near 155°F because the bake burner had not lit. On another attempt it eventually ignited after a long delay. That intermittent behavior pointed toward a weak igniter rather than a completely open one.",
        "The successful replacement test was decisive: the existing gas valve opened promptly with the new igniter, the burner produced an even blue flame, and the fully reassembled oven reached and maintained 350°F while cycling normally.",
      ],
    },
    {
      kicker: "Connector surprise",
      title: "The genuine replacement did not plug into this range harness",
      paragraphs: [
        "Whirlpool lists W11590294 as a hot-surface igniter that replaces W11208965, but the genuine part received for this repair had a connector that would not mate with the WFG505M0MS0 harness. The brackets and element position otherwise matched.",
        "The original plug was retained as a pigtail and joined to the new igniter leads with high-temperature ceramic connectors in the protected rear wiring compartment. This was an observed field solution, not a Whirlpool adapter procedure we were able to verify, so readers should compare parts first and use qualified service when uncertain.",
      ],
    },
    {
      kicker: "Final verification",
      title: "The repair passed more than a one-time ignition test",
      paragraphs: [
        "The new igniter lit the burner promptly, the flame remained even and blue, the oven completed a normal 350°F preheat, and the burner cycled and relit correctly after reassembly.",
        "The range continued working normally after the test. No gas valve, temperature sensor, or control board was replaced.",
      ],
    },
  ],
  faq: [
    {
      question: "Can an oven igniter glow and still be bad?",
      answer:
        "Yes. The original igniter on this range glowed orange but did not reliably cause the bake burner to light. The burner began operating normally after the igniter was replaced.",
    },
    {
      question: "Why did the stovetop work while the oven did not?",
      answer:
        "The surface burners and bake burner use different ignition components. Working cooktop burners confirmed that gas was available to the appliance, but they did not prove that the oven igniter could operate the bake safety valve.",
    },
    {
      question: "Does every W11590294 have the connector mismatch?",
      answer:
        "No conclusion can be drawn for every production run. The mismatch occurred between the genuine W11590294 received for this repair and the original harness in this WFG505M0MS0. Compare your old part, new part, and range harness before modifying anything.",
    },
    {
      question: "Where is the model number on the Whirlpool WFG505M0MS0?",
      answer:
        "On this range, the model-and-serial label is on the left interior wall of the lower drawer opening. Pull the lower drawer completely out to see it.",
    },
  ],
  sources: [
    {
      label: "Whirlpool: WFG505M0MS product information",
      url: "https://www.whirlpool.com/kitchen/cooking/ranges/gas/p.5.1-cu.-ft.-freestanding-gas-range-with-edge-to-edge-cooktop.wfg505m0ms.html",
    },
    {
      label: "Whirlpool Replacement Parts: W11590294 hot-surface igniter",
      url: "https://www.whirlpoolparts.com/PartDetail/Igniter/W11590294/4977065",
    },
    {
      label: "Whirlpool: Manuals and literature lookup",
      url: "https://www.whirlpool.com/services/manuals.html",
    },
  ],
  relatedSlugs: [
    "dryer-not-heating",
    "dishwasher-not-draining",
    "breaker-keeps-tripping",
  ],
};
