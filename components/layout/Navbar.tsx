"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, primaryAction } from "@/lib/content/site";
import { easeSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape cierra y devuelve el foco al botón; Tab queda atrapado en el panel.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory-300/70 bg-ivory-100/92 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-18">
          <Logo className="text-forest-700" animated />

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    title={link.fullLabel}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-[0.9375rem] transition-colors",
                      isActive(link.href)
                        ? "text-forest-700"
                        : "text-ink-600 hover:text-forest-700",
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-honey-300"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={primaryAction.href}
              size="sm"
              aria-current={isActive(primaryAction.href) ? "page" : undefined}
              className={cn(
                "hidden sm:inline-flex",
                isActive(primaryAction.href) && "ring-2 ring-clay-500/35 ring-offset-2 ring-offset-ivory-100",
              )}
            >
              {primaryAction.label}
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-700 transition-colors hover:bg-forest-700/8 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="menu-movil"
            ref={panelRef}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? {} : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeSoft }}
            className="overflow-hidden border-t border-ivory-300/70 bg-ivory-100 lg:hidden"
          >
            <Container size="wide">
              <nav aria-label="Navegación principal (móvil)" className="py-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-base transition-colors",
                          isActive(link.href)
                            ? "bg-honey-100 font-medium text-forest-700"
                            : "text-ink-700 hover:bg-forest-700/6",
                        )}
                      >
                        <span>{link.fullLabel ?? link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={primaryAction.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(primaryAction.href) ? "page" : undefined}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-clay-500 px-7 py-3.5 text-base font-medium text-ivory-50 transition-colors duration-200 hover:bg-clay-600"
                >
                  {primaryAction.label}
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
