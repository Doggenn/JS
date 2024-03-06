const url = 'https://pokeapi.co/api/v2/pokemon/1025';

async function cargarDatos(endPoint) {

    //FETCH recibe 2 parametros URL(ENDPOINT) y el segundo el metodo de conexion como objetos.
    /*
    GET    -> para obtener dator
    POST   -> enviar datos
    PUT    -> actualizar datos
    DELETE -> borrar datos
    CRUD  Create Read Update Delete
    */
    const response = await fetch(endPoint, { method: 'GET' })
    
    const data = await response.json()
    console.log(data)
}
// Cargar todos los personajes
cargarDatos(url)
cargarDatos(url+'2')