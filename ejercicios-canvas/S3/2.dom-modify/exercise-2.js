//Inserta dinamicamente en un html un div que contenga una p con javascript.

const div = document.createElement('div');//     //________ Primero declaramos las variables.  En esta linea estamos creado el elemento <div>
const p = document.createElement('p');   //      \\                                            En esta linea estamos creado el elemento <p>
document.body.appendChild(div);//                 <-------- Luego decimos que queremos atacar al <body> y declaramos que queremos usar la variable que hemos llamado DIV
div.appendChild(p)//                              <-------- Luego como ya esta creado el <div> le atacamos y le insertamos la variable de p
p.textContent = "Texto"//                         <-------- Al tener creada ya la <p> ya declaramos el texto que queremos insertar en ella.
