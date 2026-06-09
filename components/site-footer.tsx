import { contactLinks } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#c79b45]/30 bg-[#0a0706] text-[#f8efe2]">
      <div className="container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-lg bg-[#fbf7ef] px-3 py-2">
            <BrandLogo
              variant="wordmark"
              imageClassName="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-[#d8c5a1]">
            &copy; 2026 O&apos;Leary Labs. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {contactLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#d8c5a1] transition-colors hover:text-[#d6aa52]"
            >
              {link.title}
            </a>
          ))}
          <a
            href="mailto:hello@olearylabs.com"
            className="text-sm font-semibold text-[#d8c5a1] transition-colors hover:text-[#d6aa52]"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
