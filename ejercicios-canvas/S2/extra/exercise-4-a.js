/*
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````
*/

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1; 
}


const array1 = ['manzana', 'pera', 'platano', 'uva'];
console.log(findArrayIndex(array1, 'platano')); 

const array2 = ['azul', 'rojo', 'verde', 'amarillo'];
console.log(findArrayIndex(array2, 'rojo')); 

const array3 = ['gato', 'pájaro', 'perro', 'pez'];
console.log(findArrayIndex(array3, 'rinoceronte')); 
