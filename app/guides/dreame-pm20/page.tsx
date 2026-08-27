import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";
import { getProduct } from "../../lib/products";

const baseProduct = getProduct("dreame-pm20")!;

const product = {
  ...baseProduct,
  manufacturerUrl: "https://www.dreametech.com/products/pm20-air-purifier",
  manufacturerLabel: "Dreame AirPursue PM20 specifications",
  reviewedDate: "2026-08-27",
  reviewedDateLabel: "August 27, 2026",
  metaTitle: "Dreame AirPursue PM20: CADR, Room Size, and Tradeoffs",
  metaDescription:
    "A CADR-based Dreame AirPursue PM20 analysis with room-size math, equivalent air changes per hour, EPA sizing context, noise, filtration limits, and buying tradeoffs.",
  dek:
    "A specification-based analysis that checks Dreame's large coverage claims against the published 400 m³/h particle CADR and room-volume math.",
  quickAnswer:
    "The PM20's published 400 m³/h particle CADR converts to about 235 CFM. That is substantial clean-air airflow for a portable purifier, but CADR is more useful for sizing than a headline square-foot claim. Using the U.S. EPA's current CADR sizing table as a reference, 235 CFM falls between the 300 square foot and 400 square foot entries, which is roughly a 360 square foot reference at an 8 foot ceiling by interpolation. In a 300 square foot room with an 8 foot ceiling, the same CADR is about 5.9 equivalent air changes per hour. In 500 square feet, it is about 3.5.",
  bestFor:
    "A roughly 300 to 500 square foot living area where particle filtration matters and the combined purifier, directed airflow, sensors, and supplemental heat are useful.",
  skipIf:
    "You are choosing mainly from the largest square-foot coverage headline, need a high equivalent air change rate across a very large open area, or want a simpler purifier with lower complexity and potentially lower ownership cost.",
  bottomLine:
    "The PM20 looks more convincing when evaluated from its 400 m³/h CADR than when judged from a giant coverage number. About 235 CFM can provide roughly 5.9 equivalent air changes per hour in a 300 square foot room with an 8 foot ceiling, about 3.5 in 500 square feet, and about 1.8 in 1,000 square feet. Dreame also lists a recommended space of 1,690 square feet. That figure can describe a different cleaning interval or coverage assumption and should not be treated as the same thing as maintaining a high air change rate across the entire space. At 1,690 square feet with a 9 foot ceiling, 235 CFM is about 0.93 equivalent air changes per hour from the purifier alone. The product can still circulate and clean air in a large space, but it will do so more slowly. The real buying case is its combination of strong particle CADR, directed airflow, sensing, and supplemental heat in one movable appliance.",
  facts: [
    {
      label: "Particle CADR",
      value: "400 m³/h, which converts to about 235 CFM",
    },
    {
      label: "EPA sizing context",
      value:
        "About a 360 sq ft reference at an 8 ft ceiling by interpolating the EPA CADR table",
    },
    {
      label: "Equivalent air changes",
      value:
        "About 5.9 eACH at 300 sq ft, 3.5 at 500 sq ft, and 1.8 at 1,000 sq ft with 8 ft ceilings",
    },
    {
      label: "Dreame listed space",
      value:
        "1,690 sq ft; at a 9 ft ceiling, 235 CFM is about 0.93 equivalent air changes per hour from the purifier alone",
    },
    {
      label: "Published noise",
      value: "32 dB(A) in Sleep Mode and up to 60 dB(A) maximum",
    },
    {
      label: "PM20 functions",
      value:
        "Particle filtration, directed airflow, air-quality sensing, fan modes, and supplemental PTC heat",
    },
  ],
  strengths: [
    "The published 400 m³/h particle CADR is about 235 CFM, enough for roughly 5.9 equivalent air changes per hour in a 300 square foot room with an 8 foot ceiling.",
    "Directional airflow can send cleaned air toward occupied areas instead of relying only on mixing near the purifier.",
    "The sensor package monitors several air-quality and comfort variables while the app, remote, display, and voice controls provide multiple ways to operate the unit.",
    "The PM20 adds supplemental PTC heat, giving the appliance a second comfort role during colder weather.",
  ],
  tradeoffs: [
    "Dreame's large coverage figures use different assumptions than a high equivalent air change target. The same 235 CFM cleans a very large room more slowly than a smaller room.",
    "CADR is primarily a particle-cleaning metric. It does not by itself establish how quickly the purifier removes gases, VOCs, or odors.",
    "A purifier, fan, sensor package, and heater in one appliance bring more complexity than a basic particle purifier, and replacement filter cost and availability matter to long-term value.",
    "Dreame publishes a maximum noise figure of 60 dB(A), so buyers who are sensitive to fan noise should consider the required operating speed as well as the Sleep Mode figure.",
  ],
  useCases: [
    {
      title: "Strong particle cleaning in a 300 square foot room",
      detail:
        "At the published CADR, the room-volume math is about 5.9 equivalent air changes per hour with an 8 foot ceiling, before accounting for real-world placement and operating conditions.",
    },
    {
      title: "Moderate cleaning rate in a 500 square foot living area",
      detail:
        "The same CADR is about 3.5 equivalent air changes per hour at an 8 foot ceiling. That can still be useful, but it is a different performance target than the smaller-room example.",
    },
    {
      title: "Large open space with realistic expectations",
      detail:
        "The PM20 can still move and filter air in a larger area, but the equivalent air change rate falls as room volume grows. Treat very large coverage numbers as a slower-cleaning scenario rather than the same cleaning rate across more space.",
    },
  ],
  checks: [
    "Measure the room's floor area and ceiling height so you can calculate room volume instead of relying only on the largest coverage claim.",
    "Decide how much particle cleaning rate you want, then compare the published CADR with that room volume.",
    "Check current replacement filter price and availability because filtration performance creates an ongoing maintenance cost.",
    "Decide whether directed airflow, sensors, and supplemental heat justify the added size, complexity, and maximum noise compared with a simpler purifier.",
  ],
  faq: [
    {
      question: "What is the Dreame PM20 CADR?",
      answer:
        "Dreame publishes a particle CADR of 400 cubic meters per hour. That converts to about 235 cubic feet per minute.",
    },
    {
      question: "What does the 1,690 square foot Dreame coverage figure mean?",
      answer:
        "It should not be read as meaning the purifier maintains the same cleaning rate it would in a much smaller room. Coverage claims can use different time windows and assumptions. At 1,690 square feet with a 9 foot ceiling, the published 235 CFM is about 0.93 equivalent air changes per hour from the purifier alone.",
    },
    {
      question: "How large a room does 235 CFM match in the EPA sizing table?",
      answer:
        "EPA lists 195 CFM for 300 square feet and 260 CFM for 400 square feet with an 8 foot ceiling. Interpolating between those entries puts 235 CFM at roughly 360 square feet as a sizing reference.",
    },
    {
      question: "Does CADR tell me how well the PM20 removes VOCs and gases?",
      answer:
        "No. CADR is primarily a particle-cleaning metric. Gas and VOC performance depends on other filter media and test methods, so the particle CADR should not be treated as a gas-removal rate.",
    },
    {
      question: "Will the PM20 replace a whole-home HVAC or ventilation system?",
      answer:
        "No. It is a portable recirculating room appliance. It does not provide outdoor ventilation and is not a replacement for whole-home heating, cooling, or a properly designed HVAC filtration system.",
    },
    {
      question: "Has Trusted Home Essentials tested the PM20 in a home or laboratory?",
      answer:
        "No. This analysis uses Dreame's published specifications, independent EPA and AHAM sizing guidance, and transparent room-volume calculations. It is not a hands on or laboratory performance test.",
    },
  ],
};

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: { canonical: `/guides/${product.slug}` },
  openGraph: {
    type: "article",
    title: product.metaTitle,
    description: product.metaDescription,
    url: `/guides/${product.slug}`,
    images: [{ url: product.image, alt: product.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: product.metaTitle,
    description: product.metaDescription,
    images: [product.image],
  },
};

export default function DreamePm20Guide() {
  return <GuidePage product={product} />;
}
