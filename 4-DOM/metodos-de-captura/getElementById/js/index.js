/*
        Primero se debe escribir el elemento en este caso el DIV en HTML
*/

const divCaja = document.getElementById('caja')

divCaja.textContent = '<strong>Pepe</strong>'; //Este solo cambia el texto no edita el formato
divCaja.innerHTML = '<strong>Pepe</strong>';//Este edita el texto y el formato



     //                                       //
    // CUIDADO CON EL ORDEN ES MUY IMPORTANTE//
   //                                       //

const imgPerros = document.getElementById('imagen')
const urlImagen = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg"
imgPerros.src = urlImagen;
