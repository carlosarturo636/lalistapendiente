import type { Metadata } from "next";
import Image from "next/image";
import { EventsBrowser } from "@/components/activities/EventsBrowser";
import { BrandMark } from "@/components/brand/BrandMark";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events, gallery, trips } from "@/lib/content/collections";
import { activities } from "@/lib/content/pages";
import { formatDateEs } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Actividades y eventos",
  description: activities.intro,
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={activities.eyebrow}
        title={activities.heading}
        intro={activities.intro}
      />

      <Section size="wide" id="proximos">
        <SectionHeading eyebrow="Próximos eventos" title="Lo que viene" className="mb-9" />
        <EventsBrowser events={events} />
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="wide">
        <SectionHeading
          eyebrow="Categorías previstas"
          title="Las formas de encuentro que estamos armando"
          description="Todavía no son eventos confirmados: es el tipo de plan que queremos ofrecer."
        />
        <Stagger as="ul" className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.plannedCategories.map((category) => (
            <StaggerItem
              as="li"
              key={category.title}
              className="flex flex-col gap-2 rounded-2xl border border-ivory-300 bg-ivory-50 p-6"
            >
              <h3 className="text-lg font-semibold text-forest-700">{category.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-600">
                {category.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section size="wide" id="viajes">
        <SectionHeading
          eyebrow="Viajes"
          title={activities.trips.title}
          description={activities.trips.body}
          className="mb-9"
        />

        {trips.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {trips.map((trip) => (
              <li
                key={trip.id}
                className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-7"
              >
                <Badge tone="clay">{trip.destination}</Badge>
                <h3 className="text-xl font-semibold text-forest-700">{trip.title}</h3>
                <p className="text-sm text-ink-500">{formatDateEs(trip.date)}</p>
                {trip.description && (
                  <p className="leading-relaxed text-ink-600">{trip.description}</p>
                )}
                {trip.cost && <p className="text-[0.9375rem] text-ink-600">{trip.cost}</p>}
                {trip.includes && trip.includes.length > 0 && (
                  <ul className="mt-1 flex flex-col gap-1 text-[0.9375rem] text-ink-600">
                    {trip.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="text-clay-500">
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <EmptyState
              title="Todavía no hay viajes programados"
              description="Queremos organizar salidas cortas con la comunidad. Cuando tengamos destino y fechas, los publicaremos aquí."
            />
          </Reveal>
        )}
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="wide" id="galeria">
        <SectionHeading
          eyebrow="Galería"
          title="Fotos de nuestros encuentros"
          description={activities.galleryNote}
          className="mb-9"
        />

        {gallery.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <li key={item.id} className="overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                {item.caption && (
                  <p className="mt-2 text-sm text-ink-500">{item.caption}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Reveal className="flex flex-col gap-6">
            {/* Marcos en espera: la galería se reserva para fotos reales. */}
            <ul aria-hidden="true" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((index) => (
                <li
                  key={index}
                  className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-forest-700/22 bg-ivory-100"
                >
                  <BrandMark className="h-8 w-8 text-forest-200" />
                </li>
              ))}
            </ul>
            <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">
              Aquí sólo van fotos reales de la comunidad. Por eso todavía está vacía: se abrirá
              después del primer encuentro.
            </p>
          </Reveal>
        )}
      </Section>

      <Section tone="honey" size="narrow" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="max-w-[22ch] text-3xl font-semibold text-forest-700 sm:text-4xl">
            ¿Quieres enterarte del primer encuentro?
          </h2>
          <Button href="/unete" size="lg">
            Quiero ser parte
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
