import Image from "next/image"

import { SectionHeading } from "@/components/section-heading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { brandColors, motionRules, typeStyles } from "@/data/style-guide"

export default function StyleGuidePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="guide-hero">
          <div className="container">
            <p className="hero-kicker">O&apos;Leary Labs style guide</p>
            <h1 className="hero-title">Readable first. Stylized with intent.</h1>
            <p className="hero-copy">
              The visual system should make complex infrastructure feel easier
              to approach. White space, sharp definition, editorial typography,
              restrained brand color, and fewer competing surfaces do the heavy
              lifting.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Logos"
              title="Let the brand assets breathe."
              description="Use the O'Leary Labs full logo on calm light surfaces. Use Bracket's sharper mark only inside Bracket-specific product contexts."
            />
            <div className="guide-grid three">
              <div className="logo-board">
                <Image
                  src="/oleary_labs_logo_kit/full_logo_transparent.png"
                  alt="O'Leary Labs full logo"
                  width={2213}
                  height={420}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="logo-board signet">
                <img src="/logo-mark.svg" alt="Signet mark" />
              </div>
              <div className="logo-board bracket">
                <img
                  src="/bracket/bracket-logo-transparent.svg"
                  alt="Bracket"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section tint">
          <div className="container">
            <SectionHeading
              eyebrow="Palette"
              title="A narrow palette with stronger hierarchy."
              description="White carries the site architecture. Red, gold, graphite, and green create hierarchy, product context, and technical confidence without turning into heavy panels."
            />
            <div className="guide-grid five">
              {brandColors.map((color) => (
                <article className="guide-card" key={color.name}>
                  <div
                    className="swatch"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h3>{color.name}</h3>
                  <span className="guide-token">
                    {color.hex} / {color.token}
                  </span>
                  <p>{color.usage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Typography"
              title="Large ideas, easy paragraphs."
              description="Headlines can be expressive, but body copy should stay plain, roomy, and fast to scan."
            />
            <div className="guide-grid three">
              {typeStyles.map((style) => (
                <article className="guide-card" key={style.name}>
                  <p className="section-label">{style.name}</p>
                  <p className={style.className}>{style.sample}</p>
                  <p>{style.guidance}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section featured">
          <div className="container">
            <SectionHeading
              eyebrow="Product expression"
              title="Each product can have a voice without breaking the site."
              description="Signet uses quiet gold and green technical signals. Bracket uses red, graphite, and silver for tournament operations. Both sit inside the same white-led page system."
            />
            <div className="guide-grid">
              <article className="guide-card dark">
                <h3>Signet</h3>
                <p>
                  Use the geometric node mark from <span className="mono">/logo-mark.svg</span>,
                  gold rules, green live-state indicators, and light technical
                  panels with graphite details. Do not substitute the
                  O&apos;Leary Labs lion/ship logo for Signet.
                </p>
              </article>
              <article className="guide-card dark">
                <h3>Bracket</h3>
                <p>
                  Use red action states, silver text, squared geometry, and
                  compact operations language. Keep it energetic but contained.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Motion"
              title="Move only when it improves comprehension."
              description="Use motion for reveal, status, and focus. Avoid decorative animation that competes with the copy."
            />
            <div className="guide-grid three">
              {motionRules.map((rule) => (
                <article className="guide-card" key={rule.name}>
                  <h3>{rule.name}</h3>
                  <p>{rule.guidance}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
