import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-[2px] border px-2.5 py-1 text-xs font-bold leading-none transition-colors",
  {
    variants: {
      variant: {
        default: "border-[rgba(200,148,63,0.55)] bg-white text-[var(--red)] shadow-[inset_0_-1px_0_rgba(200,148,63,0.22)]",
        secondary: "border-border bg-secondary text-secondary-foreground",
        success: "border-[rgba(36,95,69,0.36)] bg-[rgba(36,95,69,0.08)] text-[var(--green)]",
        warning: "border-[rgba(200,148,63,0.48)] bg-white text-[var(--gold-deep)]",
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
