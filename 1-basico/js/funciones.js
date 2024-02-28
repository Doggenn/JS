const nombre = ('Adrian');
const nombreMin = nombre.toLowerCase();
const nombreMay = nombre.toUpperCase();
console.log(nombre, nombreMin, nombreMay);

//Parseo de numeros.
const numeroString = '34.97';
const numero = Number(numeroString); // 34.97
const numeroEntero = parseInt(numeroString); // 34
const numeroFloat = parseFloat(numeroString); //34.97 pasa de numero string a number

//MATH
console.log(Math.PI); //Te escribe el numero PI
console.log(Math.abs(-34)); //34
console.log(Math.floor(42.71)); //42
console.log(Math.ceil(42.21)); //43
console.log(Math.round(42.5)); //43
console.log(Math.round(42.4)); //42

//Numero aleatorio
console.log(Math.random()); //Para hacer un numero aleatorio entre 0 y 1 con decimales
console.log(Math.random() * 100); // Para hacer un numero aleatorio en el 0 y el 100 con decimales.
console.log(Math.round(Math.random() * 100)); // Para hacer un numero aleatorio en el 0 y el 100 con redondeo.
console.log(Math.ceil((Math.random() * 100) + 1)); // Para un numero aleatorio entre 1 y 100

Math.max(3, 5, 6, 12, 78, 32);  // 78
Math.min(3, 5, 6, 12, 78, 32);  // 3