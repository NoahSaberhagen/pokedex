const POKE_LIMIT = 1125;
;
let currentPokemonIdx = 0;
let pokemon = [];
const fetchPokeAPI = async () => {
    const pokeAPI_URL = `https://pokeapi.co/api/v2/pokemon?` + new URLSearchParams({
        limit: "3",
        offset: currentPokemonIdx.toString()
    });
    //fetches 3 pokemon at a time    
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
    //update pokemon display ()
};
await fetchPokeAPI();
export {};
// 1126 pokemon
