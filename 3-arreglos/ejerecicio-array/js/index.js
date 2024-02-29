const listaNombres = ['Ana', 'Natalia', 'Pepe', 'Juan', 'Antonio', 'Alejandro', 'Almudena'];

// Funcion que reciba como parametro un ARRAY y una letra
// Muestra por consola los nombres que empiezan por esa letra
// - Crear la funcion.
// - ¿Que parametros le paso?
// - Recorrer el ARRAY --¡¡¡Comprobar que se recorre bien!!!
// -- Si el nombre empieza por la letra correspondiente, lo muestro por consola
// - Un String utiliza indices como si fuese un array




function buscar(lista, letra) {
   for (let nombre of listaNombres) {
        if (nombre[0] === letra) {
            document.write(`<p style="color: blue;">${nombre}</p>`);
        }
    };
}
buscar(listaNombres, 'A');
buscar(listaNombres, 'B');
buscar(listaNombres, 'Y');
buscar(listaNombres, 'N');