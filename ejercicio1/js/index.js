/*
         * Pedir por prompt un color, un ancho y un alto
         * Construir el string necesario para crear un rectángulo HTML con ese color, ese ancho y ese alto
         * Con document.write pintar el rectángulo en el body
*/
const color = prompt('Introducir un color');
const ancho = prompt('Introduce un ancho');
const alto = prompt('Introduce un alto');

let rectangulo = `<div style="background-color: ${color};width: ${ancho}px; height: ${alto}px;"></div>`;
document.write(rectangulo);
