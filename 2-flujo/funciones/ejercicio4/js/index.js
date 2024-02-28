// Funcion que nos puestre la tabla de multiplicar de un numero
// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
const numero = Number(prompt('Pon un numero'));
function tablaMultiplicar(numero) {
    for (let i = 0; i <= 10; i++){  
        document.write(`<p>${numero} * ${i} = ${numero * i}</p>`);
    }
}
tablaMultiplicar(numero);