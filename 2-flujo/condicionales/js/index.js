//Sintaxxis
//if(condicion){}
const nota = 5;
if (nota >= 5  && nota <= 10) {
    console.log('Has aprovado');
}
else {
    console.log('Has suspendido')
}

//if-else
const edad = 23;

if (edad >= 18 & edad <= 65) {
    console.log('A cotizar')
} else {
    console.log('Sin trabajar')
}



//Condicional anidado.

if (nota >= 0  && nota < 5) {
    console.log('Estas suspenso')
} else if(nota >= 5  && nota < 6){
    console.log('Suficiente')
} else if(nota >= 6  && nota < 7){
    console.log('Bien')
} else if(nota >= 7  && nota < 9){
    console.log('Notable')
} else if(nota >= 9  && nota <= 10){
    console.log('Sobresaliente')
} else {
    console.log('Tu profesor es inutil')
}