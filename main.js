document.addEventListener("DOMContentLoaded", () => {

    // Guiandome por la guia de estilo de JavaScript puse todo en Ingles
    const pokemonContainer = document.getElementById("pokemonContainer");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
        searchPokemon()
            .catch(error => console.error(error));
    });

    const searchPokemon = async () => {
        try {
            pokemonContainer.innerHTML = '';

            const pokemonName = document.getElementById("pokemonName").value;
            const method = document.getElementById("method").value;
            const dataType = document.getElementById("dataType").value;

            let data;
            if (method === 'promises') {
                if (dataType === 'image') {
                    data = await getPokemonImageWithPromises(pokemonName);
                    displayPokemonImage(data);
                } else {
                    data = await getPokemonDataWithPromises(pokemonName);
                    displayPokemonInfo(data);
                }
            } else {
                if (dataType === 'image') {
                    data = await getPokemonImageWithAsyncAwait(pokemonName);
                    displayPokemonImage(data);
                } else {
                    data = await getPokemonDataWithAsyncAwait(pokemonName);
                    displayPokemonInfo(data);
                }
            }
        } catch (error) {
            throw new Error("Error searching Pokemon:", error);
        }
    };

    const getPokemonDataWithPromises = (pokemonName) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then(response => response.json())
            .catch(error => {
                throw new Error("Error fetching data with promises:", error);
            });
    };

    const getPokemonImageWithPromises = (pokemonName) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then(response => response.json())
            .then(data => data.sprites.front_default)
            .catch(error => {
                throw new Error("Error fetching image with promises:", error);
            });
    };

    const getPokemonDataWithAsyncAwait = async (pokemonName) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching data with async/await:", error);
        }
    };

    const getPokemonImageWithAsyncAwait = async (pokemonName) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            const data = await response.json();
            return data.sprites.front_default;
        } catch (error) {
            throw new Error("Error fetching image with async/await:", error);
        }
    };

    const displayPokemonInfo = (pokemonData) => {
        const pokemonInfo = document.createElement("div");
        pokemonInfo.classList.add("pokemon");

        const nameElement = document.createElement("h2");
        nameElement.textContent = pokemonData.name;

        const heightElement = document.createElement("p");
        heightElement.textContent = `Height: ${pokemonData.height}`;

        const weightElement = document.createElement("p");
        weightElement.textContent = `Weight: ${pokemonData.weight}`;

        pokemonInfo.appendChild(nameElement);
        pokemonInfo.appendChild(heightElement);
        pokemonInfo.appendChild(weightElement);

        pokemonContainer.appendChild(pokemonInfo);
    };

    const displayPokemonImage = (imageUrl) => {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = "Pokemon Image";

        pokemonContainer.appendChild(imageElement);
    }; 
});
