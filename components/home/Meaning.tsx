import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { meaning } from "@/lib/content/home";

export function Meaning() {
  return (
    <Section tone="paper" className="border-y border-ivory-300/70">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-clay-600 uppercase">
            {meaning.eyebrow}
          </p>
          <h2 className="text-3xl leading-[1.12] font-semibold text-forest-700 sm:text-4xl">
            {meaning.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5 lg:pt-2">
          {meaning.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
          <p className="font-display text-xl text-forest-600 italic">
            Los intentos también cuentan.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
