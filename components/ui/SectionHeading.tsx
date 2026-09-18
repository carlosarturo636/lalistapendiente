import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-medium tracking-[0.18em] uppercase",
            tone === "dark" ? "text-clay-600" : "text-honey-300",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-3xl leading-[1.12] font-semibold sm:text-4xl",
          tone === "dark" ? "text-forest-700" : "text-ivory-50",
          align === "center" && "max-w-2xl",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-600" : "text-ivory-200/85",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
