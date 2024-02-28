//literal o string

let nombre = 'Adrian';
let apellido = 'Rodriguez';
let nombre_completo;
let edad = 32;
let frase;

nombre_completo = (nombre + ' ' + apellido);
console.log(nombre_completo);
frase = ('Me llamo ' + (nombre_completo) + ' y tengo ' + (edad) + ' años.')
console.log(frase)
frase = (`Me llamo ${nombre} y tengo ${edad} años`)
console.log(frase)
let seccion = `<section>
                    <article>
                        <p>${nombre}</p>
                        <p>${apellido}</p>
                        <p>${nombre_completo}</p>
                        <p>${edad}</p>
                        <p>${frase}</p>
                    </article>
                </section>`;
document.write(seccion);


//Buleanos
let activo = true;
let estaEncendido = false;

//TIPOS
let ciudad;
console.log(ciudad);
document.write(ciudad);
console.log(typeof ciudad);
document.write(typeof ciudad);
ciudad = 'Madrid';
document.write(ciudad);
console.log(typeof ciudad);
document.write(typeof ciudad);