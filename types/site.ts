export type NavItem = {
  label: string
  href: string
}

export type ValueItem = {
  title: string
  description: string
  eyebrow: string
  icon: "security" | "ship" | "protocols" | "developer"
}

export type ProjectLink = {
  label: string
  href: string
  kind?: "primary" | "secondary"
}

export type Project = {
  title: string
  status: string
  tagline: string
  description: string
  brand: "signet" | "bracket"
  featured?: boolean
  proofPoints?: string[]
  links: ProjectLink[]
}

export type ContactLink = {
  title: string
  description: string
  href: string
  icon: "github" | "updates" | "signet"
}

export type Metric = {
  label: string
  value: string
}
