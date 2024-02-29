
// Ambos hacen los mismo: \/
const letras = [];// <--- \/
const numeros = new Array();



// Array con valores.
const empleados = ['Maria', 'Julia', 'Ines', 'Victor'];
const pares = new Array(2, 4, 6, 8, 10);
document.write(empleados.length);
document.write(pares.length);

// Recuèrar una posicion del Array   \/<--- Para que lo imprima completamente en mayusculas
document.write(empleados[1].toUpperCase());
const valor = (empleados[1]);
for (let i = 0; i <= empleados.length; i++){
    document.write(`<p>${empleados[i]}</p>`);
}