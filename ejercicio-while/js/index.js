// No para de hacer preguntas hasta que se cumpla la condicion.

let amount = 500;
// Sacar, ingresar, saldo, salir
let option = '';
let value = '';
Selection
while (option !== 'salir') {
    option = prompt('¿Que quieres hacer? sacar, ingresar,saldo, salir');
    switch (option) {
        case 'sacar':
            value = Number(prompt('¿Cuanto?'));
            if (value > amount) {
                alert('Saldo insuficiente disponible')
            } else {
                amount = amount - value;
            }
            break;
        case 'ingresar':
            value = Number(prompt('¿Cuanto?'));
            amount = amount + value;
            break;
        case 'saldo':
            alert(`Tienes ${amount}€ disponible en su cuenta.`);
            break;
        case 'salir' :
            alert('¡Hasta pronto!')
            break;
        default:
            alert('¡No sabes escribir! Parguela!')
    }
}