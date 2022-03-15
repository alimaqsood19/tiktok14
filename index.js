
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) {
    return response.json(); //response comes in as ANOTHER promise, in order to use the correct data, we need to parse the JSON
  }).then(function (data) {
    $(".card-img-top").attr("src", data?.sprites.front_default);
  })
