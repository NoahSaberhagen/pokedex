const pokeAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";

console.log("hello");

const blah = async () => {
  const data = await fetch(pokeAPI_URL);
  const response = await data.json();
  console.log(response);
};

blah();


