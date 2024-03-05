// Funciones intervalicas o de tiempo

//setIterval setTimeOut

//setTimeout funcion que espera un tiempo y ejecuta lo que haya dentro (delay)
//setInterval es una funcion que repita cada x segunddos lo que tenga dentro

const delay = setTimeout(() => { 
    console.log('Vamonos a casa')
}, 10000)


const intervalo = setInterval(() => {
    console.log('Vamonos ya!!!!')
 },3000)