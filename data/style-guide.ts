import type { BrandColor, MotionRule, TypeStyle } from "@/types/style-guide"

export const brandColors: BrandColor[] = [
  {
    name: "Obsidian",
    token: "--carbon",
    hex: "#080706",
    usage: "Deep hero, footer, and primary technical surfaces.",
  },
  {
    name: "O'Leary Red",
    token: "--red",
    hex: "#a91620",
    usage: "Primary actions, product emphasis, and decisive navigation states.",
  },
  {
    name: "Measured Gold",
    token: "--gold",
    hex: "#c8943f",
    usage: "Rules, premium emphasis, logo-adjacent details, and quiet highlights.",
  },
  {
    name: "Signal Green",
    token: "--green",
    hex: "#245f45",
    usage: "Live-state and technical confidence signals, used sparingly.",
  },
  {
    name: "Warm Paper",
    token: "--paper",
    hex: "#f7efe2",
    usage: "Primary reading surface and long-form content background.",
  },
]

export const typeStyles: TypeStyle[] = [
  {
    name: "Display",
    sample: "Infrastructure with presence and clarity.",
    guidance: "Use the serif display face for major ideas and section titles.",
    className: "font-display text-3xl font-semibold leading-tight text-[var(--ink)]",
  },
  {
    name: "Interface",
    sample: "Mainnet-ready tooling for signing, accounts, events, and operations.",
    guidance: "Use the system sans stack for body copy, navigation, and controls.",
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
