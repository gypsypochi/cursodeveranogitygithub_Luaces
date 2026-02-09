const qs = (s) => document.querySelector(s);

const themeBtn = qs("#themeBtn");
const themeLabel = qs("#themeLabel");
const year = qs("#year");

const form = qs("#contactForm");
const msg = qs("#formMsg");

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  localStorage.setItem("st_theme", isDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("st_theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  setTheme(saved ? saved === "dark" : !!prefersDark);
}

themeBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  setTheme(isDark);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "";

  const name = qs("#name").value.trim();
  const email = qs("#email").value.trim();
  const message = qs("#message").value.trim();

  if (name.length < 2) {
    msg.textContent = "Revisá el nombre (mínimo 2 caracteres).";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Revisá el email.";
    return;
  }
  if (message.length < 10) {
    msg.textContent = "El mensaje debe tener al menos 10 caracteres.";
    return;
  }

  msg.textContent = "Listo. Mensaje validado (sin envío real).";
  form.reset();
});

year.textContent = new Date().getFullYear();
initTheme();
