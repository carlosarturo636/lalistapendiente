"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EmptyState } from "@/components/ui/EmptyState";
import { conversations } from "@/lib/content/pages";
import { easeSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Video, VideoCategory } from "@/types/content";

type Filter = VideoCategory | "todas";

const filters: { id: Filter; label: string }[] = [
  { id: "todas", label: "Todas" },
  ...conversations.categories.map((category) => ({
    id: category.id as VideoCategory,
    label: category.label,
  })),
];

interface VideoLibraryProps {
  videos: Video[];
}

export function VideoLibrary({ videos }: VideoLibraryProps) {
  const [active, setActive] = useState<Filter>("todas");
  const reduceMotion = useReducedMotion();

  const visible = active === "todas" ? videos : videos.filter((video) => video.category === active);
  const activeCategory = conversations.categories.find((category) => category.id === active);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div
          role="tablist"
          aria-label="Filtrar conversaciones por tipo"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const selected = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.9375rem] transition-colors duration-200",
                  selected
                    ? "border-forest-700 bg-forest-700 text-ivory-50"
                    : "border-forest-700/20 text-ink-600 hover:border-forest-700/40 hover:text-forest-700",
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: easeSoft }}
            className="text-[0.9375rem] text-ink-500"
          >
            {activeCategory?.description ?? "Todo lo que vayamos publicando, en un solo lugar."}
          </motion.p>
        </AnimatePresence>
      </div>

      <div aria-live="polite">
        {visible.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((video) => (
              <VideoCard key={video.id} video={video} reduceMotion={Boolean(reduceMotion)} />
            ))}
          </ul>
        ) : (
          <EmptyState
            title={
              videos.length === 0
                ? "Todavía no hay videos publicados"
                : "Aún no hay nada en esta categoría"
            }
            description={
              videos.length === 0
                ? "Estamos preparando las primeras conversaciones con profesionales. Cuando publiquemos, aparecerán aquí."
                : "Prueba con otra categoría o vuelve pronto."
            }
          />
        )}
      </div>
    </div>
  );
}

function VideoCard({ video, reduceMotion }: { video: Video; reduceMotion: boolean }) {
  return (
    <motion.li
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeSoft }}
      className="flex flex-col overflow-hidden rounded-3xl border border-ivory-300 bg-ivory-50"
    >
      <div className="aspect-video bg-forest-100">
        {/* Sólo hay reproductor si existe una URL real. */}
        {video.url ? (
          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : video.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={video.thumbnail} alt="" className="h-full w-full object-cover" />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg leading-snug font-semibold text-forest-700">{video.title}</h3>
        {video.topic && <p className="text-sm text-clay-600">{video.topic}</p>}
        {video.professional && (
          <p className="text-sm text-ink-500">
            {video.professional.name}
            {video.professional.credential ? ` · ${video.professional.credential}` : ""}
          </p>
        )}
        {video.durationMinutes !== undefined && (
          <p className="mt-auto pt-2 text-sm text-ink-400">{video.durationMinutes} min</p>
        )}
      </div>
    </motion.li>
  );
}
