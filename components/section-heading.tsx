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
    <div className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-3 text-sm font-semibold uppercase text-primary",
          "before:h-px before:w-8 before:bg-current before:content-['']",
          inverted && "text-[#d6aa52]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl",
          inverted && "text-[#fff8ec]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg",
            inverted && "text-[#d8c5a1]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
