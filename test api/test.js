


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
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}

getCocteles();
