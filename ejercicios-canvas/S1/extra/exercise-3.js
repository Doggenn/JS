/*
Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. 
Imprime cada array en por consola.
```js
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
```
*/
const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}
];
let corta = "";
let media = "";
let larga = "";


for (let i = 0; i < movies.length; i++) {
    if(movies[i].durationInMinutes < 100){
        corta += movies[i].name + " ";
    }else if(movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes <= 200){
        media += movies[i].name + " ";
    }else if( movies[i].durationInMinutes >= 200){
        larga += movies[i].name + " ";
    }
    
}
console.log(`Peliculas cortas: ${corta}`);
console.log(`Peliculas normales:  ${media}`);
console.log(`Peliculas largas: ${larga}`);