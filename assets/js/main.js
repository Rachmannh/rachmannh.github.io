// Navigation
const burgerToggle = document.querySelector(".burger-menu input");
const nav = document.querySelector("nav ul");

burgerToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Change Navbar BG Color on Hover
function scrollValue() {
  var navbar = document.getElementById("navbar");
  var scroll = window.scrollY;
  if (scroll < 50) {
    navbar.classList.remove("my-bg-custom");
  } else {
    navbar.classList.add("my-bg-custom");
  }
}

window.addEventListener("scroll", scrollValue);
