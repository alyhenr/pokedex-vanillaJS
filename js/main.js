import Pokemon from './pokemonBuilder.js';
import createPokemonData from './pokemonData.js';

// API url and configs:
const URL = 'https://pokeapi.co/api/v2/pokemon';

// Empty array to store pokemons when the promise is fullfiled:
let pokemons = [];

// Object format to create instances of the Class Pokemon and append them in shadow dom, each Pokemon object will
// have it's date coming from the API + methods so the user can interact with it:
// pokemonObjBase = [{
//     name: "",
//     frontImg: "",
//     backImg: "",
//     types: [],
//     attack: 0,
//     defense: 0,
//     hp: 0,

// }];

let pokemonObjBase = {};

fetch(URL)
    .then(res => res.json())
    .then(data => {
        pokemons = [...data.results];
        pokemons.forEach(pokemon => {
            fetch(pokemon.url)
                .then(res => res.json())
                .then(data => {
                    pokemonObjBase = createPokemonData(data);

                    // With the data of the pokemons in a organized form, now create the html elements:                    
                    const pokemonObj = new Pokemon(pokemonObjBase);

                    // Appending the pokemon                    
                    document.querySelector(".container__pokemons").appendChild(pokemonObj);
                })
        })
    })





