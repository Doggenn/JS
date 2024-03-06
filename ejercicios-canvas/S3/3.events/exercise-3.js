// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.
function recogerDatos(event){
    console.log(event.target.value);//              <----- Cuando se captura el evento de un input hay que usar target para capturar el valor del mismo input
}
const input$$ = document.querySelector('input');//  <----- Se crea una constante en la con la lectura del INPUT
input$$.addEventListener('input', recogerDatos);//  <----- Focus solo funciona cuando se le hace el focus 