import Image from "next/image"
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
          <div className="container hero-layout">
            <div className="fade-up">
              <BrandLogo className="brand-frame" imageClassName="h-12 w-auto" />
              <p className="hero-kicker">Protocol systems studio</p>
              <h1 className="hero-title">
                Infrastructure with presence, clarity, and serious depth.
              </h1>
              <p className="hero-copy">
                O&apos;Leary Labs builds focused infrastructure products for the
                onchain economy. The work is technical, but the experience
                should feel composed, legible, and credible from the first read.
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

            <aside className="hero-panel fade-up" aria-label="Network summary">
              <Image
                src="/oleary_labs_logo_kit/logomark_transparent.png"
                alt=""
                width={641}
                height={659}
                className="mx-auto h-auto w-44"
                priority
              />
              <dl className="metric-row">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="hero-status">
                <span className="status-dot" />
                Threshold systems online
              </p>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Readable interfaces for difficult systems."
              description="The studio sits between protocol engineering and product judgment. We build tools that can stand up to technical scrutiny while remaining easy to understand."
            />

            <div className="about-grid">
              <div className="copy-column">
                <p>
                  Our work starts with primitives: signing, accounts, event
                  operations, and infrastructure workflows that need to be
                  precise. We care as much about the operator&apos;s read of a
                  screen as we do about the cryptographic or systems layer
                  underneath it.
                </p>
                <p>
                  The new site follows that philosophy. Fewer competing
                  treatments, stronger typography, calmer surfaces, and visual
                  accents that help orient the reader instead of asking for
                  attention.
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

        <section id="projects" className="section dark">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Two products, one standard for clarity."
              description="Signet remains the primary infrastructure project. Bracket sits beside it as a focused tournament operations product under the O'Leary Labs umbrella."
              inverted
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
                          <span>Original threshold network mark</span>
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
                title="Bring the system that needs a better read."
                description="Reach out about Signet, Bracket, protocol infrastructure, or a product surface that needs to become sharper and easier to operate."
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
