function initThemeToggle() {
  const mode_toggle = document.getElementById("light-toggle");

  const setTheme = (theme, animate = false) => {
    if (animate) {
      document.documentElement.classList.add("transition");
      setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 500);
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const current = localStorage.getItem("theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next, true);
  };

  // Apply saved theme immediately
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved); // <- Fix: this ensures data-theme is set on load

  // Attach listener after button exists
  if (mode_toggle) {
    mode_toggle.addEventListener("click", toggleTheme);
  }
}

// Run immediately if toggle exists (inline header like index.html)
if (document.getElementById("light-toggle")) {
  initThemeToggle();
}

// Expose for include-header.js to call later
window.initThemeToggle = initThemeToggle;
