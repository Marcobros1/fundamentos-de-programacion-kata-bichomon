console.log(document.title);

//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//2. Cambia el color de fondo de la primera generación de Pokimon.

// La generación es el bloque completo: el título y la lista de Pokimon que hay debajo
document.getElementById("gen-1").style.backgroundColor = "lightblue";
document.getElementById("gen-1").nextElementSibling.style.backgroundColor = "lightblue";

//3. Imprime por consola la URL de la página.

console.log(window.location.href);

//4. Imprime por consola el dominio de la página.

console.log(window.location.hostname);

//5. Imprime todos los nodos de imagen.

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
}

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const newSrc = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";

// Quiero ser un poco innovador y en vez de hacer un bucle for normal, voy a usar la función Array.from(), que es un recurso nativo de Javascript.
// Esta función se usa para convertir el HTMLCollection en un array.
// Esto lo hago porque quiero usar forEach para iterar sobre cada elemento del array y así cambiar su atributo src de un modo más limpio.
Array.from(images).forEach((img) => {
  img.src = newSrc;
});

//7. Premium - Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`.

const flyingPokemons = document.querySelectorAll(".itype.flying");
// Vamos a iterar de otra forma distinta a la habitual, en vez de hacver un bucle for clásico haremos un bucle for of.
// Este bucle nos permite iterar directamente sobre todos los elementos de un array o NodeList seleccionado sin saber cuanto mide o cuantas iteraciones debemos hacer.
// Tras eso hacemos los cambios que queramos sobre cada uno de los elementos seleccionados.
// la funcion closest() nos permite buscar el primer elemento padre que cumpla con un selector CSS.
// En este caso buscamos el bloque de datos de la carta (infocard-lg-data text-muted),
// que es donde está el tipo volador, y le cambiamos el color de fondo a lightgreen.
for (const pokemon of flyingPokemons) {
  const datos = pokemon.closest(".infocard-lg-data.text-muted");
  if (datos) datos.style.backgroundColor = "lightgreen";
}