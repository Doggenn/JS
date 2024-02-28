// Calculo factorial
// F(5) = 5 * 4 * 3 * 2 * 1 = 120
// - Pedimos el numero a traves del prompt

let num = Number(prompt('Pon un numero'));
let total = 0;
let num2 = 1;

for (num; num >= 1; num--){
    num2 = (num2 * num);
    total = (num * num2);
    console.log('Total', total);
    console.log('Num', num);
    console.log('Num2',num2)
}
document.write(`Total resuelto con el ejercicio resuelto por mi mismo:${total}`)