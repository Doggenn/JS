/*
        Primero se debe escribir el elemento en este caso el DIV en HTML
*/

const divCaja = document.getElementById('caja')

divCaja.textContent = '<strong>Pepe</strong>'; //Este solo cambia el texto no edita el formato
divCaja.innerHTML = '<strong>Pepe</strong>';//Este edita el texto y el formato
divCaja.className= "fondo tamano"


     //                                       //
    // CUIDADO CON EL ORDEN ES MUY IMPORTANTE//
   //                                       //

const imgPerros = document.getElementById('imagen')
const urlImagen = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg"
imgPerros.src = urlImagen;
imgPerros.style.padding = '20px';
imgPerros.style.border = '2px solid white';
imgPerros.style.borderRadius = '20px';


// CAPTURAMOS EL ARTICLE
const articulo = document.getElementById('producto');
articulo.className = 'border colorTexto articulo';

articulo.classList.add('border', 'articulo')
articulo.classList.remove('articulo')
articulo.classList.add('colorTexto')
articulo.classList.replace('colorTexto', 'artirulo')

function cambiarClases(claseSale, ClaseEntra) {
    articulo.classList.replace(claseSale, ClaseEntra)
}

/*const boton = document.getElementById('boton');
boton.src = urlImagen;*/