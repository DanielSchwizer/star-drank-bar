import { getCocteles } from "../../dao/cocktailDAO.js";

/**
 * se llama a la funcion getCocteles cuando se carga la pagina
 */
window.onload = getCocteles();

/**
 * variables que traen elementos html de carta.html
 */
const slidesContainer = document.getElementById("carousel-container");
const prevButton = document.getElementById("carousel-arrow-prev");
const nextButton = document.getElementById("carousel-arrow-next");

/**
 * listeners de los botones del carousel, dependiendo de donde se haga click es donde se va a deslizar la card
 */
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
