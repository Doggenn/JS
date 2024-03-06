//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const borrar$$ = document.querySelectorAll('.fn-remove-me');//  <----- Esta variable captura todos los elementos que tienen la class de .fn-remove-me

for (const borrarElemento$$ of borrar$$) {//                    <----- El bucle pasa cada elemento de borrar$$ a una nueva variable borrarElemento$$ para contar los pasos y borrarlos
    borrarElemento$$.remove();//                                <----- Esta funcion lo que realiza es leer la variable y borrar dicho elemento en cada ciclo.
}