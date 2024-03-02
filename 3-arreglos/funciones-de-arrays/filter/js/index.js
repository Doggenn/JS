/*
Busca elementos en el array que cumpla una condicion concreta.

Filter devuelve todos los elementos que cumplen en la condicion de la array.

*/


const alumnos = [
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario', nota: 4 },
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Darwin', nota: 8 },
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario2', nota: 4 },
    { nombre: 'Ana2', nota: 6 },
    { nombre: 'Darwin2', nota: 8 },
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario2', nota: 4 },
    { nombre: 'Ana3', nota: 6 },
    { nombre: 'Darwin2', nota: 8 },
]

let aprobados = "";
let suspensos = "";


function mirarNotas(alumnos) {
    const suspensos = alumnos.filter((alumno) => alumno.nota <= 4) 
    const aprobados = alumnos.filter((alumno) => alumno.nota >= 5) 
    return {suspensos:suspensos,
        aprobados:aprobados
    };
    // return aprobados;
}

const resultado = mirarNotas(alumnos);


console.log(resultado.aprobados);
console.log(resultado.suspensos);

document.write(resultado.aprobados)


const frutas = ['manzana', 'pera', 'platano', 'uvas'];

let frutaBuscada ="";
function buscarFrutasPorLongitud(longitud) {
    const frutaBuscada = frutas.filter((fruta) => fruta.length <= longitud) 
    return frutaBuscada;
}
buscarFrutasPorLongitud(5);

console.log(frutaBuscada)

// Trabajo para casa agrandar el array a 10 elementos y separar en alumnos suspenso y aprobados.