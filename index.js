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