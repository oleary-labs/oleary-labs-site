import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p
        className={cn(
          "text-sm font-semibold uppercase text-primary",
          inverted && "text-amber-300",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl",
          inverted && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 text-muted-foreground sm:text-lg",
            inverted && "text-slate-300",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
