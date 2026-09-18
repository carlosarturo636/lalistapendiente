import { cn } from "@/lib/utils";

type Tone = "honey" | "clay" | "forest" | "muted";

const tones: Record<Tone, string> = {
  honey: "bg-honey-200 text-ink-800",
  clay: "bg-clay-100 text-clay-700",
  forest: "bg-forest-700 text-ivory-50",
  muted: "border border-forest-700/20 bg-transparent text-ink-600",
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "honey", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
