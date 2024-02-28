// Funcion que pida por Prompt


// No para de hacer preguntas hasta que se cumpla la condicion.
let amount = 500;
// Sacar, ingresar, saldo, salir
let option = '';
let value = '';

function sacar() {
    value = Number(prompt('¿Cuanto?'));
    if (value > amount) {
        alert('Saldo disponible insuficiente')
    } else {
        amount = amount - value;
    }
}
function ingresar() {
    value = Number(prompt('¿Cuanto?'));
    amount = amount + value;
}
function saldo() {
    alert(`Tienes ${amount}€ disponible en su cuenta.`);
}
function salir() {
    alert('¡Hasta pronto!');
}
function arranque(){
    while (option !== 'salir') {
        option = prompt('¿Que quieres hacer? sacar, ingresar, saldo, salir');
        switch (option) {
            case 'sacar':
                sacar();
                break;
            case 'ingresar':
                ingresar();
                break;
            case 'saldo':
                saldo();
                break;
            case 'salir' :
                salir();
                break;
            default:
                alert('¡No sabes escribir! Parguela!')
        }
    }
}
arranque();