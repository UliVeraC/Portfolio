# Portfolio

Sitio web de portafolio personal de Ulises Vera Cuevas. Estático: una landing (`index.html`) más una página por proyecto destacado (Bomeri, CGSM, Koltek, Sealive). Sin backend.

## Stack
- HTML estático + JavaScript vanilla (`index.js`)
- Tailwind CSS v4 vía `@tailwindcss/cli` — se compila `css/input.css` → `css/output.css`
- Sin framework, sin bundler, sin tests

## Cómo orientarte (lee en este orden)
- `ai/STATE.md` — estado actual antes de tocar nada
- `index.html` — landing principal; las páginas de proyecto (`bomeri.html`, `CGSM.html`, `koltek.html`, `sealive.html`) replican su estructura
- `css/input.css` — variables de color (`:root`) y estilos custom; lo demás es Tailwind
- `docs/adr/`, `docs/gotchas.md` — aún no existen; créalos cuando aplique (ver Reglas)

## Convenciones
- Mobile-first: los estilos base son móvil, los breakpoints suben desde ahí
- Paleta y fuentes definidas como variables CSS en `css/input.css`
- Texto de la UI en español
- Commits: mensaje corto y descriptivo (estilo del historial actual)

## Comandos
- build CSS: `npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css`
- watch CSS (desarrollo): `npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch`
- run local: abrir `index.html` en el navegador (o servir la carpeta con cualquier static server)
- test/lint: no hay

## Reglas para el agente
- Idioma: español.
- Las decisiones con trade-off van a un ADR nuevo en `docs/adr/` (arranca la carpeta en la primera).
- Un bug que robe horas → anótalo en `docs/gotchas.md`.
- Al terminar la sesión o llegar a un punto de parada, actualiza `ai/STATE.md` (y avísame para hacer commit: ese commit es la memoria persistente).
- No dupliques en notas lo que el código o `git log` ya dicen; lee el código bajo demanda.

@ai/STATE.md
