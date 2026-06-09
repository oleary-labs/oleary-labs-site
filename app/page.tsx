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
import { contactLinks, projects, values } from "@/data/site"
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
    <>
      <SiteHeader />
      <main>
        <section className="hero-surface border-b border-border pt-32 sm:pt-36">
          <div className="container pb-20 sm:pb-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary">
                Blockchain &amp; Web3 Studio
              </p>
              <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-none text-foreground sm:text-6xl">
                O&apos;Leary Labs
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                We design and ship the protocol infrastructure and bespoke
                applications that make onchain systems practical, starting with
                threshold cryptography, smart account tooling, and novel payment
                systems.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#projects">
                    See our work
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href="#contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-background py-20 sm:py-24">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Infrastructure that earns trust by design."
              description="O'Leary Labs is a small, focused team building protocol-level tools for the crypto ecosystem."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  We believe the next wave of crypto adoption depends on better
                  primitives, not more platforms. Our work sits at the
                  intersection of applied cryptography, smart contract systems,
                  and developer experience.
                </p>
                <p>
                  Every project we ship is designed to be composable, auditable,
                  and useful from day one. We build for production systems and
                  the teams that need to operate them.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = valueIcons[value.icon]

                  return (
                    <Card key={value.title}>
                      <CardHeader>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
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

        <section id="projects" className="bg-[#101b2a] py-20 text-white sm:py-24">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="What we're building."
              description="Protocol infrastructure for key management, threshold signing, and smart accounts."
              inverted
            />
            <div className="mt-12 grid gap-5">
              {featuredProject ? (
                <Card className="overflow-hidden border-slate-700 bg-[#152437] text-white shadow-none">
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-6 sm:p-8">
                      <Badge variant="success">{featuredProject.status}</Badge>
                      <h3 className="mt-5 text-3xl font-bold">
                        {featuredProject.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">
                        {featuredProject.tagline}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
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
                                : "border-slate-600 bg-transparent text-white hover:bg-white/10"
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
                    className="border-slate-700 bg-[#152437] text-white shadow-none"
                  >
                    <CardHeader>
                      <Badge variant="warning" className="w-fit">
                        {project.status}
                      </Badge>
                      <CardTitle className="text-2xl text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {project.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      {project.links.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          variant="outline"
                          className="border-slate-600 bg-transparent text-white hover:bg-white/10"
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

        <section id="contact" className="bg-background py-20 sm:py-24">
          <div className="container">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk."
              description="Interested in running a Signet node, integrating threshold signing, or collaborating on protocol research? Reach out."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  We&apos;re always open to conversations about cryptography,
                  protocol design, and the future of key management. Whether
                  you&apos;re a developer, a potential node operator, or just
                  curious, we&apos;d love to hear from you.
                </p>
                <a
                  href="mailto:hello@olearylabs.com"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-primary"
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
                      <Card className="transition-colors hover:border-primary/45 hover:bg-secondary/40">
                        <CardHeader className="flex-row items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
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
    </>
  )
}
