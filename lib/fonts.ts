import { DM_Sans, Fraunces } from "next/font/google";

/** Serif expresiva para titulares y momentos editoriales. */
export const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/** Sans limpia para cuerpo de texto, navegación y controles. */
export const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-src",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "sans-serif"],
});
