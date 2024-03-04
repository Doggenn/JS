const items = [
    {name: 'Tenedor', precio: 1 },
    {name: 'Cuchara', precio: 2 },
    {name: 'Cuchillo', precio: 3 },
    {name: 'Paleta de pecado', precio: 4 },
]

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    document.write(`<p>${i} - ${items[i].name} - ${items[i].precio}</p>`)
}

let contador = 0;
for (let item of items) {
    document.write(`<p>${contador} - ${item.name} - ${item.precio}</p>`);
    contador++;
}



//              \/<=== Esta es la variable de los objetos dentro de la ARRAY
//              V         V<=== Aqui se pone el nombre de la variable que en cada vuelta ira sumando 1 y sera numerico.
items.forEach((item, contador2)=> document.write(`<p>${contador2} - ${item.name} - ${item.precio}</p>`))