import { ArrowUpRight } from "lucide-react"

import { navItems } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <BrandLogo className="brand-frame" imageClassName="h-10 w-auto" />
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
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
