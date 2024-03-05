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
    pintarContactos(contactos, ulContactos)
}




// CAPTURAR EL UL DONDE SE PROYECTARAN LOS CONTACTO EN FORMATO LI
const ulContactos = document.querySelector('.contactos');
function pintarContactos(lista, contenedor) {
    contenedor.textContent = '';
    for (let contacto of lista) {
        const li = document.createElement('li') //<li></li>
        li.textContent = `${contacto.name}: ${contacto.age}`
        //<li>Juan: 42</li>

        contenedor.appendChild(li)

    }
}