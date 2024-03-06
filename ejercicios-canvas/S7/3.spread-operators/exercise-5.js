/*
Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
, usando spread operatos.

```js
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
```
*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copia = [...colors]; 
copia.splice(2,1);

console.log(colors);
console.log(copia);