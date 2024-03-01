/*
FIND Busca dentrp de un array un elemento que cumpla cierta condicion.
Find devuelve un unico elemento. El primero que encuentre que cumpla la condicion
*/

const frutas = ['manzana', 'pera', 'platano', 'uvas'];

const frutaBuscada = frutas.find((fruta) => fruta === 'pera');

const nombres = ['Ana', 'Pepe', 'Maria', 'Lucia'];

let maximaLongitud = 0;
const nombreLargo = nombres.find((nombre) => {
    if (nombre.length < maximaLongitud) {
        maximaLongitud = nombre.length
    }
    maximaLongitud++
})

console.log(frutaBuscada)



const alumnos = [
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario', nota: 4 },
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Darwin', nota: 8 },
]
const primerAprobado = alumnos.find((alumno) => alumno.nota >= 5)

console.log(primerAprobado)