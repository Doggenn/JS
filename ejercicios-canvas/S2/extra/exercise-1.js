/*
Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.

```js
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
``` 
*/
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categories = [];
for (const movie of movies) {
    for (const category of movie.categories) {
        if (!categories.includes(category)) {
            categories.push(category);
        }
    }

}

console.log(categories);


/*
const comedia = [];
const aventura = {};
const acción = {};
const thriller = {};
const animación = {};
for (pelis of movies) {
    let count = 0;
    if (pelis.categories.includes('comedia')) {
        comedia.push(pelis[count].title);
    } else if (pelis.categories.includes('aventura') == 'aventura') {
       aventura += pelis[count].title; 
    }else if (pelis.categories.includes('acción') == 'acción') {
       acción += pelis[count].title; 
    }else if (pelis.categories.includes('thriller') == 'thriller') {
       thriller += pelis[count].title; 
    }else if (pelis.categories.includes('animación') == 'animación') {
       animación += pelis[count].title; 
    }
    count++;
}*/
/*
for (pelis of movies){
    for (categoria of pelis.categories) {
        
    }
}
console.log(comedia);
console.log(aventura);
console.log(acción);
console.log(thriller);
console.log(animación);*/