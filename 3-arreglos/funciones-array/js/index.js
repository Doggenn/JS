const nombres = ['Rocio', 'Lucia', 'Manuel', 'Lorenzo', 'Rodolfo'];
document.write(`<p>${nombres}</p>`);
// Agregamos elementos al array
document.write(`<p style= "font-size: 30px; color: red">Añadimos un nuevo nombre</p>`)
// FIFO
nombres.push('Rigoberta');
document.write(`<p>${nombres}</p>`)

// Para eliminar el ultimo elemento del array.
document.write(`<p style= "font-size: 30px; color: red">Quitamos un nombre</p>`)
nombres.pop();
document.write(`<p>${nombres}</p>`)
nombres.pop();
document.write(`<p>${nombres}</p>`)

// Agregamos elementos a partir del primer indice.
document.write(`<p style= "font-size: 30px; color: red">Ponemos un nombre en la primera posicion</p>`)
nombres.unshift('Ricardo');
document.write(`<p>${nombres}</p>`)

// Para quitar el primer elemento
document.write(`<p style= "font-size: 30px; color: red">Quitamos el nombre en la primera posicion</p>`)
nombres.shift();
document.write(`<p>${nombres}</p>`)

// Funcion at() para ver el elemento en una posicion especifica. Se puede contar en positivo para la posicion normal y en negativo para empezar por detras.
document.write(`<p style= "font-size: 30px; color: red">Para solo extraer un nombre en una posicion concreta.</p>`)
nombres.at(2);
document.write(`<p>${nombres.at(2)}</p>`)
document.write(`<p>${nombres.at(-1)}</p>`)