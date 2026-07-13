import { contactLinks } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            <BrandLogo variant="wordmark" imageClassName="h-8 w-auto" />
          </div>
          <p className="mt-4">
            &copy; 2026 O&apos;Leary Labs. All rights reserved.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {contactLinks.slice(0, 2).map((link) => (
            <a key={link.href} href={link.href}>
              {link.title}
            </a>
          ))}
          <a href="mailto:hello@olearylabs.com">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
