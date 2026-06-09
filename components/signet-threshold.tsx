import { cn } from "@/lib/utils"

const nodes = [
  { label: "N1", active: true },
  { label: "N2", active: true },
  { label: "N3", active: false },
  { label: "N4", active: true },
  { label: "N5", active: false },
]

export function SignetThreshold({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-lg border border-[rgba(236,215,168,0.22)] bg-[rgba(8,7,6,0.68)] p-6 text-white",
        className,
      )}
      aria-label="Signet threshold signing visual, 3 of 5 nodes active"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="grid w-full max-w-sm grid-cols-5 gap-2 sm:gap-3">
        {nodes.map((node) => (
          <div
            key={node.label}
            className={cn(
              "relative flex aspect-square items-center justify-center rounded-lg border font-mono text-xs font-bold",
              node.active
                ? "border-[var(--gold)] bg-[rgba(200,148,63,0.12)] text-[var(--gold-soft)]"
                : "border-[rgba(236,215,168,0.16)] bg-black/30 text-[rgba(255,250,241,0.48)]",
            )}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-full border border-[rgba(236,215,168,0.22)] bg-black/30 px-4 py-2 font-mono text-sm text-[rgba(255,250,241,0.74)]">
        threshold: <span className="text-[var(--gold-soft)]">3</span> of 5
      </div>
    </div>
  )
}
