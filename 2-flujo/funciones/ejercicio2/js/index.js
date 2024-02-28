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


//Ejercicio pasado
 
        function PVP(coste, precio, impuesto) {
 
            const beneficio = (coste * precio) / 100;
            const precioprod = (beneficio + coste);
            const conimpuesto = (precioprod * 21) / 100;
            return PvpTotal = (precioprod + conimpuesto)
        }
 
        function precioProducto() {
            const coste = Number(prompt('Precio coste'))
            const beneficio = Number(prompt('Beneficio'))
            const impuesto = Number(prompt('impuesto'))
            const total = PVP(coste, beneficio, impuesto)
            console.log(total)
        }
 
        const precio = PVP(1000, 50, 21);
        const precio1 = PVP(1000, 200, 21);
        const precio2 = PVP(1000, 400, 21);
 
        console.log(precio, precio1, precio2);
 
        precioProducto()
