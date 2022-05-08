const pokeAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000"; //as of writing this, there are 1126 entries

type pokemonInit = {          //types the results object from fetching pokeAPI_URL
  name: string,
  url: string
};

const pokemonUrls: any[] = [];     //stores unique urls for each pokemon entry

console.log("hello");

const fetchPokemonInit = async () => {          //this function is necessary to retrieve the url of each
  const data = await fetch(pokeAPI_URL);        //individual pokemon. this way we are able to access more
  const response = await data.json();           //detailed data such as abilities, sprites, etc.
  const resultsArr = await response.results;
  resultsArr.forEach((result: string) => {
    pokemonUrls.push(result)
  });
};
fetchPokemonInit();         //now our pokemonUrls should be populated

console.log(pokemonUrls);

for(let i = 0; i < pokemonUrls.length; i++){
  console.log(pokemonUrls[i].url);
};
