"strict";

const menuToggleBtn = document.querySelector(".menu-toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

const toggleMenu = function () {
  navbarLinks.classList.toggle("active");
};

menuToggleBtn.addEventListener("click", toggleMenu);

// --------------------------------- PAGE SLIDER
const pages = document.querySelector(".page-container").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let totalPages = pages.length;
let index = 0;

const updatePagePosition = function () {
  for (let page of pages) {
    page.classList.remove("active");
  }
  pages[index].classList.add("active");
};

const nextPage = function () {
  if (index === totalPages - 1) {
    index = 0;
  } else {
    index++;
  }
  updatePagePosition();
};

const prevPage = function () {
  if (index === 0) {
    index = totalPages - 1;
  } else {
    index--;
  }
  updatePagePosition();
};

next.addEventListener("click", nextPage);
prev.addEventListener("click", prevPage);
