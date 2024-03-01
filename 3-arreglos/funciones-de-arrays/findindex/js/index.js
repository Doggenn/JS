/*
Busca un elemento que cumpla una condicion para saber su posicion exacta. Devuelve la posicion del primer elemento que la cumpla.

Si no encuentra la posicion lo que devuelve es -1 en vez de undefined.


findindex() Es para array complejas
indexOf() Es para las arrays simples.
*/


const frutas = ['manzana', 'pera', 'platano', 'uvas'];
const alumnos = [
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario', nota: 4 },
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Darwin', nota: 8 },
]

let posicion = frutas.indexOf('pera');
console.log(posicion)

// La posicion del alumno que tiene su nombre empieza por A.

let posicion2 = alumnos.findIndex((alumno) => alumno.nombre[0] === 'A')
console.log(posicion2)