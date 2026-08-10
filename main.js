document.addEventListener("DOMContentLoaded", () => {
  // --- 1. LÓGICA DE MODO OSCURO / CLARO ---
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      htmlElement.setAttribute("data-theme", "light");
      themeIcon.textContent = "☀️";
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      themeIcon.textContent = "🌙";
    }
  });

  // --- 2. LÓGICA DE NAVEGACIÓN ENTRE TARJETAS (PESTAÑAS) ---
  const navLinks = document.querySelectorAll("header nav a, .logo");
  const menuLinks = document.querySelectorAll("header nav a");
  const cards = document.querySelectorAll("main .card");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita el salto brusco de la página

      const targetId = link.getAttribute("href").substring(1);

      // Actualizamos la clase 'active' solo en los enlaces del menú superior
      menuLinks.forEach((nav) => {
        if (nav.getAttribute("href") === `#${targetId}`) {
          nav.classList.add("active");
        } else {
          nav.classList.remove("active");
        }
      });

      // Recorremos todas las tarjetas para mostrar la seleccionada y ocultar las demás
      cards.forEach((card) => {
        if (card.id === targetId) {
          // Si es la de inicio o portafolio, usamos 'flex', de lo contrario 'block'
          card.style.display =
            card.id === "inicio" || card.id === "portafolio" ? "flex" : "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
// --- 3. LÓGICA DE MENÚ HAMBURGUESA ---
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("header nav");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active-menu");
  });

  const menuItems = document.querySelectorAll("header nav a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("active-menu");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-target");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  const closeButtons = document.querySelectorAll(".close-modal");

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".blog-modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Cerrar también si hacen clic fuera de la cajita del modal
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("blog-modal")) {
      e.target.style.display = "none";
    }
  });
});
