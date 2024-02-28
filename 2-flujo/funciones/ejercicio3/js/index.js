//Funcion que nos indique si es un numero primo o no

const numero = Number(prompt('Introduce un numero'));

function esPrimo(numero) {
    let primo = 'Es primo';
    for (let i = 2; i < numero; i++) {
        console.log(i);
        if (numero % i === 0) {
            //document.write('No Es primo')
             primo = 'No es primo';
        } 
    }
    return primo;
}
document.write(esPrimo(numero));