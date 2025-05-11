document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("site-header");
  fetch("../html/header.html")
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Rebind theme toggle after injection
      const mode_toggle = document.getElementById("light-toggle");
      mode_toggle?.addEventListener("click", function () {
        const current = localStorage.getItem("theme");
        const newTheme = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
    });
});
