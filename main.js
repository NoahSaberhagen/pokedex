const POKE_LIMIT = 1125;
let pokemon = [];
let currentPokemonIdx = 0;
const updatePokemonDisplay = () => {
    var _a;
    (_a = document.querySelector(".sprite")) === null || _a === void 0 ? void 0 : _a.remove();
    const nameData = pokemon[0].name;
    const spriteData = pokemon[0].sprites.front_default !== null ? pokemon[0].sprites.front_default : "https://via.placeholder.com/400";
    const sprite = document.createElement("img");
    sprite.setAttribute("class", "sprite");
    sprite.setAttribute("src", spriteData);
    const pokemonDisplay = document.querySelector(".display-wrapper__pokemon-display");
    pokemonDisplay === null || pokemonDisplay === void 0 ? void 0 : pokemonDisplay.appendChild(sprite);
};
const fetchPokeAPI = async () => {
    const pokeAPI_URL = `https://pokeapi.co/api/v2/pokemon?` + new URLSearchParams({
        limit: "3",
        offset: currentPokemonIdx.toString()
    });
    const response = await fetch(pokeAPI_URL);
    const data = await response.json();
    const pokemonToFetch = data.results;
    const newPokemon = [];
    for (let i = 0; i < pokemonToFetch.length; i++) {
        const response = await fetch(pokemonToFetch[i].url);
        const data = await response.json();
        newPokemon.push(data);
    }
    ;
    pokemon = newPokemon;
    updatePokemonDisplay();
};
await fetchPokeAPI();
const buttons = () => {
    const scrollRight = document.querySelector(".display-wrapper__scroll-right");
    scrollRight === null || scrollRight === void 0 ? void 0 : scrollRight.addEventListener("click", () => {
        currentPokemonIdx += 1;
        fetchPokeAPI();
    });
    const scrollLeft = document.querySelector(".display-wrapper__scroll-left");
    scrollLeft === null || scrollLeft === void 0 ? void 0 : scrollLeft.addEventListener("click", () => {
        currentPokemonIdx -= 1;
        fetchPokeAPI();
    });
};
buttons();
export {};
