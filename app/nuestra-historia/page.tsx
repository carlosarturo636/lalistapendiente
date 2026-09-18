import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { history } from "@/lib/content/pages";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Nuestra historia",
  description: history.intro,
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow={history.eyebrow} title={history.heading} intro={history.intro} />

      <Section size="default">
        <Stagger className="relative flex flex-col gap-12" stagger={0.12}>
          {/* Camino dibujado que une los tres momentos */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 bottom-2 left-[0.6875rem] w-px border-l border-dashed border-clay-300/60 sm:left-[0.9375rem]"
          />

          {history.sections.map((section, index) => (
            <StaggerItem key={section.title} className="relative flex gap-6 sm:gap-8">
              <span
                aria-hidden="true"
                className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-clay-300 bg-ivory-100 font-display text-xs text-clay-600 sm:h-8 sm:w-8 sm:text-sm"
              >
                {index + 1}
              </span>

              <div className="flex flex-col gap-3 pb-2">
                <h2 className="text-2xl font-semibold text-forest-700 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-600">{section.body}</p>
                {section.pending && (
                  <p className="flex flex-wrap items-center gap-2 text-[0.9375rem] text-ink-500">
                    <Badge tone="honey">En preparación</Badge>
                    <span>{section.pending}</span>
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="narrow">
        <Reveal className="flex flex-col gap-5 text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-clay-600 uppercase">
            La persona detrás de la idea
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-700 sm:text-4xl">
            {site.founder}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink-600">
            Juan José impulsa esta comunidad. Estamos trabajando con él para contar su historia
            como merece: sin adornos y sin apuro. Cuando esté lista, la vas a leer aquí.
          </p>
          <div className="mt-2 flex justify-center">
            <Button href="/unete" variant="secondary">
              Mantenerme al tanto
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
