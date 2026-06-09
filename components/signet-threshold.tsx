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
        "relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-[2px] border border-[rgba(8,8,8,0.12)] bg-white p-6 text-[var(--ink)] shadow-[inset_0_3px_0_rgba(200,148,63,0.42),0_18px_44px_rgba(8,8,8,0.045)]",
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
              "relative flex aspect-square items-center justify-center rounded-[2px] border font-mono text-xs font-bold shadow-[inset_0_-2px_0_rgba(8,8,8,0.04)]",
              node.active
                ? "border-[var(--gold)] bg-[rgba(200,148,63,0.1)] text-[var(--gold-deep)]"
                : "border-[rgba(8,8,8,0.12)] bg-[var(--white-mist)] text-[var(--ink-soft)]",
            )}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[2px] border border-[rgba(8,8,8,0.12)] bg-white px-4 py-2 font-mono text-sm text-[var(--ink-soft)] shadow-[inset_0_-2px_0_rgba(36,95,69,0.14)]">
        threshold: <span className="text-[var(--green)]">3</span> of 5
      </div>
    </div>
  )
}
