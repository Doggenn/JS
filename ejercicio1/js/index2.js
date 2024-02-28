// Pedir un color y una forma (Cuadrado, rectangulo y circulo)



const cuadrado = ('width: 200px; height: 200px;');
const rectangulo = ('width: 200px; height: 400px;');
const circulo = ('width: 200px; height: 200px; border-radius: 50%;');

const figura = prompt('Introduce una figura');
const color = prompt('Introduce un color');
let dibujo2;

let dibujo = `<div style="background-color: ${color}; ${figura}"></div>`;
if (figura == 'cuadrado') {
    dibujo2 = `<div style="background-color: ${color}; ${cuadrado}"></div>`;

}
else if(figura == 'rectangulo'){
    dibujo2 = `<div style="background-color: ${color}; ${rectangulo}" class = "${rectangulo}"></div>`;

}
else if (figura == 'circulo') {
    dibujo2 = `<div style="background-color: ${color}; ${circulo}"></div>`;

}
document.write(dibujo2);