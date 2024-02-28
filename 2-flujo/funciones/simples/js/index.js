// Definicion de la funcion
// Que hace la funcion

function saludar() {
    const nombre = prompt('Dime tu nombre');
    console.log(`Hola ${nombre}`);
    document.write(`<p>Hola ${nombre}</p>`);
}

// Ejecucion de la funcion
// Haz tu trabajo - Ejecuta las sentencias


saludar();

// Funciones con parametros
// Funcion que recibe un nombre (string) por parametro y lo muestra por consola

function saludarParam(pNombre){
    console.log(pNombre);
    document.write(pNombre)
}

const username = '<p>Luis</p>';
const usernamePrompt = prompt('Dime el nombre otra vez mas');
saludarParam('Adrian');
saludarParam('Juanjo');
saludar(username);
saludar(usernamePrompt);

//Funcion que reciba dos numeros y muestre por consola el resultado de la suma

function sumar(num1, num2) {
    console.log(num1 + num2);
}

sumar(5, 8)
sumar(11, 88);