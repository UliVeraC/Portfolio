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

## VS Code Source Control muestra miles de archivos que git ya ignora
**Síntoma:** la terminal dice `nothing to commit, working tree clean` pero el
panel Source Control de VS Code sigue listando ~miles de archivos
(node_modules, .claude). Da la impresión de que hay un commit gigante pendiente.

**Causa:** VS Code cachea un estado de git viejo (anterior a crear el
`.gitignore` / a los commits) y no lo refresca solo.

**Solución:** refrescar Source Control (icono ⟳) o `Ctrl+Shift+P` →
**"Developer: Reload Window"**. No tocar el repo: `git status` en terminal es la
fuente de verdad, no el panel.

