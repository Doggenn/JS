const color = 'azul';

let traduccion;
switch (color) {
    case 'azul':
        traduccion = 'blue';
        break;
    case 'rojo':
        traduccion = 'red';
        break;
    case 'amarillo':
        traduccion = 'yellow';
        break;
    default:
        traduccion = 'goldenrod';
}
document.body.style.backgroundColor = traduccion;