"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedBrandMark } from "@/components/brand/AnimatedBrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import { easeSoft } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeSoft } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : { initial: "hidden" as const, animate: "visible" as const, variants: container };

  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
      {/* Margen y renglones del cuaderno */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-clay-300/40 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 hidden h-[28rem] w-[28rem] rounded-full bg-honey-200/35 blur-3xl lg:block"
      />

      <Container size="wide">
        <motion.div
          {...motionProps}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          {/* Texto primero: en móvil es lo que importa */}
          <div className="flex flex-col gap-6">
            <motion.p
              variants={reduceMotion ? undefined : item}
              className="text-xs font-medium tracking-[0.2em] text-clay-600 uppercase"
            >
              {site.name}
            </motion.p>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="max-w-[16ch] text-[2.6rem] leading-[1.04] font-semibold text-forest-700 sm:text-5xl lg:text-6xl"
            >
              Hay cosas que se viven{" "}
              <span className="underline-sketch italic">mejor juntos</span>.
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="max-w-xl text-lg leading-relaxed text-ink-600"
            >
              {hero.support}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href={hero.primary.href} size="lg">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="secondary" size="lg">
                {hero.secondary.label}
              </Button>
            </motion.div>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="font-display text-base text-ink-500 italic"
            >
              {site.tagline}
            </motion.p>
          </div>

          {/* Cuaderno abierto */}
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="relative order-last"
            aria-hidden="true"
          >
            <div className="relative mx-auto max-w-md rounded-[1.75rem] border border-ivory-300 bg-ivory-50 p-7 shadow-[var(--shadow-card)] sm:p-9">
              {/* Espiral */}
              <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 gap-6">
                {[0, 1, 2, 3].map((index) => (
                  <span
                    key={index}
                    className="h-6 w-1.5 rounded-full bg-forest-700/25"
                  />
                ))}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <AnimatedBrandMark className="h-10 w-10 text-forest-700" />
                <span className="font-display text-sm text-ink-400 italic">mi lista</span>
              </div>

              <ul className="flex flex-col gap-4">
                {hero.notes.map((note, index) => (
                  <motion.li
                    key={note}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: easeSoft, delay: 0.5 + index * 0.14 }}
                    className="flex items-center gap-3 border-b border-dashed border-ivory-400/70 pb-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-forest-700/25 text-forest-700">
                      {index === 0 && (
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                          <path
                            d="M3 8.5l3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="font-display text-xl text-forest-700">{note}</span>
                  </motion.li>
                ))}
                <li className="flex items-center gap-3 pb-1">
                  <span className="h-6 w-6 shrink-0 rounded-md border border-dashed border-forest-700/25" />
                  <span className="h-px flex-1 bg-ivory-400/70" />
                </li>
              </ul>
            </div>

            {/* Nota adhesiva */}
            <div className="absolute -bottom-5 -left-2 hidden rotate-[-4deg] rounded-xl bg-honey-300 px-4 py-3 shadow-[var(--shadow-card)] sm:block">
              <p className="font-display text-sm text-ink-800">¿y si lo intentamos?</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
