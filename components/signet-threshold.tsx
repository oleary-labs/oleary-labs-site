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
        "tech-panel relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#d6aa52]/24 bg-[#100c0b] p-6 text-white",
        className,
      )}
      aria-label="Signet threshold signing visual, 3 of 5 nodes active"
    >
      <div className="signal-sweep absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6aa52] to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(214,170,82,0.08),transparent)]" />
      <div className="grid w-full max-w-sm grid-cols-5 gap-2 sm:gap-3">
        {nodes.map((node) => (
          <div
            key={node.label}
            className={cn(
              "relative flex aspect-square items-center justify-center rounded-lg border font-mono text-xs font-bold",
              node.active
                ? "border-[#d6aa52] bg-[#d6aa52]/12 text-[#f4d892] shadow-[0_0_32px_rgba(214,170,82,0.2)]"
                : "border-[#5a4030] bg-[#090706]/70 text-[#8b7460]",
            )}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-full border border-[#d6aa52]/28 bg-black/45 px-4 py-2 font-mono text-sm text-[#d8c5a1]">
        threshold: <span className="text-[#f4d892]">3</span> of 5
      </div>
    </div>
  )
}
