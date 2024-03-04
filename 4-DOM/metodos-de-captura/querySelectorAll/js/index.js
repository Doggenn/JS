// Crear en las 5 cajas un color de fondo un ancho y un alto
// Solo funciona con forEach
let count = 10;
const cajas = document.querySelectorAll('.caja');
for (let caja of cajas) {
    caja.style.width = '200px';
    caja.style.height = '200px';
    caja.style.margin = '10px';
    caja.style.backgroundColor = 'blue';
    caja.textContent = count
    caja.style.color = "white";
    caja.style.fontSize = '50px'
    caja.style.display = 'flex';
    caja.style.justifyContent = 'center'
    caja.style.alignItems = 'center'
    count = count + 10 //count += 10
}