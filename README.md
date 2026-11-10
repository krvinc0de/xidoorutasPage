# Xidoo Rutas · sitio

Página informativa de Xidoo Rutas, la app de transporte público, cultura y comercio local de Salamanca, Guanajuato.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # sitio estático en dist/
npm run check    # tipos y errores de Astro
```

## Estructura

```
src/
  pages/        index, aplicacion, contacto, iniciar-sesion (+ redirección proximamente)
  layouts/      Base.astro: fuentes, menú, pie, sprite de íconos y modo claro/oscuro
  components/
    layout/     Nav, Footer, IconSprite
    sections/   Hero, Facts, Services, Timeline, Wordmark, Waitlist
    ui/         Button, Field, Icon, IconRing, PageHead, RouteStage, SectionHead, StoreBadge, ThemeToggle…
  data/         site.ts (menú, pie), home.ts (inicio), pages.ts (páginas interiores)
  styles/       tokens.css (copia del Design System) y global.css (Tailwind v4)
  scripts/      reveal, motion (GSAP) y demo-form
public/         favicon e imágenes de la app
```

- **Textos:** se editan en `src/data/`, sin tocar el marcado.
- **Colores, tipografía y medidas:** salen del Design System «Xidoo Rutas» en Claude. Para cambiarlos, edítalos allí y vuelve a copiar su `tokens.css` en `src/styles/tokens.css`. Tailwind los expone como utilidades (`bg-bg-raise`, `text-accent`, `rounded-md`, `font-display`…).
- **Formularios:** por ahora son de demostración (`src/scripts/demo-form.ts`) y no envían datos.
