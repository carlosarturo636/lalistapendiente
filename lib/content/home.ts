/** Texto editorial de la portada. Escrito a partir del concepto de marca. */

export const hero = {
  heading: "Hay cosas que se viven mejor juntos.",
  support:
    "Un espacio para conectar, compartir lo que aprendemos y darle una oportunidad a eso que sigue en nuestra lista.",
  primary: { href: "/quienes-somos", label: "Conoce la comunidad" },
  secondary: { href: "/actividades", label: "Explora los encuentros" },
  /** Anotaciones sueltas del cuaderno abierto. */
  notes: ["Intentarlo", "Conectar", "Volver a empezar"],
} as const;

export const meaning = {
  eyebrow: "Qué significa esta lista",
  heading: "Aquí también caben los intentos",
  body: [
    "Una lista pendiente no es sólo aquello que el miedo nos impidió hacer. Es lo que soñamos, lo que nos atrevimos a probar y lo que aprendimos cuando la cosa no salió como esperábamos.",
    "Nos interesa lo que pasa en el camino: la conversación difícil, el viaje que se planeó tres veces, la clase a la que llegaste tarde. Los intentos también cuentan.",
  ],
} as const;

export const ways = {
  eyebrow: "Tres formas de encontrarnos",
  heading: "No hay una sola puerta de entrada",
  items: [
    {
      title: "Vivir experiencias",
      description:
        "Encuentros para hacer cosas juntos: comer, movernos, jugar y conocer gente nueva sin necesidad de explicar demasiado.",
      href: "/actividades",
      linkLabel: "Ver actividades",
    },
    {
      title: "Abrir conversaciones",
      description:
        "Videos y charlas con psicólogos sobre lo que nos frena. Contenido para pensar en voz alta, no para diagnosticar a nadie.",
      href: "/conversaciones",
      linkLabel: "Ver conversaciones",
    },
    {
      title: "Compartir el camino",
      description:
        "Conocer de dónde sale esta idea, qué nos mueve y cómo queremos acompañarnos mientras cada quien avanza en lo suyo.",
      href: "/quienes-somos",
      linkLabel: "Conocer la comunidad",
    },
  ],
} as const;

export const upcoming = {
  eyebrow: "Próximos encuentros",
  heading: "Estamos preparando los primeros",
  body: "Todavía no hay fechas confirmadas. Estas son las formas de encuentro que estamos armando; cuando haya una fecha real, aparecerá aquí.",
  /** Categorías previstas, no eventos confirmados. */
  categories: ["Comidas", "Deporte", "Yoga", "Pilates", "Juegos"],
} as const;

export const talks = {
  eyebrow: "Conversaciones que queremos abrir",
  heading: "Los temas que nos rondan",
  body: "Estos son los primeros temas que queremos trabajar junto a profesionales. Aún no hay videos publicados.",
  topics: [
    {
      title: "Miedo",
      description:
        "Qué hacemos con eso que nos paraliza y cómo aprendemos a movernos aunque siga estando ahí.",
    },
    {
      title: "Ansiedad",
      description:
        "Habitar la incertidumbre sin que se convierta en el único ruido de fondo del día.",
    },
    {
      title: "Autoestima",
      description:
        "La conversación que tenemos con nosotros mismos y cuánto pesa a la hora de intentar algo.",
    },
  ],
} as const;

export const founder = {
  eyebrow: "La persona detrás de la idea",
  heading: "Juan José Azuero",
  body: "Juan José impulsa La lista pendiente. Su historia personal es parte de lo que dio origen a esta comunidad y la estamos escribiendo con calma, para contarla bien.",
  link: { href: "/nuestra-historia", label: "Leer nuestra historia" },
} as const;

export const invitation = {
  heading: "Tu lista puede empezar con un encuentro",
  body: "Estamos armando los canales para recibir a quienes quieran sumarse. Cuéntanos que te interesa y te avisamos apenas abramos.",
  action: { href: "/unete", label: "Quiero ser parte" },
} as const;
