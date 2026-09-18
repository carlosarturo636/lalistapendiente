import { BrandMark } from "@/components/brand/BrandMark";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  /** Acción opcional: un enlace o botón ya funcional. */
  action?: React.ReactNode;
  className?: string;
  tone?: "paper" | "plain";
}

/** Estado vacío diseñado: la interfaz se siente terminada aunque falte contenido. */
export function EmptyState({
  title,
  description,
  action,
  className,
  tone = "paper",
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-3xl px-6 py-14 text-center sm:px-10",
        tone === "paper"
          ? "border border-dashed border-forest-700/22 bg-ivory-50/70"
          : "border border-ivory-100/20 bg-ivory-100/5",
        className,
      )}
    >
      <BrandMark className="h-9 w-9 text-forest-300" />
      <div className="flex flex-col gap-2">
        <p className="font-display text-xl font-semibold text-forest-700">{title}</p>
        {description && (
          <p className="mx-auto max-w-md text-[0.9375rem] leading-relaxed text-ink-500">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
