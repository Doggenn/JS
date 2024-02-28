// Función que cuando se ejecute pida por prompt
// - ancho, alto, color y figura(cuadrado, circulo)
// Si la opción seleccionada es cuadrado, pintamos un cuadrado
// Si la opción seleccionada es un círculo, pintamos un círculo
const figura = (prompt('Introduce una figura'));
const color = prompt('Introduce un color en ingles');
const ancho = prompt('Introduce un ancho en pixeles');
const alto = prompt('Introduce un alto en pixeles');



function cuadrado(ancho, alto, color) {
    let dibujo2 = `<div style="background-color: ${color}; width: ${ancho}px; height: ${alto}px; border: 2px solid red;"></div>`;
    document.write(dibujo2);  
}

function circulo(ancho, alto, color, radio) {
    let dibujo3 = `<div style="background-color: ${color}; width: ${ancho}px; height: ${alto}px; border: 2px solid red; border-radius: ${radio}%"></div>`;
    document.write(dibujo3);
}

switch (figura) {
    case 'cuadrado':
        cuadrado(ancho, alto, color);
        break;
    case 'circulo':
        const radio = prompt('Introduce un radio en pixeles si quieres que sea un circulo.');
        circulo(ancho, alto, color, radio);
        break;
}

if ('figura' === 'cuadrado') {
    cuadrado(ancho, alto, color);
} else if ('figura' === 'circulo') {
    circulo(ancho, alto, color, radio);
}