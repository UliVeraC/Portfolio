# Gotchas

Trampas que costaron tiempo. Anota solo lo no obvio.

## El navegador cachea `output.css` / `*.js` al servir con `npx serve`
**Síntoma:** cambias el CSS o el JS, recargas, y "no pasa nada" (parece que el
arreglo no funciona). En realidad el navegador sirve la versión vieja cacheada
(ETag/Cache-Control de `serve`).

**Solución:** recarga forzada `Ctrl + Shift + R`, o abre DevTools (F12) →
Network → marca **"Disable cache"** y déjalo abierto mientras iteras.

**Cuándo:** apareció validando los arreglos de comportamiento (scrollspy de la
nav). El código nuevo era correcto; solo no se estaba cargando.
