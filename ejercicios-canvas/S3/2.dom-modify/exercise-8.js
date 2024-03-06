// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const div$$ = document.querySelectorAll('div')[1];//      <----- Capturamos en la variable el div en este caso al ser el primero usamos el All y la posicion [1] para atacar al segundo
const p$$ = document.createElement('p');//                <----- Creamos la variable con el elemento para crear la <p>
p$$.textContent = 'Voy en medio!';//                      <----- Insertamos en en la variable anterior el texto que hemos definido.
div$$.appendChild(p$$);//                                 <----- Volcamos lo que esta en la variable p$$ a la variable div$$ que es el segundo div
document.body.insertBefore(p$$, div$$);//                 <----- Aqui estamos forzando a la inyeccion de la p en el segundo divy diciendo que lo ponga antes de dicho div.
