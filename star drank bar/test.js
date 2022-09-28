


function getCocteles() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
  .then(function(response) {
    if (response.status != 200) {
      console.log(response.status);
      return;
    }
    response
      .json()
      .then(function (data) {
         console.log(data);
         getCategoryCoctel(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}



function getCategoryCoctel(data){
  console.log(data.drinks[0]);

  let section = document.getElementById("carousel-container");
  let slide = document.createElement('li');
  slide.classList.add("cocktail-card")
  let drinkName = document.createElement("h2");
  let div = document.createElement('div');
  let drinkImg = document.createElement("img");
  div.classList.add("cocktail-card__div");
  drinkName.classList.add("cocktail-card__name");
  drinkImg.classList.add("cocktail-card__img");
  drinkImg.src =  data.drinks[0]. strDrinkThumb;
  drinkName.innerHTML = data.drinks[0].strDrink;
  section.appendChild(slide);
  slide.appendChild(drinkName);
  div.appendChild(drinkImg);
  slide.appendChild(div);

}

getCocteles();



