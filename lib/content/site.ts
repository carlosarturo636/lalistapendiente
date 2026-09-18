import type { NavLink, SocialLink } from "@/types/content";

export const site = {
  name: "La lista pendiente",
  tagline: "Sonreírle al miedo. Darle espacio a la vida.",
  description:
    "Una comunidad para conectar, compartir lo que aprendemos y darle una oportunidad a eso que sigue en nuestra lista.",
  founder: "Juan José Azuero",
} as const;

export const navLinks: NavLink[] = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/nuestra-historia", label: "Nuestra historia" },
  { href: "/conversaciones", label: "Conversaciones", fullLabel: "Videos con psicólogos" },
  { href: "/actividades", label: "Actividades" },
  { href: "/alianzas", label: "Alianzas" },
];

export const primaryAction = { href: "/unete", label: "Únete" } as const;

/** Las cuentas sin `url` todavía no existen: se muestran como "próximamente".
 *  Al añadir la URL real, el enlace se activa solo. */
export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/lalistapendiente",
  },
  { platform: "tiktok", label: "TikTok" },
  { platform: "youtube", label: "YouTube" },
];

/** No hay correo ni teléfono oficiales todavía. */
export const contactChannels = {
  email: undefined as string | undefined,
  phone: undefined as string | undefined,
};
