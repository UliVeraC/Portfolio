# Estado del proyecto

**Actualizado:** 2026-06-01 · **Rama:** main

## Objetivo actual
Rediseño TOTAL del portafolio a **dark minimalista, sobrio y ejecutivo** (vibe Linear/Vercel). **Landing + las 4 páginas de proyecto (CGSM, bomeri, koltek, sealive) rediseñadas, validadas por el usuario, commiteadas y pusheadas a `origin/main`** (2026-06-01). Falta solo afinar contenido (métricas reales en los case studies; stack por proyecto está inferido, confirmar).

## Dirección de diseño (acordada)
- Base: fondo casi negro `#0a0a0a`, neutros/grises, **un solo acento** naranja `#D46106`.
- Tipografía: sans limpia para el body; **mono SOLO como acento** (datos/etiquetas), nunca texto corrido.
- Fuera: fondo de calaveras + gradiente arcoíris, blobs detrás de la foto, 5 filas de logos en scroll infinito, `text-justify`, paleta multicolor.
- Proyectos → reescribir como case studies: problema → qué hiciste → impacto medible → stack.
- Añadir sección "Cómo trabajo con IA" (proceso real, sin buzzwords; nada de chatbot salvo que quede impecable).
- Pulido: `lang="es"`, microinteracciones sutiles.
- **Decisiones de sesión (2026-06-01):** hero CON foto tratada sobria (grayscale→color en hover); mono = **JetBrains Mono**; sans = **Inter**; **se eliminó por completo** la sección "Cursos y Certificaciones".
- **Implementación Tailwind v4:** la paleta y fuentes viven en `@theme` de `css/input.css` → se usan como utilidades (`bg-bg`, `text-fg`, `text-muted`, `text-accent`, `bg-surface`, `border-border`, `text-faint`, `font-mono`). Eyebrow mono via clase `.eyebrow`.

## Tooling de diseño (estado de integración)
- **ui-ux-pro-max** (skill): instalado en `.claude/skills/ui-ux-pro-max/` y **ACTIVO** (carga tras reiniciar sesión). Stack `html-tailwind` disponible. Esta es la herramienta de diseño que usamos.
- **21st SDK**: descartado. Se había instalado como deps npm (`@21st-sdk/agent|nextjs|node|react` + `ai` + `zod`), pero eso es SDK de producto para apps React/Next.js (un agente embebido), NO una herramienta de diseño ni un MCP. Choca con "estático sin framework". **Desinstalado** el 2026-06-01; `package.json` queda solo con `@tailwindcss/cli` + `tailwindcss`. `npm audit` = 0 vulnerabilidades.
- Skill de screenshots/navegador (Playwright MCP): descartado por el usuario (no le interesa). Iteramos diseño sin feedback visual automático.

## En progreso
- Sesión 2026-06-01 cerrada: diseño + comportamientos validados, commiteados y **pusheados a GitHub** (`origin/main`, hasta el commit `3c103a4`).
- [ ] Único pendiente real: afinar contenido de los case studies con métricas reales + confirmar stack por proyecto.

## Comportamiento (arreglado y validado 2026-06-01)
- **Scrollspy** (`index.js`): la nav resalta la sección visible (color acento) y refleja la sección en la URL vía `replaceState` conforme se hace scroll.
- **Volver desde páginas de proyecto** (`carousel.js`): si se llegó desde el index, los enlaces `[data-back]` usan `history.back()` → restaura el scroll exacto (caes en la card del proyecto). Respaldo: `index.html#exp`.
- **Menú móvil**: pasado a `position: absolute` (antes dejaba un hueco muerto bajo el header).

## Siguientes pasos
1. Recoger feedback visual del usuario y ajustar.
2. **Afinar contenido de los case studies con métricas/impacto REALES** (ahora son cualitativos; no se inventaron números). El usuario debe aportar cifras (usuarios, tiempos, % de mejora, etc.).
3. Confirmar el stack por proyecto en las páginas (los chips están inferidos del diseño viejo, no verificados).
4. Al tocar CSS: compilar Tailwind (`input.css` → `output.css`) y commitear `output.css`.

## Decisiones recientes (resumen; detalle en ADRs)
- **ADR 0001** (`docs/adr/0001-rediseno-dark-minimalista.md`): rediseño dark minimalista + sistema de diseño completo (paleta, tipografía, estructura). Carpeta `docs/adr/` arrancada aquí.
- Memoria operativa vive en el repo versionada; documentado en `CLAUDE.md`.
- Herramienta de diseño = skill `ui-ux-pro-max` (no 21st SDK, no Playwright). Ver "Tooling de diseño".
- Se trabaja directo sobre `main`; las ramas `Inicio` quedan en desuso.
- Se eliminó la dependencia `@tailwindplus/elements` (el dropdown de CV → dos botones simples).

## Preguntas abiertas / bloqueos
- Faltan **métricas reales** para los case studies (ver Siguientes pasos #2).

## Trampas activas (ver docs/gotchas.md)
- Ojo case-sensitive en hosting Linux: el archivo es `CGSM.html` (mayúsculas). La landing ya enlaza con la grafía correcta; verificar al desplegar.
- El carrusel de proyectos ahora vive en `/carousel.js` (compartido). Genera los dots según el nº de slides y oculta controles si hay una sola imagen (caso Bomeri).
