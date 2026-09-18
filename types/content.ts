/** Tipos de las colecciones de contenido. Todas empiezan vacías: se llenan
 *  cuando exista material real verificable. */

export interface NavLink {
  href: string;
  label: string;
  /** Nombre completo cuando el menú usa una versión abreviada. */
  fullLabel?: string;
}

/** Enlace a una red social. Sólo se muestra si `url` existe. */
export interface SocialLink {
  platform: "instagram" | "tiktok" | "youtube" | "whatsapp";
  label: string;
  url?: string;
}

export type VideoCategory = "entrevistas" | "capsulas" | "preguntas";

export interface Video {
  id: string;
  title: string;
  category: VideoCategory;
  /** Tema tratado, p. ej. "Miedo". */
  topic?: string;
  /** Duración en minutos. */
  durationMinutes?: number;
  /** Profesional que participa. Sin datos inventados. */
  professional?: {
    name: string;
    credential?: string;
  };
  /** Ruta en /public o URL remota configurada en next.config.ts. */
  thumbnail?: string;
  /** Sólo con una URL válida se renderiza un reproductor. */
  url?: string;
}

export type EventStatus = "abierto" | "cerrado" | "proximamente";

export interface CommunityEvent {
  id: string;
  title: string;
  /** Fecha ISO: "2026-05-14". */
  date: string;
  location?: string;
  description?: string;
  image?: string;
  registrationStatus: EventStatus;
  category?: string;
}

export interface Trip extends CommunityEvent {
  destination: string;
  /** Texto libre: la cifra sólo se muestra si existe. */
  cost?: string;
  includes?: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface Ally {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  url?: string;
}
