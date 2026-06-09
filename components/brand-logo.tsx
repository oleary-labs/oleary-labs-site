import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  markClassName?: string
  wordmarkClassName?: string
  variant?: "full" | "mark" | "wordmark" | "split"
}

const logoAssets = {
  full: {
    src: "/oleary_labs_logo_kit/full_logo_transparent.png",
    width: 2213,
    height: 420,
  },
  mark: {
    src: "/oleary_labs_logo_kit/logomark_transparent.png",
    width: 641,
    height: 659,
  },
  wordmark: {
    src: "/oleary_labs_logo_kit/wordmark_transparent.png",
    width: 868,
    height: 235,
  },
}

export function BrandLogo({
  className,
  imageClassName,
  markClassName,
  wordmarkClassName,
  variant = "full",
}: BrandLogoProps) {
  if (variant === "split") {
    return (
      <Link
        href="/"
        className={cn("inline-flex min-h-10 items-center gap-2.5", className)}
        aria-label="O'Leary Labs home"
      >
        <Image
          src={logoAssets.mark.src}
          alt=""
          width={logoAssets.mark.width}
          height={logoAssets.mark.height}
          className={cn("h-14 w-auto shrink-0", markClassName)}
          priority
        />
        <Image
          src={logoAssets.wordmark.src}
          alt="O'Leary Labs"
          width={logoAssets.wordmark.width}
          height={logoAssets.wordmark.height}
          className={cn("h-8 w-auto", wordmarkClassName)}
          priority
        />
      </Link>
    )
  }

  const asset = logoAssets[variant]

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-h-10 items-center",
        className,
      )}
      aria-label="O'Leary Labs home"
    >
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        className={cn(
          variant === "mark" ? "h-11 w-auto" : "h-10 w-auto",
          imageClassName,
        )}
        priority
      />
    </Link>
  )
}
