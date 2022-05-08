navBtn = document.getElementById("nav-btn-js");
navbar = document.getElementById("navbar-js");
navClose = document.getElementById("nav-close-js");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
