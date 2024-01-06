const yearPage = document.querySelector(".year");
const yearNow = new Date().getFullYear();
yearPage.textContent = yearNow;

//

const btnOpenMenu = document.querySelector(".menu-button-menu");
const btnCloseMenu = document.querySelector(".menu-button-close");
const navBarElm = document.querySelector(".nav-bar");
const navBtnsElm = document.querySelector(".navbar-links");

btnOpenMenu.addEventListener("click", function () {
  navBarElm.classList.add("nav-bar-open");
});

btnCloseMenu.addEventListener("click", function () {
  navBarElm.classList.remove("nav-bar-open");
});

navBtnsElm.addEventListener("click", function () {
  navBarElm.classList.remove("nav-bar-open");
});

//

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
