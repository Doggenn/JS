/*
Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
```js
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
```
*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
const personaje = rickAndMortyCharacters[rickAndMortyCharacters.length -1];
console.log(personaje)