function sumar(num1, num2) {
    const total = num1 + num2;
    return total;
}
const resultado = sumar(4, 5);
document.write(`<p>${resultado}</p>`);
const resultadoTotal = sumar(resultado, 3);
document.write(`<p>${resultadoTotal}</p>`);
const totalDeLosTotales = sumar(resultado, resultadoTotal);
document.write(`<p>${totalDeLosTotales}</p>`)