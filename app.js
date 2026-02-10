const qs = (s) => document.querySelector(s);

const themeBtn = qs("#themeBtn");
const themeLabel = qs("#themeLabel");
const year = qs("#year");

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved ? saved === "dark" : prefersDark);
}

themeBtn.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});

year.textContent = new Date().getFullYear();
initTheme();
