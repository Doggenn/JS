/*
        MAP, es una funcion de array que aplica a cada elemento del array una operacion
*/


const numeros = [1, 2, 3, 4, 5]

//quiero un array con los dobles del array anterior  *2

const dobles = numeros.map((numero) => numero * 2)
console.log(dobles)



const personas = [
    { nombre: 'Pepe', apellidos: 'Villuela' },
    { nombre: 'Maria', apellidos: 'Rodriguez' },
    { nombre: 'Rodrigo', apellidos: 'Lopez' },
    { nombre: 'Marta', apellidos: 'Lopez' },
]

const nombresCompletos = personas.map(persona => `${persona.nombre} ${persona.apellidos}`)

console.log(nombresCompletos)

const nombresCompletos2 = personas.map(persona => persona.nombre + ' ' + persona.apellidos)

console.log(nombresCompletos2)