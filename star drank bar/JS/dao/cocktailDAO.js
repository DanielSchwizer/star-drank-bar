import { Cocktail } from "../models/cocktail-model.js";

export function getCocteles() {
  fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  ).then(function (response) {
    if (response.status != 200) {
      console.log(response.status);
      return;
    }
    response
      .json()
      .then(function (data) {
        createCocktail(data);
        return data;
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}

function createCocktail(data) {
  var drink;
  for (let i = 0; i < 100; i++) {
    var drink = new Cocktail(
      data.drinks[i].idDrink,
      data.drinks[i].strDrinkThumb,
      data.drinks[i].strDrink
    );
    let section = document.getElementById("carousel-container");
    let slide = document.createElement("li");
    slide.classList.add("cocktail-card");
    let drinkName = document.createElement("h2");
    let div = document.createElement("div");
    let drinkImg = document.createElement("img");
    div.classList.add("cocktail-card__div");
    drinkName.classList.add("cocktail-card__name");
    drinkImg.classList.add("cocktail-card__img");
    drinkImg.src = drink.getImg();
    drinkName.innerHTML = drink.getName();
    section.appendChild(slide);
    slide.appendChild(drinkName);
    div.appendChild(drinkImg);
    slide.appendChild(div);
  }

  return drink;
}
