/*
Busca elementos en el array que cumpla una condicion concreta.

Filter devuelve todos los elementos que cumplen en la condicion de la array.

*/

// Trabajo para casa agrandar el array a 10 elementos y separar en alumnos suspenso y aprobados.
const alumnos = [
    { nombre: 'Juan', nota: 3 },
    { nombre: 'Mario', nota: 4 },
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Darwin', nota: 8 },
    { nombre: 'Juan2', nota: 3 },
    { nombre: 'Mario2', nota: 4 },
    { nombre: 'Ana2', nota: 6 },
    { nombre: 'Darwin2', nota: 8 },
    { nombre: 'Juan3', nota: 3 },
    { nombre: 'Mario3', nota: 4 },
    { nombre: 'Ana3', nota: 6 },
    { nombre: 'Darwin3', nota: 8 },
]

let aprobados = "";
let suspensos = "";


function mirarNotas(alumnos) {
    const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 5);
    const alumnosSuspensos = alumnos.filter(alumno => alumno.nota < 5);
    /*const suspensos = alumnos.filter((alumno) => alumno.nota <= 4) 
    const aprobados = alumnos.filter((alumno) => alumno.nota >= 5) 
    return {suspensos:suspensos,
        aprobados:aprobados
    };
    // return aprobados;*/
    return{ aprobados: alumnosAprobados,
            suspensos: alumnosSuspensos
    };
}

resultado = mirarNotas(alumnos);
console.log(resultado.aprobados);
console.log(resultado.suspensos);



/*console.log(resultado.aprobados);
console.log(resultado.suspensos);

document.write(`${resultado.aprobados}`)*/


const frutas = ['manzana', 'pera', 'platano', 'uvas'];

//let frutaBuscada ="";
function buscarFrutasPorLongitud(longitud) {
    const frutaBuscada = frutas.filter((fruta) => fruta.length <= longitud) 
    return frutaBuscada;
}
const frutasEncontradas = buscarFrutasPorLongitud(5);

console.log(frutasEncontradas)

