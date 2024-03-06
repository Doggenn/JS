// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button$$ = document.getElementById('btnToClick');// <----- En este campo lo que realizamos es capturar los elementos que tengan el ID btnToClick
btnToClick.addEventListener('click', function(event) {//  <----- Aqui creamos la escucha  de cuando se haga el click
    console.log(event);//                                 <----- Aqui imprime toda la informacion del boton al pulsarlo en la consola.
});