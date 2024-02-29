// Funcion que pinte el array de empleados dentro de una lista no ordenada en nuestro HTML
// - Crear la funcion. ¿Recibe parametros?
// - ¿Como recorro el array?
// - Recorriendo el array, ¿como creamos la lista no ordenada?
// - ¿Como pintamos la lista en el HTML?
const empleados = ['Maria', 'Julia', 'Ines', 'Victor'];
function listaEmpleados() {
    let lista =[];
    for (let i = 0; i < empleados.length; i++) { 
        lista +=`<li>${empleados[i]}</li>`;
    }
    document.write(`<ul>${lista}</ul>`)
}

listaEmpleados();


/*
for (let i = 0; i <= empleados.length; i++){
    document.write(`<p>${empleados[i]}</p>`);
}
*/