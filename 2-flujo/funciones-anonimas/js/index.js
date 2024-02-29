const sumar = function (num1, num2) {
    return num1 + num2;
}
document.write(`<p>${sumar(4, 5)}</p>`);

// Arrow function

const multiplicar = (num1, num2) => {
    return num1 * num2;
}
document.write(`<p>${multiplicar(4, 5)}</p>`);

// Si en una funcion arrow solo disponemos de una sentencia y demas es a sentencia de return, podemos definir la funcion de la siguiente manera

const dividir = (num1, num2) => num1 / num2;
document.write(`<p>${dividir(4, 5)}</p>`);


// SI en una funcion arrwo solo tengo un parametro, puedo quitar los parentesis
const saludar = (nombre) => `Hola ${nombre}`;

document.write(`<p>${saludar('Adrian')}</p>`);