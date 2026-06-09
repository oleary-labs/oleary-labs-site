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
} from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { SignetThreshold } from "@/components/signet-threshold"
import { SectionHeading } from "@/components/section-heading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured)
  const supportingProjects = projects.filter((project) => !project.featured)

  return (
    <div className="luxury-page">
      <SiteHeader />
      <main>
        <section className="hero-surface luxury-grid pt-32 text-[#fff8ec] sm:pt-36">
          <div className="container pb-16 sm:pb-20">
            <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
              <div className="animate-in-up max-w-3xl">
                <div className="mb-8 w-fit rounded-lg border border-[#d6aa52]/24 bg-[#fbf7ef]/96 px-4 py-3 shadow-[0_24px_80px_rgba(10,7,6,0.22)]">
                  <BrandLogo imageClassName="h-12 w-auto" />
                </div>
                <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase text-[#d6aa52] before:h-px before:w-9 before:bg-current before:content-['']">
                  Luxury-tech protocol studio
                </p>
                <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-none sm:text-6xl">
                  O&apos;Leary Labs
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#eadfc8] sm:text-xl">
                  We build protocol infrastructure for clients who expect
                  precision, discretion, and technical depth. The experience is
                  refined; the underlying systems are unapologetically advanced.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href="#projects">
                      Explore the systems
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#d6aa52]/60 text-[#fff8ec] hover:bg-[#d6aa52]/12"
                  >
                    <a href="/style-guide">
                      View style guide
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="animate-in-up lg:pb-4">
                <div className="relative overflow-hidden rounded-lg border border-[#d6aa52]/26 bg-black/44 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur">
                  <div className="metal-line mb-5" />
                  <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
                    <div className="rounded-lg border border-[#d6aa52]/20 bg-[#fbf7ef] p-4">
                      <Image
                        src="/oleary_labs_logo_kit/logomark_transparent.png"
                        alt=""
                        width={641}
                        height={659}
                        className="mx-auto h-auto w-full max-w-48"
                        priority
                      />
                    </div>
                    <div>
                      <p className="mono text-sm text-[#d6aa52]">
                        live network posture
                      </p>
                      <div className="mt-4 grid gap-3">
                        {metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex items-center justify-between border-b border-[#d6aa52]/18 pb-3"
                          >
                            <span className="text-sm text-[#d8c5a1]">
                              {metric.label}
                            </span>
                            <span className="mono text-sm text-[#fff8ec]">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-sm text-[#d8c5a1]">
                        <span className="pulse-data h-2 w-2 rounded-full bg-[#2d8a5d]" />
                        threshold systems online
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#fbf7ef] py-20 sm:py-24">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Private-client polish, protocol-grade engineering."
              description="O'Leary Labs is a focused team building infrastructure for teams that need security, taste, and deep technical fluency in the same room."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div className="space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  The next wave of adoption will be won by infrastructure that
                  feels understandable without becoming simplistic. We build for
                  sophisticated buyers, careful operators, and technical teams
                  that need primitives they can audit.
                </p>
                <p>
                  The visual language follows that same principle: black-tie
                  restraint, metallic confidence, and enough data-forward detail
                  to signal that the elegance is backed by real systems.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = valueIcons[value.icon]

                  return (
                    <Card
                      key={value.title}
                      className="group border-[#c79b45]/28 bg-[#fffbf3]/88 transition-transform duration-300 hover:-translate-y-1 hover:border-[#9b1219]/35"
                    >
                      <CardHeader>
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d6aa52]/28 bg-[#f4ead8] text-[#9b1219]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <p className="mono text-xs uppercase text-[#8f151a]">
                          {value.eyebrow}
                        </p>
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{value.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="luxury-grid bg-[#0a0706] py-20 text-[#fff8ec] sm:py-24">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Systems with a ceremonial surface and a rigorous core."
              description="Protocol infrastructure for key management, threshold signing, and smart accounts."
              inverted
            />
            <div className="mt-12 grid gap-5">
              {featuredProject ? (
                <Card className="overflow-hidden border-[#d6aa52]/28 bg-[#120d0b]/94 text-[#fff8ec] shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-6 sm:p-8">
                      <Badge variant="success">{featuredProject.status}</Badge>
                      <h3 className="mt-5 text-3xl font-semibold text-[#fff8ec]">
                        {featuredProject.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#eadfc8]">
                        {featuredProject.tagline}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-[#d8c5a1] sm:text-base">
                        {featuredProject.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-3">
                        {featuredProject.links.map((link) => (
                          <Button
                            key={link.href}
                            asChild
                            variant={
                              link.kind === "primary" ? "default" : "outline"
                            }
                            className={
                              link.kind === "primary"
                                ? ""
                                : "border-[#d6aa52]/45 text-[#fff8ec] hover:bg-[#d6aa52]/12"
                            }
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
                    <SignetThreshold className="m-4 lg:m-5" />
                  </div>
                </Card>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                {supportingProjects.map((project) => (
                  <Card
                    key={project.title}
                    className="border-[#d6aa52]/24 bg-[#120d0b]/88 text-[#fff8ec] shadow-none"
                  >
                    <CardHeader>
                      <Badge variant="warning" className="w-fit">
                        {project.status}
                      </Badge>
                      <CardTitle className="text-2xl text-[#fff8ec]">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-[#eadfc8]">
                        {project.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-[#d8c5a1]">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      {project.links.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          variant="outline"
                          className="border-[#d6aa52]/45 text-[#fff8ec] hover:bg-[#d6aa52]/12"
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
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#f4ead8] py-20 sm:py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Bring us the hard systems problem."
                  description="Interested in running a Signet node, integrating threshold signing, or collaborating on protocol research? Reach out."
                />
                <a
                  href="mailto:hello@olearylabs.com"
                  className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-[#0a0706] transition-colors hover:text-[#9b1219]"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  hello@olearylabs.com
                </a>
              </div>
              <div className="grid gap-4">
                {contactLinks.map((link) => {
                  const Icon = contactIcons[link.icon]

                  return (
                    <a key={link.href} href={link.href} className="block">
                      <Card className="border-[#c79b45]/32 bg-[#fffbf3]/90 transition-transform duration-300 hover:-translate-y-1 hover:border-[#9b1219]/40">
                        <CardHeader className="flex-row items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#d6aa52]/30 bg-[#f4ead8] text-[#9b1219]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <CardTitle className="text-base">
                              {link.title}
                            </CardTitle>
                            <CardDescription>
                              {link.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
