const figura = prompt('Introduce una figura');
const color = prompt('Introduce un color');

const dibujo = `<div class="${figura}" style="background-color: ${color};"></div>`;
document.write(dibujo);