import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold leading-none transition-colors",
  {
    variants: {
      variant: {
        default: "border-[#d6aa52]/35 bg-[#d6aa52]/12 text-[#9b1219]",
        secondary: "border-border bg-secondary text-secondary-foreground",
        success: "border-[#215f43]/30 bg-[#215f43]/10 text-[#215f43]",
        warning: "border-[#d6aa52]/40 bg-[#d6aa52]/15 text-[#6f4612]",
        outline: "border-border bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
