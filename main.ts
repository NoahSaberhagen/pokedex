const pokeAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";
const pokemonUrlsArr: any = [];

console.log("goodbye");

const fetchPokemonData = async () => {
  const data = await fetch(pokeAPI_URL);
  const response = await data.json();
  const resultsArr = await response.results;

  resultsArr.forEach((pokemon) => {
    pokemonUrlsArr.push(pokemon.url);
  });
};

const generatePokedexEntry = async (array) => {
  for(let i = 0; i < array.length; i++){
    const url = array[i];
    const data = fetch(url);
    const response = data.json;
    console.log("1");
  }
}


fetchPokemonData();
generatePokedexEntry(pokemonUrlsArr);

