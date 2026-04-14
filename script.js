/* ================= MENU ================= */
const Menu = {
  nav: document.getElementById("navMenu"),

  toggle() {
    this.nav?.classList.toggle("active");
  },

  close() {
    this.nav?.classList.remove("active");
  }
};

/* ================= LANDING PAGE ================= */
const LandingPage = {
  landing: document.getElementById("landingPage"),
  main: document.getElementById("mainContent"),
  button: document.getElementById("btnMasuk"),

  init() {
    if (!this.landing || !this.main) return;

    this.main.style.display = "none";
    this.landing.style.display = "flex";

    this.button?.addEventListener("click", (e) => {
      e.preventDefault();
      this.masuk();
    });
  },

  masuk() {
    this.landing.style.opacity = "0";

    setTimeout(() => {
      this.landing.style.display = "none";
      this.main.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }
};

/* ================= THEME ================= */
const Theme = {
  root: document.documentElement,
  btn: document.getElementById("themeToggle"),
  icon: document.querySelector("#themeToggle .icon"),

  init() {
    if (!this.btn || !this.icon) return;

    this.current = localStorage.getItem("theme") || "dark";
    this.apply(false);

    this.btn.addEventListener("click", () => this.toggle());
  },

  apply(animate = true) {
    this.root.setAttribute("data-theme", this.current);
    localStorage.setItem("theme", this.current);

    this.icon.textContent = this.current === "dark" ? "☀️" : "🌙";

    if (animate) {
      this.icon.style.transform = "rotate(180deg)";
      setTimeout(() => {
        this.icon.style.transform = "rotate(0deg)";
      }, 200);
    }
  },

  toggle() {
    this.current = this.current === "dark" ? "light" : "dark";
    this.apply(true);
  }
};

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  LandingPage.init();
  Theme.init();
});
function kembaliLanding() {
  const landing = document.getElementById("landingPage");
  const main = document.getElementById("mainContent");

  if (!landing || !main) return;

  // sembunyikan main
  main.style.display = "none";

  // tampilkan landing lagi
  landing.style.display = "flex";
  landing.style.opacity = "1";

  // scroll ke atas
  window.scrollTo({ top: 0, behavior: "smooth" });
}