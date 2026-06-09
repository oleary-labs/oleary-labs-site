import type { ContactLink, Metric, NavItem, Project, ValueItem } from "@/types/site"

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

export const values: ValueItem[] = [
  {
    title: "Security First",
    eyebrow: "Trust",
    description:
      "Threshold cryptography and auditable contracts presented with boardroom clarity.",
    icon: "security",
  },
  {
    title: "Ship to Mainnet",
    eyebrow: "Execution",
    description:
      "Production-grade code from day one, with the polish expected from a premium advisory team.",
    icon: "ship",
  },
  {
    title: "Open Protocols",
    eyebrow: "Standards",
    description:
      "Standards-based, composable, and permissionless. Built on open specs like FROST and ERC-4337.",
    icon: "protocols",
  },
  {
    title: "Developer-Centric",
    eyebrow: "Craft",
    description:
      "Clean APIs, precise docs, and tools that keep protocol complexity out of the SDK.",
    icon: "developer",
  },
]

export const metrics: Metric[] = [
  { label: "Signing threshold", value: "3 / 5" },
  { label: "Core stack", value: "FROST" },
  { label: "Account layer", value: "4337" },
]

export const projects: Project[] = [
  {
    title: "Signet",
    status: "Testnet Live",
    brand: "signet",
    tagline:
      "Threshold signing for social-login key management.",
    description:
      "Signet is a decentralized marketplace of signing providers that uses FROST threshold cryptography to split private keys across independent nodes. Developers get social-login auth with no single custodian, plus a smart account ready from first sign-in.",
    featured: true,
    links: [
      {
        label: "Launch Testnet",
        href: "https://signet-testnet.olearylabs.com",
        kind: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/oleary-labs/signet-protocol",
      },
      {
        label: "Docs",
        href: "#contact",
      },
    ],
  },
  {
    title: "Bracket",
    status: "Public Board",
    brand: "bracket",
    tagline: "Tournament operations for the heat of event day.",
    description:
      "Bracket gives organizers one place to publish public events, manage divisions, run check-in, generate pairings, operate timers, and report results. It brings a redline broadcast-command-center feel to the practical work of running competitive events.",
    proofPoints: ["Publish events", "Manage divisions", "Generate pairings"],
    links: [
      {
        label: "Open Bracket",
        href: "https://bracket.sh",
        kind: "primary",
      },
    ],
  },
  {
    title: "Signet Wallet",
    status: "In Development",
    brand: "signet",
    tagline: "ERC-4337 smart account with modular plugins.",
    description:
      "Kernel v3 based smart account with ERC-7579 module support. Session keys, gas sponsorship, and batch operations, all backed by Signet threshold signing.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/oleary-labs/signet-wallet",
      },
    ],
  },
  {
    title: "Signet Bundler",
    status: "In Development",
    brand: "signet",
    tagline: "Minimal ERC-4337 bundler for UserOperations.",
    description:
      "A lightweight bundler that submits UserOperations on behalf of Signet smart accounts. Minimal dependencies, fast inclusion, and built to pair with the Signet signing flow.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/oleary-labs/signet-min-bundler",
      },
    ],
  },
]

export const contactLinks: ContactLink[] = [
  {
    title: "GitHub",
    description: "Open source repos and protocol code",
    href: "https://github.com/oleary-labs",
    icon: "github",
  },
  {
    title: "X",
    description: "Updates and protocol notes",
    href: "https://x.com/olearylabs",
    icon: "updates",
  },
  {
    title: "Signet Testnet",
    description: "Try threshold signing today",
    href: "https://signet-testnet.olearylabs.com",
    icon: "signet",
  },
]
