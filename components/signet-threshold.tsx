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
        "relative flex min-h-64 flex-col items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#142334] p-6 text-white",
        className,
      )}
      aria-label="Signet threshold signing visual, 3 of 5 nodes active"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
      <div className="grid w-full max-w-sm grid-cols-5 gap-2 sm:gap-3">
        {nodes.map((node) => (
          <div
            key={node.label}
            className={cn(
              "flex aspect-square items-center justify-center rounded-lg border text-xs font-bold",
              node.active
                ? "border-amber-300 bg-amber-300/10 text-amber-200 shadow-[0_0_32px_rgba(245,193,108,0.18)]"
                : "border-slate-600 bg-slate-900/60 text-slate-400",
            )}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-full border border-slate-600 bg-slate-950/60 px-4 py-2 font-mono text-sm text-slate-300">
        threshold: <span className="text-amber-200">3</span> of 5
      </div>
    </div>
  )
}
