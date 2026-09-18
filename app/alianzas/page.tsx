import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Field } from "@/components/ui/Field";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allies as alliesCollection } from "@/lib/content/collections";
import { allies } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Fundaciones aliadas",
  description: allies.intro,
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow={allies.eyebrow} title={allies.heading} intro={allies.intro} />

      <Section size="wide" id="nuestras-alianzas">
        <SectionHeading eyebrow="Nuestras alianzas" title="Con quiénes trabajamos" className="mb-9" />

        {alliesCollection.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alliesCollection.map((ally) => (
              <li
                key={ally.id}
                className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-7"
              >
                {ally.logo && (
                  <Image
                    src={ally.logo}
                    alt={ally.name}
                    width={160}
                    height={64}
                    className="h-12 w-auto object-contain"
                  />
                )}
                <h3 className="text-lg font-semibold text-forest-700">{ally.name}</h3>
                {ally.description && (
                  <p className="leading-relaxed text-ink-600">{ally.description}</p>
                )}
                {ally.url && (
                  <a
                    href={ally.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.9375rem] font-medium text-clay-600 underline-offset-4 hover:underline"
                  >
                    Visitar sitio
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <EmptyState
              title="Todavía no tenemos alianzas confirmadas"
              description="Estamos conversando con organizaciones que trabajan en salud mental y comunidad. Publicaremos cada alianza cuando esté cerrada."
            />
          </Reveal>
        )}
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="wide" id="como-colaboran">
        <SectionHeading
          eyebrow="Cómo colaboran"
          title={allies.collaboration.title}
          description="Son posibilidades que queremos explorar, no acuerdos vigentes."
        />
        <Stagger as="ul" className="mt-9 grid gap-5 md:grid-cols-3">
          {allies.collaboration.items.map((item) => (
            <StaggerItem
              as="li"
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-7"
            >
              <h3 className="font-display text-xl font-semibold text-forest-700">{item.title}</h3>
              <p className="leading-relaxed text-ink-600">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section size="narrow" id="quiero-aliarme">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-3">
            <Badge tone="clay">Próximamente</Badge>
            <h2 className="text-3xl font-semibold text-forest-700">{allies.form.title}</h2>
          </div>

          <p className="rounded-2xl border border-honey-400/40 bg-honey-100 px-5 py-4 leading-relaxed text-ink-700">
            {allies.form.notice}
          </p>

          <form aria-describedby="aviso-alianza" className="flex flex-col gap-5">
            <p id="aviso-alianza" className="sr-only">
              Formulario deshabilitado: no envía ni guarda información.
            </p>
            <Field id="organizacion" label="Organización" placeholder="Nombre de la fundación" />
            <Field id="contacto" label="Persona de contacto" placeholder="Nombre y apellido" />
            <Field id="correo-alianza" label="Correo" type="email" placeholder="nombre@ejemplo.com" />
            <Field
              id="propuesta"
              label="Propuesta"
              type="textarea"
              placeholder="Cuéntanos qué te gustaría construir con la comunidad"
            />
            <Button type="submit" disabled className="self-start">
              Enviar propuesta
            </Button>
          </form>
        </Reveal>
      </Section>
    </>
  );
}
