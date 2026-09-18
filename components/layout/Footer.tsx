import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { navLinks, primaryAction, site, socialLinks } from "@/lib/content/site";

export function Footer() {
  const availableSocials = socialLinks.filter((social) => social.url);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-800 bg-forest-700 text-ivory-100">
      <Container size="wide">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo className="text-ivory-50" />
            <p className="max-w-xs font-display text-lg leading-snug text-ivory-200/90 italic">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Navegación del pie">
            <h2 className="text-xs font-medium tracking-[0.18em] text-honey-300 uppercase">
              Explorar
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-ivory-200/85 underline-offset-4 transition-colors hover:text-ivory-50 hover:underline"
                  >
                    {link.fullLabel ?? link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={primaryAction.href}
                  className="text-[0.9375rem] text-ivory-200/85 underline-offset-4 transition-colors hover:text-ivory-50 hover:underline"
                >
                  {primaryAction.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium tracking-[0.18em] text-honey-300 uppercase">
              Redes
            </h2>
            {availableSocials.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-2.5">
                {availableSocials.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.9375rem] text-ivory-200/85 underline-offset-4 transition-colors hover:text-ivory-50 hover:underline"
                    >
                      <SocialIcon platform={social.platform} />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[22ch] text-[0.9375rem] leading-relaxed text-ivory-200/70">
                Nuestras cuentas oficiales estarán disponibles próximamente.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ivory-100/15 py-6 text-sm text-ivory-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.name}
          </p>
          <p>Estamos construyendo este espacio. Gracias por pasar.</p>
        </div>
      </Container>
    </footer>
  );
}
