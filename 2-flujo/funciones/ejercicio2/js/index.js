// Funcion que me calcule el PVP de un artuculo
// PVP = precioCoste + %beneficio + %IVA
// Params - precioCoste, beneficio, impuesto
const precioCoste = Number(prompt('Introduce el precio de coste'));
const porcentajeBeneficio = Number(prompt('Introduce el porcentaje de beneficio'));
let impuesto = Number(prompt('Introduce el impuesto'));

function coste(precioCoste, porcentajeBeneficio, impuesto) {
    const beneficio = (precioCoste * porcentajeBeneficio) / 100;
    const precioTotal = precioCoste + beneficio;
    const iva = (precioTotal * impuesto) / 100;
    console.log(beneficio);
    console.log(precioTotal);
    console.log(iva);
    return precioTotal + iva;
}
const precioFinal = coste(precioCoste, porcentajeBeneficio, impuesto);
document.write(precioFinal)
