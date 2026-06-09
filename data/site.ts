import type { ContactLink, Metric, NavItem, Project, ValueItem } from "@/types/site"

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

export const values: ValueItem[] = [
  {
    title: "Systems That Hold",
    eyebrow: "Trust",
    description:
      "Critical paths, edge cases, and operational risk handled with the seriousness they deserve.",
    icon: "security",
  },
  {
    title: "Ship the Thing",
    eyebrow: "Execution",
    description:
      "Production-grade software with the taste, pacing, and follow-through expected from a senior team.",
    icon: "ship",
  },
  {
    title: "Integration Fluent",
    eyebrow: "Standards",
    description:
      "APIs, identity, payments, data flows, workflow tools, and specialized infrastructure where the job calls for it.",
    icon: "protocols",
  },
  {
    title: "Operator-Centered",
    eyebrow: "Craft",
    description:
      "Interfaces, docs, and internal tools built for the people who have to use them repeatedly.",
    icon: "developer",
  },
]

export const metrics: Metric[] = [
  { label: "Delivery mode", value: "Build / refine" },
  { label: "Project range", value: "Infra + apps" },
  { label: "Current focus", value: "Signet / Bracket" },
]

export const projects: Project[] = [
  {
    title: "Signet",
    status: "Testnet Live",
    brand: "signet",
    tagline:
      "Secure signing and account access for product teams.",
    description:
      "Signet is a secure signing system for products that need strong account access without making users think about keys. Under the hood it splits trust across independent providers; on the surface it gives teams a cleaner way to bring people into an application.",
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
    tagline: "Event operations for the heat of the day.",
    description:
      "Bracket gives organizers one place to publish events, manage divisions, run check-in, generate pairings, operate timers, and report results. It is the kind of practical operations software we like building: clear, fast, and useful when the room is busy.",
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
    tagline: "Specialized account system with modular controls.",
    description:
      "A modular account system built for session keys, sponsorship, and batch operations, backed by the Signet signing layer where strong account infrastructure matters.",
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
    tagline: "Lean transaction service for Signet accounts.",
    description:
      "A lightweight service for moving Signet account operations through the system with minimal dependencies, fast inclusion, and a narrow operational surface.",
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
    description: "Product code, infrastructure, and experiments",
    href: "https://github.com/oleary-labs",
    icon: "github",
  },
  {
    title: "X",
    description: "Build notes and product updates",
    href: "https://x.com/olearylabs",
    icon: "updates",
  },
  {
    title: "Signet Testnet",
    description: "Try the current signing system",
    href: "https://signet-testnet.olearylabs.com",
    icon: "signet",
  },
]
