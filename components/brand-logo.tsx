import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  markClassName?: string
}

export function BrandLogo({ className, markClassName }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-h-10 items-center gap-3 text-base font-bold text-foreground",
        className,
      )}
      aria-label="O'Leary Labs home"
    >
      <Image
        src="/logo-mark.svg"
        alt=""
        width={40}
        height={40}
        className={cn("h-10 w-10", markClassName)}
        priority
      />
      <span className="leading-none">
        O&apos;Leary <span className="text-primary">Labs</span>
      </span>
    </Link>
  )
}
