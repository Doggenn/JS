/*
Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. 
Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
```
*/
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]
const toysCopy = [...toys];

for (const toy of toysCopy) {
    if (toy.name.includes('gato')) {
        const index = toys.indexOf(toy);
        toys.splice(index, 1);
    }
}

console.log(toys);
/*
for (i=0; i>toys.length;i++) {
    if (toys[i].name === 'El gato') {
        toys.splice(i, 1); 
        i--; 
    }
}

console.log(toys);*/