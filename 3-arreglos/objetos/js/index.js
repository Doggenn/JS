// Arrays asociativos | diccionarios | objetos
//Definir estructuras que asocien claves a valores

const producto = {
    nombre: 'Leche',
    departamento: 'lacteos',
    precio: 2,
    disponible: true,
};

// Recuperar valores.
// Opcion 1
console.log(producto['nombre']);

// Opcion2
console.log(producto.departamento);

//Modificacion
producto.precio = 3.23;
producto['departamento'] = 'hogar';

producto.stock = 100; //Sirve para añadir una nueva propiedad.

console.log(producto);

//FOR - in
for (let clave in producto) {   // Devuelve las claves 
    console.log(clave); // Se repite el for tantas veces como claves tenga el producto
}