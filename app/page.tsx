import {
  ArrowRight,
  Github,
  Mail,
  MessageCircle,
  Network,
  PackageOpen,
  Rocket,
  Shield,
  ShieldCheck,
  Swords,
  Trophy,
  Users,
} from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { SectionHeading } from "@/components/section-heading"
import { SignetThreshold } from "@/components/signet-threshold"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { contactLinks, metrics, projects, values } from "@/data/site"
import type { ContactLink, ValueItem } from "@/types/site"

const valueIcons: Record<ValueItem["icon"], typeof ShieldCheck> = {
  security: ShieldCheck,
  ship: Rocket,
  protocols: Network,
  developer: PackageOpen,
}

const contactIcons: Record<ContactLink["icon"], typeof Github> = {
  github: Github,
  updates: MessageCircle,
  signet: Shield,
}

const bracketRows = [
  { label: "Discovery", icon: Users },
  { label: "Pairings", icon: Swords },
  { label: "Results", icon: Trophy },
]

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured)
  const bracketProject = projects.find((project) => project.brand === "bracket")
  const supportingProjects = projects.filter(
    (project) => !project.featured && project.brand !== "bracket",
  )

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-brief">
            <article className="hero-record fade-up">
              <div className="hero-record-mark">
                <BrandLogo className="brand-frame" imageClassName="h-12 w-auto" />
              </div>
              <div className="hero-record-body">
                <p className="hero-kicker">O&apos;Leary Labs / software systems</p>
                <h1 className="hero-brief-title">
                  A team that works.
                </h1>
                <p className="hero-copy">
                  We build infrastructure for projects that need their technical layer to hold up under pressure.
                </p>
                <div className="hero-actions">
                  <Button asChild size="lg">
                    <a href="#projects">
                      View projects
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contact">
                      Start a conversation
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>

            <aside className="hero-docket fade-up" aria-label="Current project docket">
              <div className="docket-topline">
                <span>Current docket</span>
                <span>O&apos;L Labs</span>
              </div>
              <div className="docket-list">
                {featuredProject ? (
                  <a
                    className="docket-card primary"
                    href={featuredProject.links[0]?.href ?? "#projects"}
                  >
                    <span className="docket-index">01</span>
                    <span>
                      <strong>{featuredProject.title}</strong>
                      <span>{featuredProject.tagline}</span>
                    </span>
                    <Badge variant="success">{featuredProject.status}</Badge>
                  </a>
                ) : null}
                {bracketProject ? (
                  <a
                    className="docket-card"
                    href={bracketProject.links[0]?.href ?? "#projects"}
                  >
                    <span className="docket-index">02</span>
                    <span>
                      <strong>{bracketProject.title}</strong>
                      <span>{bracketProject.tagline}</span>
                    </span>
                    <Badge>{bracketProject.status}</Badge>
                  </a>
                ) : null}
              </div>
              <dl className="hero-metrics">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="hero-status">
                <span className="status-dot" />
                Active workstreams online
              </p>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Software for hard operating environments."
              description="The studio sits between engineering, product judgment, and execution. We build systems that can survive real usage, not just a clean demo."
            />

            <div className="about-grid">
              <div className="copy-column">
                <p>
                  Our work starts with the part of a project that cannot be
                  flimsy: account flows, internal tools, event operations,
                  system integrations, and infrastructure that needs to be
                  precise. We care as much about how a screen reads under
                  pressure as we do about the machinery behind it.
                </p>
                <p>
                  We prefer explicit states, quiet controls, and language that
                  says what the system is doing. The point is not to make
                  difficult software look simple; it is to make it easier to
                  trust.
                </p>
              </div>

              <div className="value-grid">
                {values.map((value) => {
                  const Icon = valueIcons[value.icon]

                  return (
                    <article className="value-card" key={value.title}>
                      <div className="value-icon">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="value-eyebrow">{value.eyebrow}</p>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section featured">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Current work, built from the same habits."
              description="Signet and Bracket are different products, but they come from the same discipline: make the hard parts reliable, make the working surface clear, and ship the parts people actually need."
            />

            <div className="project-stack">
              {featuredProject ? (
                <article className="project-card primary">
                  <div className="project-grid">
                    <div className="project-body">
                      <Badge variant="success">{featuredProject.status}</Badge>
                      <div className="signet-lockup">
                        <img src="/logo-mark.svg" alt="" />
                        <div>
                          <strong>Signet</strong>
                          <span>Secure account infrastructure</span>
                        </div>
                      </div>
                      <h3>{featuredProject.title}</h3>
                      <p>{featuredProject.tagline}</p>
                      <p>{featuredProject.description}</p>
                      <div className="project-actions">
                        {featuredProject.links.map((link) => (
                          <Button
                            key={link.href}
                            asChild
                            variant={link.kind === "primary" ? "default" : "outline"}
                          >
                            <a href={link.href}>
                              {link.label}
                              <ArrowRight
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="signet-visual">
                      <SignetThreshold />
                    </div>
                  </div>
                </article>
              ) : null}

              {bracketProject ? (
                <article className="project-card bracket-card">
                  <div className="project-grid">
                    <div className="project-body">
                      <Badge>{bracketProject.status}</Badge>
                      <div className="bracket-lockup">
                        <img
                          src="/bracket/bracket-logomark-transparent.svg"
                          alt=""
                        />
                        <img
                          src="/bracket/bracket-wordmark-transparent.svg"
                          alt="Bracket"
                        />
                      </div>
                      <h3>{bracketProject.tagline}</h3>
                      <p>{bracketProject.description}</p>
                      <div className="proof-grid">
                        {bracketProject.proofPoints?.map((point) => (
                          <div key={point}>{point}</div>
                        ))}
                      </div>
                      <div className="project-actions">
                        {bracketProject.links.map((link) => (
                          <Button key={link.href} asChild>
                            <a href={link.href}>
                              {link.label}
                              <ArrowRight
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="bracket-visual">
                      <div className="bracket-command">
                        <img
                          src="/bracket/bracket-logomark-with-background.svg"
                          alt=""
                        />
                        <p>
                          Public discovery, registration, match operations, and
                          fast event-day reads.
                        </p>
                      </div>
                      <div className="bracket-rows">
                        {bracketRows.map((item) => {
                          const Icon = item.icon

                          return (
                            <div className="bracket-row" key={item.label}>
                              <span className="inline-flex items-center gap-2">
                                <Icon className="h-4 w-4" aria-hidden="true" />
                                {item.label}
                              </span>
                              <span>Ready</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              ) : null}

              <div className="support-grid">
                {supportingProjects.map((project) => (
                  <article className="support-card" key={project.title}>
                    <Badge variant="warning">{project.status}</Badge>
                    <h3 className="mt-5">{project.title}</h3>
                    <p>{project.tagline}</p>
                    <p>{project.description}</p>
                    <div className="project-actions">
                      {project.links.map((link) => (
                        <Button key={link.href} asChild variant="outline">
                          <a href={link.href}>{link.label}</a>
                        </Button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section tint">
          <div className="container contact-layout">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Bring the system that needs to work better."
                description="Reach out about product infrastructure, internal tooling, operations software, Signet, Bracket, or a surface that needs to become sharper and easier to run."
              />
              <a className="mt-8 inline-flex items-center gap-2 font-bold" href="mailto:hello@olearylabs.com">
                <Mail className="h-5 w-5" aria-hidden="true" />
                hello@olearylabs.com
              </a>
            </div>

            <div className="contact-card-grid">
              {contactLinks.map((link) => {
                const Icon = contactIcons[link.icon]

                return (
                  <a className="contact-card" key={link.href} href={link.href}>
                    <span className="contact-icon">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{link.title}</strong>
                      <span>{link.description}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
