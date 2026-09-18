/** Texto editorial de las páginas internas. */

export const about = {
  eyebrow: "Quiénes somos",
  heading: "Una comunidad para lo que todavía queremos vivir",
  intro:
    "La lista pendiente nace de una idea simple: al final, lo que nos llevamos es lo vivido. Y casi todo lo que vale la pena vivir se parece más a un encuentro que a un logro.",
  mission: {
    title: "Nuestra misión",
    body: "Crear espacios donde las personas puedan conocerse de verdad, compartir lo que están intentando y encontrar compañía para eso que llevan tiempo aplazando.",
  },
  purpose: {
    title: "Nuestro propósito",
    body: "Que hablar de miedo, de dudas y de intentos fallidos sea algo normal entre nosotros, y que de esas conversaciones salgan planes concretos.",
  },
  meaning: {
    title: "Qué significa la lista pendiente",
    body: "Es lo que deseamos vivir, lo que nos atrevimos a intentar, nuestras victorias, nuestros fracasos y lo que aprendemos en el camino. No es una carrera contra el tiempo ni una lista de tareas por cumplir.",
  },
  values: [
    {
      title: "Conectar",
      description:
        "Conocer gente sin agenda, sin currículum de por medio. Coincidir en algo concreto y ver qué pasa.",
    },
    {
      title: "Ayudar",
      description:
        "Estar cerca cuando alguien lo necesita. A veces es acompañar a una primera clase; a veces es sólo escuchar.",
    },
    {
      title: "Disfrutar",
      description:
        "Darle lugar a lo que se siente bien: una comida larga, un partido, un plan que no rinde para nada más que pasarla bien.",
    },
    {
      title: "Sonreírle al miedo",
      description:
        "No fingir que no está. Mirarlo, nombrarlo y hacerle un espacio más pequeño del que suele tomarse.",
    },
  ],
  manifesto: [
    "Creemos que nadie tiene que tener la vida resuelta para empezar algo.",
    "Creemos que los intentos que salieron mal también merecen contarse.",
    "Creemos que la curiosidad se contagia más rápido en grupo.",
    "Creemos que no hay que aprovechar cada segundo: alcanza con no dejar pasar los que importan.",
  ],
} as const;

export const history = {
  eyebrow: "Nuestra historia",
  heading: "De dónde sale esta idea",
  intro:
    "Estamos escribiendo esta parte con calma. Lo que sigue es el marco: el origen del proyecto, cómo está empezando y hacia dónde queremos llevarlo.",
  sections: [
    {
      title: "El origen",
      body: "La lista pendiente empieza por una pregunta incómoda: cuánto de lo que queremos vivir se queda esperando un momento mejor. Juan José Azuero impulsa esta comunidad a partir de su propia experiencia.",
      pending: "Su relato personal está en preparación y se publicará aquí.",
    },
    {
      title: "Cómo empezó",
      body: "El proyecto está en sus primeras semanas. Por ahora es una idea tomando forma: un nombre, una manera de conversar y las ganas de organizar los primeros encuentros.",
      pending: "Los primeros hitos se irán sumando a medida que ocurran.",
    },
    {
      title: "Hacia dónde vamos",
      body: "Queremos encuentros presenciales frecuentes, actividades que den ganas de repetir y conversaciones con psicólogos que ayuden a entender lo que nos frena. Lo decimos como aspiración, porque todavía está por construirse.",
      pending: undefined,
    },
  ],
} as const;

export const conversations = {
  eyebrow: "Videos con psicólogos",
  heading: "Conversaciones para pensar en voz alta",
  intro:
    "Estamos preparando una serie de contenidos junto a profesionales de la psicología. Serán conversaciones de carácter informativo: no reemplazan una consulta ni son atención psicológica individual.",
  categories: [
    { id: "entrevistas", label: "Entrevistas", description: "Conversaciones largas sobre un tema." },
    { id: "capsulas", label: "Cápsulas cortas", description: "Ideas breves para el día a día." },
    {
      id: "preguntas",
      label: "Preguntas de la comunidad",
      description: "Respuestas a lo que nos escriben.",
    },
  ],
  questions: {
    title: "Envía tu pregunta",
    body: "Queremos que parte del contenido salga de lo que ustedes preguntan. Este canal estará disponible próximamente.",
  },
} as const;

export const activities = {
  eyebrow: "Actividades y eventos",
  heading: "Planes para vernos en persona",
  intro:
    "Estamos preparando nuestros primeros encuentros. Cuando haya fechas confirmadas aparecerán aquí, en la lista y en el calendario.",
  plannedCategories: [
    {
      title: "Comidas",
      description: "Mesas largas donde lo importante es la conversación.",
    },
    { title: "Deporte", description: "Movernos juntos, al ritmo de cada quien." },
    { title: "Yoga", description: "Sesiones abiertas para empezar sin experiencia previa." },
    { title: "Pilates", description: "Clases pensadas para quienes nunca han ido." },
    { title: "Juegos", description: "Tardes de juegos para conocerse sin presión." },
  ],
  trips: {
    title: "Viajes",
    body: "Queremos organizar viajes cortos con la comunidad. Todavía no hay destinos ni costos definidos.",
  },
  galleryNote:
    "La galería se reserva para fotos reales de nuestros encuentros. Estará disponible después del primero.",
} as const;

export const allies = {
  eyebrow: "Fundaciones aliadas",
  heading: "Trabajar con quienes ya están haciendo",
  intro:
    "Queremos sumar fuerzas con fundaciones y organizaciones que trabajan en salud mental, bienestar y comunidad. Aún no hay alianzas confirmadas.",
  collaboration: {
    title: "Cómo podríamos colaborar",
    items: [
      {
        title: "Charlas",
        description:
          "Espacios abiertos donde un equipo comparte su trabajo y responde preguntas de la comunidad.",
      },
      {
        title: "Recursos",
        description:
          "Material, guías y herramientas que podamos poner a disposición de quienes nos siguen.",
      },
      {
        title: "Acompañamiento",
        description:
          "Orientación profesional para que lo que hacemos esté bien cuidado desde el principio.",
      },
    ],
  },
  form: {
    title: "Quiero aliarme",
    notice:
      "Todavía no estamos recibiendo solicitudes. Este formulario muestra la información que pediremos cuando el canal esté abierto.",
  },
} as const;

export const join = {
  eyebrow: "Únete",
  heading: "Todavía no abrimos, pero ya puedes ir anotándolo",
  intro:
    "Estamos armando los canales para recibir a la comunidad. Aquí estará todo lo necesario para escribirnos, seguirnos y colaborar.",
  social: {
    title: "Síguenos en redes",
    body: "Aún no tenemos cuentas oficiales publicadas. En cuanto existan, los enlaces aparecerán aquí.",
  },
  collaborate: {
    title: "Colabora con nosotros",
    items: [
      {
        title: "Marcas",
        description:
          "Empresas que quieran acompañar los encuentros o aportar a las actividades de la comunidad.",
      },
      {
        title: "Psicólogos",
        description:
          "Profesionales interesados en participar en las conversaciones y aportar su mirada.",
      },
      {
        title: "Personas",
        description:
          "Quien quiera sumarse, proponer un plan o simplemente estar al tanto de lo que viene.",
      },
    ],
  },
  contact: {
    title: "Contacto directo",
    notice:
      "El formulario todavía no está habilitado: no envía ni guarda información. Lo dejamos visible para que sepas qué te vamos a preguntar.",
  },
} as const;
