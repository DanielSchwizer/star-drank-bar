import { Cocktail } from "../models/cocktail-model.js";

/**
 * funcion que hace una peticion a la API, trae la respuesta con la data y la vincula con la funcion createCocktail
 * @returns {response} el status de la respuesta(cuando hay un problema de conexion con la API)
 */

export function getCocteles() {
  fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  ).then((response) => {
    if (response.status != 200) {
      return console.log(response.status);
    }
    response
      .json()
      .then((data) => {
        console.log(data);
        createCocktail(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}

/**
 * funcion que itera la data, crea objetos del tipo cocktail y crea las cards en el DOM
 * @param {array} data colleccion de objetos
 */

function createCocktail(data) {
  var drink;
  for (let i = 0; i < 100; i++) {
    var drink = new Cocktail(
      data.drinks[i].idDrink,
      data.drinks[i].strDrinkThumb,
      data.drinks[i].strDrink
    );
    let section = document.getElementById("carousel-container");
    let card = document.createElement("li");
    card.classList.add("cocktail-card");
    let drinkName = document.createElement("h2");
    let div = document.createElement("div");
    let drinkImg = document.createElement("img");
    div.classList.add("cocktail-card__div");
    drinkName.classList.add("cocktail-card__name");
    drinkImg.classList.add("cocktail-card__img");
    drinkImg.src = drink.getImg();
    drinkName.innerHTML = drink.getName();
    section.appendChild(card);
    card.appendChild(drinkName);
    div.appendChild(drinkImg);
    card.appendChild(div);
  }
}
