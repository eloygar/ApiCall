# PokeAPI Search

Este proyecto es una aplicación web simple que permite a los usuarios buscar información sobre Pokémon utilizando la [PokeAPI](https://pokeapi.co/). Fue creado por Eloygar.

## Uso de la Web

Para usar la aplicación, simplemente ingrese el nombre de un Pokémon en el campo de texto y haga clic en el botón "Buscar". Puede seleccionar si desea buscar utilizando Promesas o Async/Await, y si desea obtener una imagen del Pokémon o información de texto.

## Funcionamiento a Nivel de Código

El código en `main.js` se ejecuta cuando la página HTML está completamente cargada. Se definen referencias a elementos del DOM y se asigna un evento de click al botón de búsqueda que llama a la función `searchPokemon()`. 

`searchPokemon()` recoge los valores de los campos de entrada y llama a diferentes funciones para obtener los datos del Pokémon, dependiendo de si se seleccionó 'promises' o 'async/await' y si se desea una imagen o datos de texto.

Las funciones `getPokemonDataWithPromises()`, `getPokemonImageWithPromises()`, `getPokemonDataWithAsyncAwait()` y `getPokemonImageWithAsyncAwait()` realizan solicitudes a la API y procesan la respuesta. 

Finalmente, `displayPokemonInfo()` y `displayPokemonImage()` toman los datos del Pokémon y los muestran en la página.

## Manejo de Errores

Si ocurre un error durante la solicitud a la API, como si el nombre del Pokémon no existe, el error se captura y se muestra en la consola del navegador. Esto se hace tanto en el manejo de promesas como en el manejo de async/await.

## Autor

Este proyecto fue creado por Eloygar. Si tiene alguna pregunta o sugerencia, no dude en ponerse en contacto.