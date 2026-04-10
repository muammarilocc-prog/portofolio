// ================= MENU NAVBAR =================
class Menu {
  constructor() {
    this.nav = document.getElementById("navMenu");
  }

  toggle() {
    if (this.nav) {
      this.nav.classList.toggle("active");
    }
  }

  close() {
    if (this.nav) {
      this.nav.classList.remove("active");
    }
  }
}

// ================= LANDING PAGE =================
class LandingPage {
  constructor() {
    this.landing = document.getElementById("landingPage");
    this.main = document.getElementById("mainContent");
    this.button = document.getElementById("btnMasuk");

    // SET AWAL (WAJIB)
    if (this.main) {
      this.main.style.display = "none";
    }

    if (this.landing) {
      this.landing.style.display = "flex";
      this.landing.style.opacity = "1";
    }

    // event tombol masuk
    if (this.button) {
      this.button.addEventListener("click", (e) => {
        e.preventDefault();
        this.masuk();
      });
    }
  }

  masuk() {
    if (!this.landing || !this.main) return;

    // fade out
    this.landing.style.opacity = "0";

    setTimeout(() => {
      this.landing.style.display = "none";
      this.main.style.display = "block";

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);
  }
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", function () {

  const menu = new Menu();
  new LandingPage();

  // GLOBAL FUNCTION (WAJIB pakai window)
  window.toggleMenu = function(){
    menu.toggle();
  }

  window.closeMenu = function(){
    menu.close();
  }

  window.kembaliLanding = function(){
    const landing = document.getElementById("landingPage");
    const main = document.getElementById("mainContent");

    if (!landing || !main) return;

    // tampilkan landing
    landing.style.display = "flex";
    landing.style.opacity = "0";

    setTimeout(() => {
      landing.style.opacity = "1";
    }, 50);

    // sembunyikan main
    main.style.display = "none";

    // scroll ke atas
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

});