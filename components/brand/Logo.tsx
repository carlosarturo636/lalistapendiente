import Link from "next/link";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { AnimatedBrandMark } from "./AnimatedBrandMark";
import { BrandMark } from "./BrandMark";

interface LogoProps {
  className?: string;
  /** Sin enlace cuando ya estamos dentro de uno (p. ej. el pie). */
  asLink?: boolean;
  animated?: boolean;
}

export function Logo({ className, asLink = true, animated = false }: LogoProps) {
  const Mark = animated ? AnimatedBrandMark : BrandMark;

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="h-8 w-8 shrink-0" />
      <span className="font-display text-lg leading-none font-semibold tracking-tight">
        La lista <span className="italic">pendiente</span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href="/"
      aria-label={`${site.name} — ir al inicio`}
      className="rounded-sm transition-opacity hover:opacity-80"
    >
      {content}
    </Link>
  );
}
