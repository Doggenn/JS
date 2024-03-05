const caja = document.querySelector('.caja');
const botones = document.querySelectorAll('button');

for (let boton of botones) {
    boton.addEventListener('click', cargarColor)
}

/*
function cargarColor(event) {
    console.log(event.target.textContent)
    if (event.target.textContent === 'Azul') {
        caja.style.backgroundColor = 'blue';
    } else if (event.target.textContent === 'Verde') {
        caja.style.backgroundColor = 'green';
    }else if (event.target.textContent === 'Rojo') {
        caja.style.backgroundColor = 'red';
    }
}
*/



function cargarColor(event) {
    caja.style.backgroundColor = event.target.id
    //caja.style.backgroundColor = event.target.className
}