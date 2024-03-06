// Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector('.fn-insert-here');//     <----- Aqui se captura el elemento del H2.
h2$$.textContent = 'Wubba Lubba dub dub';//                   <----- Aqui forzamos a rellenar el campo de fn-insert-here con el texto indicado.