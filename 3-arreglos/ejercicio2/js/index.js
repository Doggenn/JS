// for - of

// Mostrar por consola cada una de las posiciones del array de aves.

// Sintaxis - for (variable del array)
const aves = ['aguila', 'paloma', 'periquito', 'canario', 'agapornis'];
const felinos = ['gato', 'pantera', 'leon', 'tigre'];
const lagartos = ['cocodrilo', 'lagatija', 'komodo'];

const zoo = [aves, felinos, lagartos];

//document.write(zoo[1][2]);

for (let i = 0; i < zoo.length; i++){
    //document.write(`<p>${zoo[i]}</p>`);
    //console.log(zoo[i]);
    for (let j = 0; j < zoo[i].length; j++){
        document.write(`<p>${i}.${j} ${zoo[i][j]}</p>`);
        console.log(zoo[i][j]);
    }
}

