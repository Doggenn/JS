/*
    Objetivo:
    Crear una funcion que me pida los datos de contacto de una persona (nombre, email, telefono) por pun promp
    Con esos datos vamos a generar un objeto
    Ese objeto lo incluimos en un array
*/

const contactos = [];


function crearContacto() {
    const nombrePrompt = prompt('Introduce el nombre del contacto');
    const emailPrompt = prompt('Introduce el correo del contacto');
    const telefonoPrompt = prompt('Introduce el telefono del contacto');

    const persona = {
        nombre: nombrePrompt,
        email: emailPrompt,
        telefono: telefonoPrompt,
    }
    console.log(persona);
    contactos.push(persona);
}
crearContacto();

// Funcion que me muestre el nombre y el email de todos los contactos del array

function consultar() {
    for (let contact of contactos) {   
        console.log(`Nombre: ${contact.nombre} Correo: ${contact.email}`);
        document.write(`Nombre: ${contact.nombre} Correo: ${contact.email}`);
    }
}
consultar();

// Crear una funcion que nos pida por prompt que accion queremos llevar a cabo
// crear, ver, salir
// Funcion que borre un contacto.