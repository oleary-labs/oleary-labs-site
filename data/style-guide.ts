import type { BrandColor, MotionRule, TypeStyle } from "@/types/style-guide"

export const brandColors: BrandColor[] = [
  {
    name: "Smoked Pearl",
    token: "--pearl",
    hex: "#eee8dd",
    usage: "Primary page atmosphere and broad sections where pure white would feel too stark.",
  },
  {
    name: "Old Graphite",
    token: "--graphite",
    hex: "#211d19",
    usage: "Dense type, icon grounds, technical hardware, and controlled dark accents.",
  },
  {
    name: "Oxblood Red",
    token: "--red",
    hex: "#91131b",
    usage: "Primary actions, product emphasis, and decisive navigation states.",
  },
  {
    name: "Aged Brass",
    token: "--gold",
    hex: "#b9863f",
    usage: "Rules, premium emphasis, logo-adjacent details, and quiet highlights.",
  },
  {
    name: "Deep Signal Green",
    token: "--green",
    hex: "#1f533f",
    usage: "Live-state and technical confidence signals, used sparingly.",
  },
]

export const typeStyles: TypeStyle[] = [
  {
    name: "Display",
    sample: "Infrastructure with presence and clarity.",
    guidance: "Use the heavier oldstyle serif stack for major ideas and section titles.",
    className: "font-display text-3xl font-bold leading-tight text-[var(--ink)]",
  },
  {
    name: "Interface",
    sample: "Mainnet-ready tooling for signing, accounts, events, and operations.",
    guidance: "Use the humanist sans stack for body copy, navigation, and controls.",
    className: "text-base leading-8 text-[var(--ink-soft)]",
  },
  {
    name: "Technical",
    sample: "threshold: 3 / 5 | stack: FROST | account: ERC-4337",
    guidance: "Use mono sparingly for proofs, metrics, and protocol details.",
    className: "mono text-sm text-[var(--red)]",
  },
]

export const motionRules: MotionRule[] = [
  {
    name: "Slow reveal",
    guidance: "Use short upward fades only for first-load hierarchy and major section entry.",
  },
  {
    name: "Status only",
    guidance: "Use small status indicators for live systems. Avoid decorative motion loops.",
  },
  {
    name: "Hover response",
    guidance: "Use modest lifts and border changes to clarify clickable surfaces.",
  },
]
