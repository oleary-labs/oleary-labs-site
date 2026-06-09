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
    <div className={cn(inverted && "heading-inverted", className)}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="section-copy">{description}</p>
      ) : null}
    </div>
  )
}
