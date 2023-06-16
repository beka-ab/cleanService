const hamburgerBtn = document.querySelector(".hamburger-menu-lines");
const hamburgerMenu = document.querySelector(".nav-menu-lists-hamburger");
const hamburgerMenuLines = document.querySelectorAll(".hamburger-menu-line");
const body = document.querySelector(".top-content");
hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  hamburgerMenuLines.forEach((e) => {
    e.classList.toggle("hamburger-menu-line-active");
  });
  body.classList.toggle("body-op");
});
console.log(hamburgerMenuLines);
