const miCamino = {
  inicio: "dar el primer paso.",
  objetivo:
    "recorrer los 14 ochomiles y llegar hasta la cima del mundo: el Everest.",
  material: [
    {
      nombre: "Piolets",
      descripcion:
        "un instrumento usado en alpinismo para asegurarse en el hielo o la nieve; consiste en una especie de pico de metal con el extremo del mango afilado.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del piolet",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del piolet",
          },
        },
      ],
    },
    {
      nombre: "Crampones",
      descripcion:
        "una pieza de metal con púas que se sujeta a la suela de la bota para escalar o caminar sobre el hielo o la nieve.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de los crampones",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de los crampones",
          },
        },
      ],
    },
    {
      nombre: "Cuerdas",
      descripcion:
        "un objeto delgado, muy alargado y flexible, hecho de hilos o fibras torcidos o entrelazados, que se usa generalmente para atar o sujetar cosas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la cuerda",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la cuerda",
          },
        },
      ],
    },
    {
      nombre: "Mochila",
      descripcion:
        "una bolsa para transportar provisiones en excursiones, viajes u otro tipo de desplazamientos, que está confeccionada con tela resistente y a menudo impermeable y se lleva colgada a la espalda por medio de correas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la mochila",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la mochila",
          },
        },
      ],
    },
  ],
  cimas: [
    {
      nombre: "K2",
      altitud: 8.611,
      localizacion: "China/Pakistan",
    },
    {
      nombre: "Kangchenjunga",
      altitud: 8.586,
      localizacion: "India/Nepal",
    },
    {
      nombre: "Lhotse",
      altitud: 8.516,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Makalu",
      altitud: 8.463,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Cho Oyu",
      altitud: 8.201,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Dhaulagiri",
      altitud: 8.167,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Manaslu",
      altitud: 8.163,
      localizacion: "Nepal",
    },
    {
      nombre: "Nanga Parbat",
      altitud: 8.125,
      localizacion: "Pakistan",
    },
    {
      nombre: "Annapurna",
      altitud: 8.091,
      localizacion: "Nepal",
    },
    {
      nombre: "Gasherbrum I",
      altitud: 8.068,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Broad Peak",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Gasherbrum II",
      altitud: 8.035,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Shisha Pangma",
      altitud: 8.027,
      localizacion: "Tibet",
    },
    {
      nombre: "Everest",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
  ],
  subiendoAlEverest: [
    [
      {
        campoBase: [
          {
            campoI: {
              campoII: {
                campoIII: {
                  campoIV: [
                    "Tranquilo",
                    "lo",
                    "peor",
                    "ha",
                    "pasado",
                    8.846,
                    "ya.",
                    "¡Animo!",
                    {
                      cima: "¡Enhorabuena!, probablemente no seas el primero en llegar hasta aquí, pero estas con la programación, no con el alpinismo.",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// Ejercicio

/*Habiendo visto como acceder a las propiedades de los distintos objetos,como podemos recorrer arrays e ir buceando en ellos, es el momento de ponernos a prueba.

//Pasos a seguir para llegar a la cima

//vamos a imaginarnos que vamos a narrar la historia de como subi los 14 ochomiles y esta historia solo puede ser contada a traves de console.log, es decir,

// primer paso: vamos a empezar nuestro camino de la mejor manera y esa no puede ser de otra manera que dando el primer paso, por tanto vamos a decir: Lo mas importante es {inicio}*/
console.log(`Lo mas importante es ${miCamino.inicio}`);
//2º: vamos a decir : El objetivo de mi camino es : {objetivo}
console.log(`El objetivo de mi camino es : ${miCamino.objetivo}`)
/*
3º: en este paso ya empezaremos a toquetear con bucles y le vamos a decir: lo primero que debo llevar es {nombre del primer material} y es { su descripcion}
lo segundo que debo  llevar es {nombre del segundo material} y es { su descripcion}
lo tercero que debo  llevar es {nombre del tercer material} y es { su descripcion}
y por ultimo debo llevar la {mochila} que es {su descripcion} 
*/
for (let i = 0; i < miCamino.material.length; i++) {
  const objeto = miCamino.material[i];
  if (i === 0) {
   console.log(`Lo primero que debo de llevar es ${objeto.nombre} y es ${objeto.descripcion}`); 
  } else if(i === 1){
    console.log(`Lo segundo que debo de llevar es ${objeto.nombre} y es ${objeto.descripcion}`);
  } else if(i === 2){
    console.log(`Lo tercero que debo de llevar es ${objeto.nombre} y es ${objeto.descripcion}`);
  } else {
    console.log(`Y por ultimo debo llevar la ${objeto.nombre} que es ${objeto.descripcion}`);
  }
}
//4º: vamos a decir: para subir al {nombre de la cima}  debo subir {altura } metros y debo viajar a {ubicacion}
for (let i = 0; i < miCamino.cimas.length; i++) {
  const cima = miCamino.cimas[i];
  console.log(`Para subir al ${cima.nombre}  debo subir ${cima.altitud} metros y debo viajar a ${cima.localizacion}`);
 }

//5º: para llegar a la cima tendremos que darnos aliento y decirnos la frase que esta divida y que tiene que quedar así: "Tranquilo,lo peor ha pasado ya.¡Animo!
/*
let cima = '';
let cumbre = [];
for (let i = 0; i < miCamino.subiendoAlEverest.length; i++) {
  const campo1 = miCamino.subiendoAlEverest[i];
  //console.log(`${campo1[i]}`)
  for (let j = 0; j < campo1.length; j++) {
    const campo2 = campo1[j];
    //console.log(`${campo2[j]}`)
    for (let k = 0; k < campo2.campoBase.length; k++) {
      const campo3 = campo2.campoBase[k];
      for (let l = 0; l < campo3.campoI.campoII.campoIII.campoIV.length; l++) {
        const campo4 = campo3.campoI.campoII.campoIII.campoIV[l];
        if (typeof campo4 === 'object') {
          //console.log(campo4.cima);
          cima = campo4.cima
        } else {
          console.log(campo4);
          //cumbre = campo4.push();
        }
      }
    }
  }
}
*/
/*
console.log(cima)
console.log(cumbre);
let cima2 = '';
for (const campo1 of miCamino.subiendoAlEverest) {
  for (const campo2 of campo1) {
    for (const campo3 of campo2.campoBase) {
      for (const campo4 of campo3.campoI.campoII.campoIII.campoIV) {
        if (typeof campo4 === 'object') {
          //console.log(campo4.cima);
          cima2 = campo4.cima;
        } else {
          console.log(campo4);
        }
      }      
    }
  }
}
console.log(cima2)
*/
/*
console.log(`${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[0]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[1]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[2]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[3]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[4]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[5]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[6]} ${miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV[7]} `)*/
const recorrido = miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV;
let frase = '';
for (let i = 0; i < recorrido.length; i++) {
  const element = recorrido[i];
  if (typeof element === 'string') {
    frase = (`${frase} `+ element);
  } 
}
console.log(frase)
//6º: mostraremos el mensaje final guardado en la cima
console.log(recorrido[8].cima );
//por ultimo como bonus,en un console.log mostraremos por pantalla las urls de todas las imagenes de los materiales y en otro haremos la media de la altitud de todas la cimas que hemos subido.
