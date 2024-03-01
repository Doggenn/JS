/*
Busca elementos en el array que cumpla una condicion concreta.

Filter devuelve todos los elementos que cumplen en la condicion de la array.

*/

const frutas = ['manzana', 'pera', 'platano', 'uvas'];
const alumnos = [
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario', nota: 4 },
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Darwin', nota: 8 },
]

function buscarFrutasPorLongitud(longitud) {
    let frutaBuscada = frutas.filter((fruta) => fruta.length <= longitud) 
    return frutaBuscada;
}
buscarFrutasPorLongitud(5);

console.log(frutaBuscada)