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

const clickx = document.getElementById("pencet");

clickx.addEventListener("click", function () {
  clickx.classList.toggle("Diam");
});
