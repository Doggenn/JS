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

items.forEach((item, index)=> document.write(`<p>${index} - ${item.name} - ${item.precio}</p>`))