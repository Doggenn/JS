//Funcion para pintar cuadrados
// La funcion recibe por parametro el ancho el alto y el color

const color = prompt('Introduce un color en ingles');
const ancho = prompt('Introduce un ancho en pixeles');
const alto = prompt('Introduce un alto en pixeles');
const radio = prompt('Introduce un radio en pixeles si quieres que sea un circulo.');

function cuadrado(ancho, alto, color) {
    let dibujo2 = `<div style="background-color: ${color}; width: ${ancho}px; height: ${alto}px; border: 2px solid red;"></div>`;
    document.write(dibujo2);  
}
cuadrado(ancho, alto, color);
function circulo(ancho, alto, color, radio) {
    let dibujo3 = `<div style="background-color: ${color}; width: ${ancho}px; height: ${alto}px; border: 2px solid red; border-radius: ${radio}%"></div>`;
    document.write(dibujo3);
}

circulo(ancho, alto, color, radio);