// Hay dos metodos querySelector y querySelectorAll

//Capturar la clase menu del footer

const menuFooter = document.querySelector('footer .menu');

const arraySecciones = ['home', 'contacto', 'servicios', 'galeria', 'cookies']

function pintarArray(lista) {
    lista.forEach((seccion) => {
        menuFooter.innerHTML += `<li><a href="${seccion}.html">${seccion}</a></li>`
    })
}

pintarArray(arraySecciones);