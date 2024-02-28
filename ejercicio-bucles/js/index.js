// Pedidmos un numero por Promp y pintamos tantos cuadrados dependiendo del numero recibido.

const cuadrado = ('width: 200px; height: 200px; border: 2px solid red;');
let color = 'white';
const num = Number(prompt('Pon un numero(dependiendo del numero sera el tamaño del numero)'))

let dibujo2;

for(let i = 1; i <= num; i++){
    color = (i % 2 === 0) ? 'green' : 'blue';
    dibujo2 = `<div style="background-color: ${color}; ${cuadrado}; font-size:${i}px;display: flex; justify-content: center; align-items: center; float: left; border-radius:${i}%"> ${i}</div>`;
    document.write(dibujo2);
}

