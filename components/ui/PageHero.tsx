import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/** Cabecera editorial compartida por las páginas internas. */
export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-ivory-300/70 bg-ivory-50/60 pt-14 pb-14 sm:pt-20 sm:pb-20">
      {/* Margen de cuaderno */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-clay-300/35 sm:block"
      />
      <Container>
        <Reveal className="flex max-w-3xl flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-clay-600 uppercase">{eyebrow}</p>
          <h1 className="text-4xl leading-[1.08] font-semibold text-forest-700 sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="text-lg leading-relaxed text-ink-600">{intro}</p>}
        </Reveal>
      </Container>
    </header>
  );
}
