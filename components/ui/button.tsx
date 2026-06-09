import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[var(--gold)] bg-[var(--red)] text-white shadow-[inset_0_-2px_0_rgba(8,8,8,0.22),0_14px_30px_rgba(169,22,32,0.2)] hover:border-[var(--gold-deep)] hover:bg-[#8f131b] hover:shadow-[inset_0_-2px_0_rgba(8,8,8,0.28),0_18px_38px_rgba(169,22,32,0.26)]",
        outline:
          "border-[rgba(200,148,63,0.68)] bg-white text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(200,148,63,0.18)] hover:border-[var(--red)] hover:bg-[rgba(169,22,32,0.035)]",
        secondary:
          "border-[rgba(8,8,8,0.14)] bg-white text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(8,8,8,0.08)] hover:border-[rgba(8,8,8,0.26)] hover:bg-[var(--white-soft)]",
        ghost: "border-transparent text-current hover:border-[rgba(200,148,63,0.4)] hover:bg-[rgba(200,148,63,0.08)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[2px] px-3",
        lg: "h-12 rounded-[2px] px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
