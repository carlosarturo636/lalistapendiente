"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { BrandMark, brandPaths, brandSvgProps } from "./BrandMark";

interface AnimatedBrandMarkProps {
  className?: string;
  title?: string;
}

/** Dibuja el símbolo trazo a trazo, una sola vez. */
export function AnimatedBrandMark({ className, title }: AnimatedBrandMarkProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <BrandMark className={className} title={title} />;

  return (
    <motion.svg
      {...brandSvgProps}
      className={cn("h-9 w-9", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      initial="hidden"
      animate="visible"
    >
      {title && <title>{title}</title>}
      {brandPaths.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 0.5, ease: easeSoft, delay: 0.12 * index },
                opacity: { duration: 0.2, delay: 0.12 * index },
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
}
