const coche = document.querySelector('.coche');
let velocidad = 40;
let rot = 180;


function irIzq() {
    velocidad -= 40;
    coche.style.marginLeft = `${velocidad}px`
    coche.style.transform = `rotateZ(${rot}deg)`
}

function irDer() {
    velocidad += 40;
    coche.style.marginLeft = `${velocidad}px`
    coche.style.transform = `rotateZ(${rot}deg)`
}
function rotIzq() {
    coche.style.transform = `rotateZ(${rot}deg)`
    rot += 90;
}
function rotDer() {
    coche.style.transform = `rotateZ(${rot}deg)`
    rot -= 90;
}
function spin() {
    coche.style.transform = `rotateZ(${rot}deg)`
    rot += 1800;
}
