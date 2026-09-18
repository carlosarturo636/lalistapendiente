import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcoming } from "@/lib/content/home";
import { events } from "@/lib/content/collections";
import { formatDateEs } from "@/lib/utils";

export function Upcoming() {
  const nextEvents = events.slice(0, 3);

  return (
    <Section tone="paper" className="border-y border-ivory-300/70" size="wide">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={upcoming.eyebrow}
          title={upcoming.heading}
          description={upcoming.body}
        />
        <Button href="/actividades" variant="secondary" className="shrink-0 self-start">
          Ver actividades
        </Button>
      </div>

      {nextEvents.length > 0 ? (
        <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-3">
          {nextEvents.map((event) => (
            <StaggerItem
              as="li"
              key={event.id}
              className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-6"
            >
              <p className="text-sm text-clay-600">{formatDateEs(event.date)}</p>
              <h3 className="text-xl font-semibold text-forest-700">{event.title}</h3>
              {event.location && <p className="text-sm text-ink-500">{event.location}</p>}
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <Reveal className="mt-10">
          <EmptyState
            title="Estamos preparando nuestros primeros encuentros"
            description="Todavía no hay fechas confirmadas. Estas son las formas de encuentro que estamos armando."
          />
        </Reveal>
      )}

      <Reveal delay={0.1} className="mt-8">
        <p className="text-xs font-medium tracking-[0.18em] text-ink-400 uppercase">
          Categorías previstas
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {upcoming.categories.map((category) => (
            <li key={category}>
              <Badge tone="muted">{category}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
