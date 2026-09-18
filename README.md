# La lista pendiente

Sitio web de la comunidad **La lista pendiente**: conectar, compartir experiencias y sonreírle al miedo.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos: `npm run build`, `npm run lint`, `npm run typecheck`.

## Dónde editar contenido

Todos los textos, enlaces y colecciones viven en `lib/content/`, sin tocar componentes:

- `site.ts` — nombre, lema, menú, redes sociales y canales de contacto.
- `home.ts` — textos de la portada.
- `pages.ts` — textos de las páginas internas.
- `collections.ts` — colecciones reales (videos, eventos, viajes, galería, alianzas). Empiezan vacías a propósito: la interfaz muestra estados vacíos diseñados hasta que haya contenido real.

Colores y tipografía: `app/globals.css` (bloque `@theme`) y `lib/fonts.ts`.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS 4 · Framer Motion
