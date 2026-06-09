import { ArrowUpRight } from "lucide-react"

import { navItems } from "@/data/site"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fbf7ef]/92 shadow-[0_12px_36px_rgba(10,7,6,0.08)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <BrandLogo
          className="max-w-[168px] sm:max-w-[224px]"
          imageClassName="h-auto max-h-12 w-full object-contain"
        />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#29201b]/70 transition-colors hover:text-[#8f151a]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="shrink-0">
          <a href="https://signet-testnet.olearylabs.com">
            <span className="hidden sm:inline">Signet</span> Testnet
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  )
}
