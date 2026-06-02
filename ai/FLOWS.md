# Flujos técnicos — Portfolio

Registro por sesión de los flujos de usuario/código tocados. Complementa
`ai/STATE.md` (el "qué"/estado) con el "cómo" técnico y el porqué de las
decisiones. No dupliques el código; apunta lo que no es obvio leyéndolo.

---

## 2026-06-01 — Rediseño dark minimalista + comportamientos

**Commits:**
- `4c3e752` — limpieza previa (descarta 21st SDK, deja de versionar node_modules) · https://github.com/UliVeraC/Portfolio/commit/4c3e752
- `9c43037` — rediseño + comportamientos · https://github.com/UliVeraC/Portfolio/commit/9c43037

### Flujo: sistema de diseño (CSS)
- **Archivos:** `css/input.css` → `css/output.css`
- **Qué:** paleta y tipografía definidas en `@theme` de Tailwind v4, por lo que
  se consumen como utilidades (`bg-bg`, `text-fg`, `text-muted`, `text-accent`,
  `bg-surface`, `border-border`, `text-faint`, `font-mono`).
- **Decisión:** usar `@theme` (no `:root` suelto) para que la paleta sea
  utilidades. La regla `.nav-link.is-active` va **sin `@layer` a propósito**:
  así gana a la utilidad `text-muted` (en cascade layers, lo no-layered vence a
  lo layered, sin importar especificidad).

### Flujo: navegación reactiva (scrollspy)
- **Archivos:** `index.html` (clase `nav-link` en los enlaces), `index.js`, `css/input.css`
- **Qué:** `IntersectionObserver` con banda central (`rootMargin -45%/-45%`)
  marca la sección visible y refleja la sección en la URL vía
  `history.replaceState`.
- **Decisión:** `replaceState` (no `pushState`) para no inundar el historial;
  activo en color **acento** para que sea inconfundible. Mantiene un `Set` de
  secciones visibles y elige la primera en orden de documento → robusto durante
  las transiciones. (Primer intento fallaba en apariencia por **caché de
  `serve`**, no por el código; ver `docs/gotchas.md`.)

### Flujo: volver desde páginas de proyecto a la posición previa
- **Archivos:** las 4 `*.html` (enlaces `[data-back]` + respaldo `index.html#exp`), `carousel.js`
- **Qué:** si `document.referrer` es la home → `history.back()` (el navegador
  restaura el scroll exacto, caes en la card del proyecto). Si se entró directo
  → respaldo `index.html#exp` (sección Experiencia).
- **Decisión:** `history.back()` aprovecha la restauración nativa de scroll; más
  fiel que recordar la posición a mano.

### Flujo: carrusel de proyectos
- **Archivos:** `carousel.js` (compartido por las 4 páginas)
- **Qué:** genera los indicadores (dots) según el nº real de slides; oculta
  controles si hay una sola imagen (caso Bomeri).
- **Decisión:** extraído a un único archivo para no duplicar ~70 líneas por
  página y arreglar de raíz el bug de dots fijos (Bomeri tenía 4 dots y 1 imagen).

### Flujo: menú móvil
- **Archivos:** `index.html` (el toggle de `index.js` no cambió)
- **Qué:** contenedor a `position: absolute` (`top-full`) → ya no ocupa espacio
  en el flujo cuando está colapsado con `scale-y-0` (antes dejaba un hueco).

### Otros
- Icono de GitHub del stack: `invert` (negro→blanco) para que se vea en dark.
- Eliminada la dependencia `@tailwindplus/elements` (dropdown de CV → botones).
