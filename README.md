# josecarnero.org

Web de Jose Carnero, profesor de Ashtanga y Rocket Yoga en Ferrol. Está hecha con [Astro](https://astro.build) y se publica en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # comprueba tipos y genera dist/
npm run preview   # sirve dist/ en local
```

Requiere Node 22 o superior.

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| Horarios, contacto, estudio, formación, maestros | `src/data/site.ts` |
| Eventos (talleres, retiros) | `src/content/events/*.md` (un archivo por evento) |
| Fotos | `src/assets/photos/`, `src/assets/events/` |
| Colores y tipografía | `src/styles/global.css` (variables en `:root`) |
| Páginas | `src/pages/` |

### Añadir un evento

1. Copia uno de los `.md` de `src/content/events/` con un nombre nuevo, por ejemplo `retiro-2027.md`. El nombre del archivo es la URL: `/eventos/retiro-2027/`.
2. Cambia el frontmatter (fechas, lugar, portada, agenda…) y el texto.
3. Haz push a `main`.

Si la fecha de fin ya ha pasado, el evento pasa solo a «Encuentros anteriores». La web se reconstruye cada lunes para que esto ocurra aunque no haya cambios.

### Fotos

Sube JPG de unos 2400 px por el lado largo. Astro genera en el build las versiones AVIF y WebP a varios tamaños. No hace falta subir originales de 15 MB.

## Despliegue

`.github/workflows/deploy.yml` construye y publica en GitHub Pages en cada push a `main`. En *Settings → Pages* la fuente tiene que estar en **GitHub Actions**.

Las URLs antiguas (`/pages/*.html`) redirigen a las nuevas mediante `public/pages/`.
