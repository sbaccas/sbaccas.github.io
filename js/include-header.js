document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("site-header");

  fetch("../html/header.html")
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Call the theme toggle setup AFTER header is injected
      if (typeof window.initThemeToggle === "function") {
        window.initThemeToggle();
      }
    });
});
