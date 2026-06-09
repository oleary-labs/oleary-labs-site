import { contactLinks } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <BrandLogo markClassName="h-8 w-8" />
          <p className="text-sm text-muted-foreground">
            &copy; 2026 O&apos;Leary Labs. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {contactLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
          <a
            href="mailto:hello@olearylabs.com"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
