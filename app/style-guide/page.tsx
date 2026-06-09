import Image from "next/image"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { brandColors, motionRules, typeStyles } from "@/data/style-guide"

export default function StyleGuidePage() {
  return (
    <div className="bg-[#fbf7ef]">
      <SiteHeader />
      <main>
        <section className="luxury-grid bg-[#0a0706] pt-32 text-[#fff8ec] sm:pt-36">
          <div className="container pb-16 sm:pb-20">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase text-[#d6aa52] before:h-px before:w-9 before:bg-current before:content-['']">
                O&apos;Leary Labs style guide
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-none sm:text-6xl">
                Luxury restraint. Technical signal.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eadfc8]">
                The system should feel comfortable to private-client and
                luxury audiences while still reading as technically serious to
                engineers, founders, and protocol operators.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Brand Assets"
              title="Use the logo kit with contrast discipline."
              description="The combined transparent logo anchors light surfaces. The mark carries visual momentum in hero and product spaces. The app icon is reserved for browser and metadata contexts."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Primary header logo</CardTitle>
                  <CardDescription>
                    Use on ivory or light glass surfaces where the black
                    wordmark remains legible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-[#c79b45]/28 bg-[#fbf7ef] p-6">
                    <Image
                      src="/oleary_labs_logo_kit/full_logo_transparent.png"
                      alt="O'Leary Labs full logo"
                      width={2213}
                      height={420}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Browser icon</CardTitle>
                  <CardDescription>
                    Use the square icon for favicon, Apple touch icon, and
                    compact preview surfaces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-[#c79b45]/28 bg-white p-5">
                    <Image
                      src="/oleary_labs_logo_kit/app_icon.png"
                      alt="O'Leary Labs app icon"
                      width={1024}
                      height={1024}
                      className="mx-auto h-auto w-40"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-5 overflow-hidden border-[#f11225]/28 bg-[#07080a] text-[#f7f8fa]">
              <div className="grid gap-5 p-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div className="rounded-lg border border-[#d7dbe0]/16 bg-[#111419] p-5">
                  <img
                    src="/bracket/bracket-logo-transparent.svg"
                    alt="Bracket"
                    className="h-auto w-full max-w-md"
                  />
                </div>
                <div>
                  <Badge className="border-[#ff3d4b]/40 bg-[#f11225]/12 text-[#ff3d4b]">
                    Umbrella product system
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold text-[#f7f8fa]">
                    Bracket uses a redline tournament-ops voice.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#b7bdc5]">
                    Keep Bracket components black, silver, and action red with
                    squared geometry. It should feel like a broadcast command
                    center inside O&apos;Leary Labs, not a luxury sub-brand.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-[#f4ead8] py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Palette"
              title="Red, gold, black, and a green signal layer."
              description="Black creates authority, red carries brand energy, gold creates premium emphasis, and green stays reserved for technical confidence."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {brandColors.map((color) => (
                <Card key={color.name} className="overflow-hidden">
                  <div
                    className="h-24 border-b border-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <CardHeader>
                    <CardTitle className="text-lg">{color.name}</CardTitle>
                    <CardDescription className="mono">
                      {color.hex} / {color.token}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {color.usage}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Typography"
              title="Editorial elegance with clear operating text."
              description="Serif display type gives the luxury cue. System sans keeps the interface current and readable. Mono type should appear only when something is truly technical."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {typeStyles.map((style) => (
                <Card key={style.name}>
                  <CardHeader>
                    <Badge>{style.name}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className={style.className}>{style.sample}</p>
                    <p className="mt-5 text-sm leading-6 text-muted-foreground">
                      {style.guidance}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="luxury-grid bg-[#0a0706] py-16 text-[#fff8ec] sm:py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Components"
              title="Premium surfaces, active signals, and precise actions."
              description="Buttons should feel decisive. Cards should feel substantial. Badges and motion should communicate state without spectacle."
              inverted
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <Card className="border-[#d6aa52]/28 bg-[#120d0b] text-[#fff8ec]">
                <CardHeader>
                  <CardTitle className="text-[#fff8ec]">
                    Action examples
                  </CardTitle>
                  <CardDescription className="text-[#d8c5a1]">
                    Use red for decisive conversion and outline gold for
                    secondary technical exploration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button>
                    Primary action
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#d6aa52]/45 text-[#fff8ec] hover:bg-[#d6aa52]/12"
                  >
                    Secondary
                  </Button>
                </CardContent>
              </Card>
              <Card className="tech-panel border-[#d6aa52]/28 bg-[#120d0b] text-[#fff8ec]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="pulse-data h-2 w-2 rounded-full bg-[#2d8a5d]" />
                    <Badge variant="success">Live state</Badge>
                  </div>
                  <CardTitle className="text-[#fff8ec]">
                    Technical assurance surface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["FROST", "ERC-4337", "3 / 5"].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-[#d6aa52]/22 bg-black/35 p-4"
                      >
                        <CheckCircle2
                          className="mb-3 h-5 w-5 text-[#2d8a5d]"
                          aria-hidden="true"
                        />
                        <p className="mono text-sm text-[#d6aa52]">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7ef] py-16 sm:py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Motion"
              title="Motion should feel like instrumentation, not decoration."
              description="Animate with restraint: gold line sweeps, measured reveal, and green status pulses."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {motionRules.map((rule) => (
                <Card key={rule.name}>
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d6aa52]/30 bg-[#f4ead8] text-[#9b1219]">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle>{rule.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {rule.guidance}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
