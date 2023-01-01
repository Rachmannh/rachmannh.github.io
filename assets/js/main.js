// Bootstrap Offcanvas
const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
);

// Nav Slide Animation
const burgerMenu = document.querySelector(".burger-menu input");
const nav = document.querySelector("nav ul");

burgerMenu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
