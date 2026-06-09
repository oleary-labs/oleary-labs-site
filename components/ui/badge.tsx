import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold leading-none transition-colors",
  {
    variants: {
      variant: {
        default: "border-[rgba(200,148,63,0.45)] bg-[rgba(200,148,63,0.13)] text-[var(--red)]",
        secondary: "border-border bg-secondary text-secondary-foreground",
        success: "border-[rgba(36,95,69,0.32)] bg-[rgba(36,95,69,0.12)] text-[var(--green)]",
        warning: "border-[rgba(200,148,63,0.42)] bg-[rgba(200,148,63,0.16)] text-[#69420f]",
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
