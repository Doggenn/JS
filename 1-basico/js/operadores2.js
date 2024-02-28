/*
Pedir por prompt una edad
Comprobar si la edad recivida esta entre 18 y 65
*/
const mayor = 18;
const menor = 65;
const edad = Number (prompt('¡Introduce una edad!'));
// edad = prompt('Intruduce una edad')
// edad = Number(edad)
if ((mayor <= edad) && (menor >= edad)) {
    console.log('Puedes conducir');
}
else {
    console.log('No puedes conducir')
}

// OTRA FORMA DE HACERLO
const mayor18 = edad >= 18;
const menor65 = edad <= 65;

const resultado = mayor18 && menor65;

if (mayor18 === menor65) {
    console.log('Puedes conducir');
    document.write('Puedes conducir');
}
else {
    console.log('No puedes conducir');
    document.write('No puedes conducir');
}

if (mayor18 === menor65) {
    console.log('Puedes conducir');
    document.write('Puedes conducir');
}
    else if( mayor> edad ){
    console.log('No puedes eres muy joven');
    document.write('No puedes eres muy joven');
}
else {
    console.log('No puedes eres muy mayor');
    document.write('No puedes eres muy mayor');
}
