# ADR 0001 — Rediseño dark minimalista

**Fecha:** 2026-06-01 · **Estado:** aceptado

## Contexto
El portfolio original era colorido y recargado (fondo de calaveras + gradiente
arcoíris, blobs tras la foto, 5 filas de logos en scroll infinito, paleta
multicolor, `text-justify`, todo en fuente mono). No proyecta seniority ni
encaja con el perfil objetivo (ingeniero de software senior, fluido con IA).

## Decisión
Rediseño total a **dark minimalista, sobrio y ejecutivo** (referencia
Linear/Vercel). Sistema de diseño:

- **Paleta** (variables en `css/input.css` vía `@theme` de Tailwind v4):
  `bg #0a0a0a` · `surface #141414` · `border #262626` · `fg #ededed` ·
  `muted #a1a1aa` · `faint #525252` · **un solo acento** `accent #d46106`
  (+ `accent-hover #e8740a`).
- **Tipografía:** `Inter` para títulos y cuerpo; `JetBrains Mono` **solo como
  acento** (eyebrows, labels, métricas, chips de stack), nunca texto corrido.
- **Layout:** mucho aire, `max-w` consistente, line-length ≤ 65ch, mobile-first.

## Cambios de contenido/estructura
- Hero: foto conservada pero sobria (marco sutil, grayscale → color en hover);
  fuera blobs y formas.
- Stats: se elimina "ganas ilimitadas" (cursi para el tono buscado).
- Stack: fuera el scroll infinito → grid estático agrupado por categoría.
- Experiencias → reescritas como **case studies** (problema → qué hice →
  impacto medible → stack).
- Nueva sección **"Cómo trabajo con IA"** (proceso real, sin buzzwords).
- **Se elimina por completo** la sección "Cursos y Certificaciones" (los cursos
  en proceso al 5%/7% debilitan la imagen senior).

## Consecuencias
- Se mantiene el stack: HTML estático + Tailwind v4 + JS vanilla, sin framework.
- Se elimina la dependencia de `@tailwindplus/elements` (el dropdown de CV se
  sustituye por botones simples).
- Las páginas de proyecto (`bomeri/CGSM/koltek/sealive.html`) deben replicar la
  nueva base después de validar la landing.
