export type NavItem = {
  label: string
  href: string
}

export type ValueItem = {
  title: string
  description: string
  icon: "security" | "ship" | "protocols" | "developer"
}

export type ProjectLink = {
  label: string
  href: string
  kind?: "primary" | "secondary"
}

export type Project = {
  title: string
  status: "Testnet Live" | "In Development"
  tagline: string
  description: string
  featured?: boolean
  links: ProjectLink[]
}

export type ContactLink = {
  title: string
  description: string
  href: string
  icon: "github" | "updates" | "signet"
}
