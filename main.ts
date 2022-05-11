import $ from "jquery"

const POKE_LIMIT = 1125;
let pokemon: Pokemon[] = [];
let currentPokemonIdx = 0;

const updatePokemonDisplay = () => {
  const nameData = pokemon[0].name;
  const spriteData = pokemon[0].sprites.front_default !== null ? pokemon[0].sprites.front_default : "PLACEHOLDER"

  const sprite = document.createElement("img");
  sprite.setAttribute("src", spriteData);

  const pokemonDisplay = document.querySelector(".display-wrapper__pokemon-display");
  pokemonDisplay?.appendChild(sprite);
}

const fetchPokeAPI = async () => { 
  const pokeAPI_URL = `https://pokeapi.co/api/v2/pokemon?` + new URLSearchParams({
    limit: "3",
    offset: currentPokemonIdx.toString()
  });

  const response = await fetch(pokeAPI_URL);                                         
  const data = await response.json();   
  const pokemonToFetch = data.results;

  const newPokemon: Pokemon[] = [];
  for(let i = 0; i < pokemonToFetch.length; i++){
    const response = await fetch(pokemonToFetch[i].url);
    const data = await response.json();
    newPokemon.push(data);
  };  
  
  pokemon = newPokemon;
  console.log(pokemon)
  updatePokemonDisplay();
};
await fetchPokeAPI();