const pokeAPI_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"; //as of writing this, there are 1126 entries

interface pokemonInterface{          //interfaces the results object from fetching pokeAPI_URL
  name: string,
  url: string,
};

// console.log("hello")

let pokemonInterfaceArr: pokemonInterface[] = [];     //stores unique urls for each pokemon entry

const fetchPokeAPI = async () => {              //this function is necessary to retrieve the url of each
  const data = await fetch(pokeAPI_URL);        //individual pokemon. this way we are able to access more
  const response = await data.json();           //detailed data such as abilities, sprites, etc.
  
  pokemonInterfaceArr = await response.results;

  for(let i = 0; i < pokemonInterfaceArr.length; i++){          //this generates a list of all pokemon and their
    const data = await fetch(pokemonInterfaceArr[i].url);       //sprites. it is useful for development but likely
    const response = await data.json();                         //not going to be a final feature.

    const newImg = document.createElement("img");
    newImg.setAttribute("src", response.sprites.front_default);
    

    const newP = document.createElement("p");
    newP.textContent = response.name;
    
    document.body.appendChild(newP);
    document.body.appendChild(newImg);
  }
};



fetchPokeAPI();         //now our pokemonUrls should be populated


