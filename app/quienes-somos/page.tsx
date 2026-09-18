import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: about.intro,
};

export default function Page() {
  const pillars = [about.mission, about.purpose, about.meaning];

  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.heading} intro={about.intro} />

      <Section size="wide">
        <Stagger as="ul" className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem
              as="li"
              key={pillar.title}
              className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-7"
            >
              <h2 className="font-display text-2xl font-semibold text-forest-700">
                {pillar.title}
              </h2>
              <p className="leading-relaxed text-ink-600">{pillar.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="wide">
        <SectionHeading
          eyebrow="Nuestros valores"
          title="Cuatro cosas que intentamos sostener"
        />

        <Stagger as="ul" className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {about.values.map((value, index) => (
            <StaggerItem as="li" key={value.title} className="flex gap-5">
              <span
                className="mt-1 font-display text-2xl text-clay-400/70"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-forest-700">{value.title}</h3>
                <p className="leading-relaxed text-ink-600">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section size="narrow">
        <Reveal className="rounded-3xl bg-forest-700 p-9 text-ivory-100 sm:p-12">
          <p className="text-xs font-medium tracking-[0.18em] text-honey-300 uppercase">
            Nuestro manifiesto
          </p>
          <ul className="mt-7 flex flex-col gap-5">
            {about.manifesto.map((line) => (
              <li key={line} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-honey-300"
                />
                <p className="font-display text-xl leading-snug sm:text-2xl">{line}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section tone="honey" size="narrow" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="max-w-[20ch] text-3xl font-semibold text-forest-700 sm:text-4xl">
            ¿Te suena parecido a lo que estás buscando?
          </h2>
          <Button href="/unete" size="lg">
            Quiero ser parte
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
