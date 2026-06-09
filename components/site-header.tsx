import { ArrowUpRight } from "lucide-react"

import { navItems } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <BrandLogo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="shrink-0">
          <a href="https://signet-testnet.olearylabs.com">
            Signet Testnet
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  )
}
