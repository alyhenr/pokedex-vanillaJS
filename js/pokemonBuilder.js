// Format of the object in the constructor:
//   pokemonObjBase = {
//     name: "",
//     frontImg: "",
//     backImg: "",
//     types: [],
//     attack: 0,
//     defense: 0,
//     hp: 0,
// };

// Class to construct the pokemon custom html tag:
export default class Pokemon extends HTMLElement {
    constructor(pokemon) {
        super();
        this.name = pokemon.name;
        this.frontImg = pokemon.frontImg;
        this.backImg = pokemon.backImg;
        this.types = pokemon.types;
        this.attack = pokemon.attack;
        this.defense = pokemon.defense;
        this.hp = pokemon.hp;
        this.selected = false;

        const shadow = this.attachShadow({ mode: "open" });

        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "../css/stylePokemon.css");

        const pokemonContainer = document.createElement("div");
        pokemonContainer.setAttribute("class", "pokemon_container");

        const pokemonDetails = document.createElement("div");
        pokemonDetails.setAttribute("class", "details");

        const pokemonName = document.createElement("h1");
        pokemonName.textContent = this.name;

        const pokemonTypesWrapper = document.createElement("div");
        pokemonTypesWrapper.setAttribute("class", "types");
        this.types.forEach(type => {
            const button = document.createElement("button");
            button.textContent = type;
            button.onclick = this.onClick;
            pokemonTypesWrapper.appendChild(button);
        });

        pokemonDetails.appendChild(pokemonName);
        pokemonDetails.appendChild(pokemonTypesWrapper);
        pokemonContainer.appendChild(pokemonDetails);

        const rightSide = document.createElement("div");
        rightSide.setAttribute("class", "right-side");

        const pokemonStatsWrapper = document.createElement("div");
        pokemonStatsWrapper.setAttribute("class", "stats-wrapper");
        const stats = [['hp', this.hp], ['attack', this.attack], ['defense', this.defense]];
        stats.forEach(stat => {
            const button = document.createElement("button");
            button.textContent = `${stat[0]}: ${stat[1]}`;
            pokemonStatsWrapper.appendChild(button);
        })

        const frontImg = document.createElement("img");
        frontImg.setAttribute("src", this.frontImg);
        rightSide.appendChild(frontImg);

        rightSide.appendChild(pokemonStatsWrapper);
        pokemonContainer.appendChild(rightSide);


        shadow.appendChild(pokemonContainer);
        shadow.appendChild(linkElem);

    }
}
// Define the custom tag
customElements.define("pokemon-card", Pokemon);