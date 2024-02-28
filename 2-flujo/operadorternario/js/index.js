// Operador ternario
//Para asignar un valor a una variable de maneracondicional
const edad = Number(prompt('Pon tu edad'));

let mensaje;
if (edad >= 18) {
    mensaje = 'Eres mayor de edad';
} else {
    mensaje = 'Eres menor de edad';
}
document.write('<p>${mensaje}</p>');

//Sintaxis - (CONDICION) ? VALOR si TRUE : VALOR si FALSE;
const mensaje2 = (edad >= 18) ? 'Mayor de edad' : 'NO eres mayor de edad';
document.write(mensaje2);