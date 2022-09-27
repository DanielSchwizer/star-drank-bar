import { getCocteles } from "../dao/cocktailDAO.js";
getCocteles();
const slidesContainer = document.getElementById("carousel-container");
const prevButton = document.getElementById("carousel-arrow-prev");
const nextButton = document.getElementById("carousel-arrow-next");

nextButton.addEventListener("click", () => {
  const slide = document.querySelector(".cocktail-card");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slide = document.querySelector(".cocktail-card");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
