import type { Transition, Variants } from "framer-motion";

/** Curva suave, sin rebote: entra y se acomoda. */
export const easeSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const durations = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easeSoft },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easeSoft },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.slow, ease: easeSoft },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: easeSoft },
  },
};

export function staggerContainer(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

/** Las secciones se revelan una sola vez al entrar en pantalla. */
export const revealViewport = { once: true, margin: "-60px 0px -60px 0px" } as const;
