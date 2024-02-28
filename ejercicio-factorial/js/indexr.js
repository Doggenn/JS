//Ejercicio resuelto.

const numr = Number(prompt('Pon un numero'));
let totalr = 1;
for (let i = numr; i >= 1; i--) { 
    console.log(numr)
    totalr = i * totalr;
    console.log(totalr)
}
document.write(`Total resuelto con el ejercicio resuelto en clase: ${totalr}`)