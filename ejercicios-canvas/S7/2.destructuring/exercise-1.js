/*
En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.


```js
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
```
*/
const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }

// Object destructuring para extraer propiedades del objeto
const { title, gender, year } = game;// <----- Se declara a la inversa la variable para la hora de imprimir se suprima dicho valor y solo se imprima el valor del objeto.
console.log(title);//                   <----- Imprime el titulo
console.log(gender);//                  <----- Imprime los generos
console.log(year);//                    <----- Imprime el año