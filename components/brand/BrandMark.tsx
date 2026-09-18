import { cn } from "@/lib/utils";

/**
 * Trazos del símbolo: dos ítems de una lista y una línea que, al seguir,
 * se curva hasta convertirse en sonrisa.
 */
export const brandPaths = [
  "M6 12.5l3.2 3.2L15.4 9.5",
  "M21 13h21",
  "M6.5 24h6.5",
  "M21 24h15",
  "M6.5 35c4.2 0 7.7 5.2 15.6 5.2S35.4 35 41.5 30.6",
] as const;

export const brandSvgProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

interface BrandMarkProps {
  className?: string;
  title?: string;
}

/** Versión estática. Funciona a una sola tinta: todo es `currentColor`. */
export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      {...brandSvgProps}
      className={cn("h-9 w-9", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {brandPaths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
