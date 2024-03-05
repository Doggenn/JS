const arrayPoligonos = [
    { texto: 'Uno', color: 'blue', width: '100px', height: '100px' },
    { texto: 'Dos', color: 'red', width: '200px', height: '150px' },
    { texto: 'Tres', color: 'green', width: '50px', height: '20px' },
    { texto: 'Cuatro', color: 'grey', width: '250px', height: '80px' },
    { texto: 'Cinco', color: 'yellow', width: '75px', height: '40px' },
    { texto: 'Seis', color: 'orange', width: '150px', height: '60px' },

]
const sectionPoligonos = document.querySelector('#poligonos')
function pintarPoligonos(listaPoligonos, contenedorPoligonos) {
    for (let poligono of arrayPoligonos) {
        const div = document.createElement('div');// Con esta linea se crea un <div></div> Vacio. Para crearlo ha que usar .createElement.
        div.textContent = poligono.texto;
        div.style.backgroundColor = poligono.color;
        div.style.width = poligono.width;
        div.style.height = poligono.height;//Rellena el div con los estilos creados en el ARRAY.

        contenedorPoligonos.appendChild(div)// append permitiria crea mas de un elemento a la vez
    }
}
pintarPoligonos(arrayPoligonos, sectionPoligonos);