// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div$$ = document.createElement('div');//      <--------- Primero declaramos las variables que no se vayan a usar en un bucle.  En esta linea estamos creado el elemento <div>

for (let i = 0; i < 6; i++) {//                   <-------- Creamos el bucle para que se creen las lineas las seis veces  y luego se sumen en la variable que tenemos declarada dentro.
    const p$$ = document.createElement('p');//      <-------- Declaramos la variable dentro del bucle para que se vaya sumando como un array
    div$$.appendChild(p$$);//                         <-------- Aqui estamos declarando donde queremos añadir la p en este caso es en el <div>
    p$$.textContent = "Texto " + (i+1);//           <-------- Al tener creada ya la <p> ya declaramos el texto que queremos insertar en ella y añadimos la i para asi saber la linea.
}
document.body.appendChild(div$$);//                 <-------- Luego decimos que queremos atacar al <body> y declaramos que queremos usar la variable que hemos llamado DIV