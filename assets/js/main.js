const toggle = document.querySelector(".burger-menu input");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
