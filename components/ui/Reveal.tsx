"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Tag = "div" | "section" | "li" | "span";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: Tag;
}

const motionTags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
} as const;

/** Aparición suave al entrar en pantalla, una sola vez. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) return <Tag className={className}>{children}</Tag>;

  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
  stagger?: number;
  delayChildren?: number;
}

/** Contenedor que escalona la entrada de sus hijos (usar con `StaggerItem`). */
export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) return <Tag className={className}>{children}</Tag>;

  const MotionTag = as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  variants?: Variants;
}

export function StaggerItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) return <Tag className={className}>{children}</Tag>;

  const MotionTag = motionTags[as];

  return (
    <MotionTag className={cn(className)} variants={variants}>
      {children}
    </MotionTag>
  );
}
