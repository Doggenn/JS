//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divs$$ = document.querySelectorAll('.fn-insert-here');// <----- Creamos la variable que lee las clases y tengan declarado el .fn-insert-here
for (const div$$ of divs$$) {//                                <----- Creamos el for para recorrer todo los elementos con dicha clase uno a uno
    const p$$ = document.createElement('p');//                 <----- Creamos la variable en la que se creara la <p>
    p$$.textContent = 'Voy dentro!';//                         <----- Insertamos dentro de la <p> el texto que deseamos
    div$$.appendChild(p$$);//                                  <----- Creamos en la variable de div$$ los hijos que sean las <p> con el texto deseado.
}