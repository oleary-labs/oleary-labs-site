import type { BrandColor, MotionRule, TypeStyle } from "@/types/style-guide"

export const brandColors: BrandColor[] = [
  {
    name: "Obsidian",
    token: "--foreground",
    hex: "#0a0706",
    usage: "Primary luxury canvas, footer, and high-confidence product surfaces.",
  },
  {
    name: "O'Leary Red",
    token: "--primary",
    hex: "#9b1219",
    usage: "Primary actions, brand moments, active states, and decisive calls.",
  },
  {
    name: "Gilded Gold",
    token: "--accent",
    hex: "#d6aa52",
    usage: "Premium emphasis, rules, highlights, status borders, and logo-adjacent details.",
  },
  {
    name: "Signal Green",
    token: "undercurrent",
    hex: "#215f43",
    usage: "Technical confidence, live status, successful operations, and data accents.",
  },
  {
    name: "Ivory Ledger",
    token: "--background",
    hex: "#fbf7ef",
    usage: "Readable calm surfaces for luxury audiences and long-form content.",
  },
]

export const typeStyles: TypeStyle[] = [
  {
    name: "Display",
    sample: "Protocol infrastructure with private-client polish.",
    guidance: "Use Georgia for brand headlines and editorial section titles.",
    className: "font-display text-3xl font-semibold leading-tight",
  },
  {
    name: "Interface",
    sample: "Mainnet-ready tooling for signing, accounts, and payments.",
    guidance: "Use the system sans stack for body copy, navigation, and controls.",
    className: "text-base leading-8 text-muted-foreground",
  },
  {
    name: "Technical",
    sample: "threshold: 3 / 5 | stack: FROST | account: ERC-4337",
    guidance: "Use mono sparingly for proofs, metrics, and protocol details.",
    className: "mono text-sm text-[#d6aa52]",
  },
]

export const motionRules: MotionRule[] = [
  {
    name: "Slow reveal",
    guidance: "Use short upward fades for first-load hierarchy and keep motion below one second.",
  },
  {
    name: "Signal sweep",
    guidance: "Use gold line sweeps on technical surfaces to imply infrastructure activity.",
  },
  {
    name: "Status pulse",
    guidance: "Use green pulses only for live or successful system states.",
  },
]
