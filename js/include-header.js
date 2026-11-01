document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("site-header");
  if (!container) return;

  fetch("../html/header.html")
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      container.replaceChildren(...doc.body.childNodes);

      const currentFile = window.location.pathname.split("/").pop();
      const navLinks = container.querySelectorAll("nav a");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentFile) {
          link.classList.add("active");
        }
      });

      if (typeof window.initThemeToggle === "function") {
        window.initThemeToggle();
      }
    });
});
