# Estado del proyecto

**Actualizado:** 2026-06-01 · **Rama:** main

## Objetivo actual
Rediseño TOTAL del portafolio: de "colorido/muchos efectos" a **dark minimalista, sobrio y ejecutivo** (vibe Linear/Vercel). Debe proyectar seniority y fluidez trabajando con IA (demostrar, no presumir).

## Dirección de diseño (acordada)
- Base: fondo casi negro `#0a0a0a`, neutros/grises, **un solo acento** naranja `#D46106`.
- Tipografía: sans limpia para el body; **mono SOLO como acento** (datos/etiquetas), nunca texto corrido.
- Fuera: fondo de calaveras + gradiente arcoíris, blobs detrás de la foto, 5 filas de logos en scroll infinito, `text-justify`, paleta multicolor.
- Proyectos → reescribir como case studies: problema → qué hiciste → impacto medible → stack.
- Añadir sección "Cómo trabajo con IA" (proceso real, sin buzzwords; nada de chatbot salvo que quede impecable).
- Pulido: `lang="es"`, microinteracciones sutiles.

## Tooling de diseño (estado de integración)
- **ui-ux-pro-max** (skill): instalado en `.claude/skills/ui-ux-pro-max/` y **ACTIVO** (carga tras reiniciar sesión). Stack `html-tailwind` disponible. Esta es la herramienta de diseño que usamos.
- **21st SDK**: descartado. Se había instalado como deps npm (`@21st-sdk/agent|nextjs|node|react` + `ai` + `zod`), pero eso es SDK de producto para apps React/Next.js (un agente embebido), NO una herramienta de diseño ni un MCP. Choca con "estático sin framework". **Desinstalado** el 2026-06-01; `package.json` queda solo con `@tailwindcss/cli` + `tailwindcss`. `npm audit` = 0 vulnerabilidades.
- Skill de screenshots/navegador (Playwright MCP): descartado por el usuario (no le interesa). Iteramos diseño sin feedback visual automático.

## En progreso
- [ ] Empezar el rediseño por `css/input.css` (nueva base de paleta/tipografía/espaciado).

## Siguientes pasos
1. Reescribir `css/input.css` con la nueva base (paleta `#0a0a0a` + acento `#D46106` + tipografía sans/mono + espaciado).
2. Rehacer hero sobrio → validar.
3. Proyectos como case studies; colapsar stack; sección IA; pulido (`lang="es"`, microinteracciones); replicar a páginas de proyecto.
4. Al tocar CSS: compilar Tailwind (`input.css` → `output.css`) y commitear `output.css`.

## Decisiones recientes (resumen; detalle en ADRs)
- Memoria operativa vive en el repo versionada (no en almacén privado del agente). Aún sin ADR formal; documentado en `CLAUDE.md`.
- Rediseño dark minimalista / rediseño total (ver "Dirección de diseño").
- Herramienta de diseño = skill `ui-ux-pro-max` (no 21st SDK, no Playwright). Ver "Tooling de diseño".
- Se trabaja directo sobre `main`; las ramas `Inicio` quedan en desuso.

## Preguntas abiertas / bloqueos
- Ninguno por ahora.

## Trampas activas (ver docs/gotchas.md)
- Ninguna registrada todavía.
