"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, List, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { easeSoft } from "@/lib/motion";
import { cn, formatDateEs, formatMonthEs } from "@/lib/utils";
import type { CommunityEvent, EventStatus } from "@/types/content";

const statusLabels: Record<EventStatus, string> = {
  abierto: "Inscripciones abiertas",
  cerrado: "Inscripciones cerradas",
  proximamente: "Inscripciones aún no disponibles",
};

const statusTones = {
  abierto: "forest",
  cerrado: "muted",
  proximamente: "honey",
} as const;

const weekdays = ["L", "M", "X", "J", "V", "S", "D"] as const;

interface EventsBrowserProps {
  events: CommunityEvent[];
}

export function EventsBrowser({ events }: EventsBrowserProps) {
  const [view, setView] = useState<"lista" | "calendario">("lista");
  const reduceMotion = useReducedMotion();

  const sorted = useMemo(
    () => [...events].sort((a, b) => a.date.localeCompare(b.date)),
    [events],
  );

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Cambiar vista de los encuentros"
        className="flex gap-2 self-start rounded-full border border-forest-700/15 bg-ivory-50 p-1"
      >
        {(["lista", "calendario"] as const).map((option) => {
          const selected = view === option;
          const Icon = option === "lista" ? List : CalendarDays;
          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setView(option)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.9375rem] capitalize transition-colors duration-200",
                selected ? "bg-forest-700 text-ivory-50" : "text-ink-600 hover:text-forest-700",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {option}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: easeSoft }}
        >
          {view === "lista" ? (
            <EventList events={sorted} />
          ) : (
            <EventCalendar events={sorted} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function EventList({ events }: { events: CommunityEvent[] }) {
  if (events.length === 0) {
    return (
      <EmptyState
        title="Estamos preparando nuestros primeros encuentros"
        description="Cuando confirmemos una fecha, el encuentro aparecerá aquí con toda la información para sumarse."
      />
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {events.map((event) => (
        <li
          key={event.id}
          className="flex flex-col gap-4 rounded-3xl border border-ivory-300 bg-ivory-50 p-6 sm:flex-row sm:items-start sm:gap-7"
        >
          <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-honey-100 px-5 py-3 text-center">
            <span className="font-display text-2xl leading-none font-semibold text-forest-700">
              {new Date(`${event.date}T00:00:00`).getDate()}
            </span>
            <span className="mt-1 text-xs tracking-wide text-ink-500 uppercase">
              {new Intl.DateTimeFormat("es", { month: "short" }).format(
                new Date(`${event.date}T00:00:00`),
              )}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-xl font-semibold text-forest-700">{event.title}</h3>
            <p className="text-sm text-ink-500">{formatDateEs(event.date)}</p>
            {event.location && (
              <p className="inline-flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {event.location}
              </p>
            )}
            {event.description && (
              <p className="leading-relaxed text-ink-600">{event.description}</p>
            )}
            <Badge tone={statusTones[event.registrationStatus]} className="mt-1 self-start">
              {statusLabels[event.registrationStatus]}
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}

function EventCalendar({ events }: { events: CommunityEvent[] }) {
  const today = new Date();
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CommunityEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, [events]);

  const firstOfMonth = new Date(cursor.year, cursor.month, 1);
  const daysInMonth = new Date(cursor.year, cursor.month + 1, 0).getDate();
  // La semana empieza en lunes.
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;

  const monthEvents = events.filter((event) => {
    const date = new Date(`${event.date}T00:00:00`);
    return date.getFullYear() === cursor.year && date.getMonth() === cursor.month;
  });

  function shiftMonth(delta: number) {
    setCursor((current) => {
      const next = new Date(current.year, current.month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  }

  const monthLabel = formatMonthEs(cursor.year, cursor.month);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-ivory-300 bg-ivory-50 p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-forest-700 transition-colors hover:bg-forest-700/8"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Mes anterior</span>
          </button>

          <p
            aria-live="polite"
            className="font-display text-lg font-semibold text-forest-700 first-letter:uppercase"
          >
            {monthLabel}
          </p>

          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-forest-700 transition-colors hover:bg-forest-700/8"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Mes siguiente</span>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-1 text-center sm:gap-2">
          {weekdays.map((day, index) => (
            <span key={index} className="pb-2 text-xs font-medium text-ink-400">
              {day}
            </span>
          ))}

          {Array.from({ length: leadingBlanks }, (_, index) => (
            <span key={`blank-${index}`} aria-hidden="true" />
          ))}

          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const iso = `${cursor.year}-${String(cursor.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const dayEvents = eventsByDay.get(iso) ?? [];
            const isToday =
              today.getFullYear() === cursor.year &&
              today.getMonth() === cursor.month &&
              today.getDate() === day;

            return (
              <span
                key={day}
                className={cn(
                  "relative flex aspect-square items-center justify-center rounded-lg text-sm",
                  dayEvents.length > 0
                    ? "bg-honey-200 font-medium text-ink-800"
                    : "text-ink-500",
                  isToday && dayEvents.length === 0 && "ring-1 ring-forest-700/25",
                )}
              >
                {day}
                {dayEvents.length > 0 && (
                  <span className="sr-only">
                    {`, ${dayEvents.length} ${dayEvents.length === 1 ? "encuentro" : "encuentros"}`}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      {monthEvents.length > 0 ? (
        <EventList events={monthEvents} />
      ) : (
        <EmptyState
          title="No hay encuentros este mes"
          description="Todavía no tenemos fechas confirmadas. Puedes navegar entre meses o volver más adelante."
        />
      )}
    </div>
  );
}
