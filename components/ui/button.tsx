import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] border text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[var(--gold)] bg-[linear-gradient(180deg,#a91620,var(--red))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-2px_0_rgba(8,7,6,0.26),0_14px_30px_rgba(145,19,27,0.24)] hover:border-[var(--gold-soft)] hover:bg-[#7f1118] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-2px_0_rgba(8,7,6,0.32),0_18px_38px_rgba(145,19,27,0.3)]",
        outline:
          "border-[rgba(185,134,63,0.72)] bg-[var(--surface-raised)] text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(185,134,63,0.2)] hover:border-[var(--red)] hover:bg-[var(--surface)]",
        secondary:
          "border-[rgba(23,18,15,0.18)] bg-[var(--surface)] text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(23,18,15,0.08)] hover:border-[rgba(23,18,15,0.32)] hover:bg-[var(--white-mist)]",
        ghost: "border-transparent text-current hover:border-[rgba(185,134,63,0.44)] hover:bg-[rgba(185,134,63,0.12)]",
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
