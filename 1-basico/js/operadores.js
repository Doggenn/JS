const num1 = 33;
const num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);   //Resto de una division
console.log(num1 ** num2); //Potencia

//Comparadores
let numeroA = prompt('Dame un numero');
let numeroB = prompt('Dame otro numero');

console.log(typeof numeroA, typeof numeroB);

console.log(numeroA + numeroB);
console.log(numeroA - numeroB);
console.log(numeroA * numeroB);
console.log(numeroA / numeroB);
console.log(numeroA % numeroB);   //Resto de una division
console.log(numeroA ** numeroB); 


//Convertir un tipo
numeroA = Number(numeroA);
numeroB = Number(numeroB);

console.log(typeof numeroA, typeof numeroB);

console.log(numeroA + numeroB);
console.log(numeroA - numeroB);
console.log(numeroA * numeroB);
console.log(numeroA / numeroB);
console.log(numeroA % numeroB);   //Resto de una division
console.log(numeroA ** numeroB); 

console.log('Comparadores')


console.log(numeroA > numeroB);
console.log(numeroA < numeroB);
console.log(numeroA == numeroB);
console.log(numeroA != numeroB);
console.log(numeroA >= numeroB);
console.log(numeroA <= numeroB);

console.log('Comprador de valores y tipos')
console.log('Comparacion de 2 numero con el 2 de string son o no igules' ,2 == '2');
console.log('Comparador de numero y de tipo si es number o string', 2 === '2');
console.log('Comparador de numero y de tipo si es number o string y si son o no igules', 2 !== '2');

//Operadores Logicos

console.log(true && true);
console.log(true && false);

