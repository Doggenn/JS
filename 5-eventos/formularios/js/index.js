const formulario = document.querySelector('#formulario')
const contactos = [];


formulario.addEventListener('submit', cargarDatos);

function cargarDatos(event) {
    // SIEMPRE que se cargue un evento a un formulario hay que prevenir la accion por defecto.
    event.preventDefault()
    
    // CAPTURAR LA INFORMACION

    const nombre = event.target.nombre.value;
    const edad = event.target.edad.value;

    console.log(nombre, edad);
    const persona = {
        name: nombre,
        age: edad
    }
    contactos.push(persona)
    console.log(contactos)
}