import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Fondo de la banda completa. */
  tone?: "default" | "paper" | "forest" | "honey";
  size?: "narrow" | "default" | "wide";
  id?: string;
  /** Etiqueta accesible cuando la sección no tiene un encabezado visible propio. */
  ariaLabel?: string;
}

const tones = {
  default: "",
  paper: "bg-ivory-50/70",
  forest: "bg-forest-700 text-ivory-100",
  honey: "bg-honey-100",
} as const;

export function Section({
  children,
  className,
  tone = "default",
  size = "default",
  id,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-16 sm:py-24", tones[tone], className)}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
