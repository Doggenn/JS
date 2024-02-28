// FOR - for (INICIALIZACION; CONDICION; MODIFICACION DE LA VARIABLE) {}

// Mostrar por consola los numeros del 1 al 10
// i = i+1;
// i++; Operador post incremento
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// Mostrar por consola los numeros del 10 al 1
for (let i = 10; i >= 1; i--){
    console.log(i);
}

// Mostrar los numeros del 1 al 500
// Solo mostrar los pares
// i % 2 // SI el resto de la division es igual a 0

for (let i = 1; i <= 500; i++){
    if (i%2 === 0) {
        console.log(i);
    }
}

//Mostar los numeros del 100 al -100
// Tienen que ser pares y multiplos de 3

for (let i = 100; i >= -100; i--){
    if (i%2 === 0 && i%3 === 0) {
        console.log(i);
    }
}
