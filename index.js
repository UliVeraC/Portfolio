function downloadFile(fileName) {
  const link = document.createElement("a");
  link.href = `/assets/${fileName}`; // 👉 cambia a la ruta real de tus CVs
  link.download = fileName; // 👉 fuerza la descarga
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll("#mobile-menu .mobile-link");

toggle.addEventListener("click", () => {
  menu.classList.toggle("scale-y-0");
  menu.classList.toggle("scale-y-100");
});

// Cierra el menú al hacer clic en cualquier enlace
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("scale-y-0");
    menu.classList.remove("scale-y-100");
  });
});

// Scrollspy: resalta el link de la sección visible y refleja esa sección en
// la URL conforme se hace scroll (sin saltos, vía replaceState).
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
if (navLinks.length) {
  const linksById = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (!linksById.has(id)) linksById.set(id, []);
    linksById.get(id).push(link);
  });
  const targets = [...linksById.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let currentId = null;
  const setActive = (id) => {
    if (id === currentId) return;
    currentId = id;
    navLinks.forEach((l) => l.classList.remove("is-active"));
    if (!id) return;
    (linksById.get(id) || []).forEach((l) => l.classList.add("is-active"));
    history.replaceState(null, "", "#" + id);
  };

  // Mantiene el conjunto de secciones visibles y elige la primera en orden
  // de documento como la activa. Robusto durante las transiciones.
  const visible = new Set();
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });
      const active = targets.map((t) => t.id).find((id) => visible.has(id));
      setActive(active || null);
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );
  targets.forEach((t) => spy.observe(t));
}