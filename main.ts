import $ from "jquery"

const POKE_LIMIT = 1125;
let pokemon: Pokemon[] = [];
let currentPokemonIdx = 0;

const updatePokemonDisplay = () => {
  document.querySelector(".sprite")?.remove();

  const nameData = pokemon[0].name;
  const spriteData = pokemon[0].sprites.front_default !== null ? pokemon[0].sprites.front_default : "https://via.placeholder.com/400"

  const sprite = document.createElement("img");
  sprite.setAttribute("class", "sprite");
  sprite.setAttribute("src", spriteData);

  const pokemonDisplay = document.querySelector(".display-wrapper__pokemon-display");
  pokemonDisplay?.appendChild(sprite);
};

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
  updatePokemonDisplay();
};

await fetchPokeAPI();

const buttons = () => {
  const scrollRight = document.querySelector(".display-wrapper__scroll-right");
  scrollRight?.addEventListener("click", () => {
    currentPokemonIdx += 1
    fetchPokeAPI();
  });

  const scrollLeft = document.querySelector(".display-wrapper__scroll-left");
  scrollLeft?.addEventListener("click", () => {
    currentPokemonIdx -= 1
    fetchPokeAPI();
  });  
};

buttons();
