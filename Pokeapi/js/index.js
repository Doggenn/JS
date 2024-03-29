const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';


async function cargarDatos(endPoint) {
    //fetch recibe dos parametros, endpoint y el segundo el metodo de conexion como objeto

    /*
    GET -> obtener datos
    POST -> enviar datos
    PUT -> actualizar datos
    DELETE -> Borrar datos
    CRUD Create Read Update Delete
    */
    const response = await fetch(endPoint, { method: 'GET' })
    const data = await response.json()
    //console.log(data)
        if (data.results) {
            const array = data.results
            pintarCharacters(array, sectionCharacters)
        } else {
            pintarUnCharacter(data, sectionCharacters)
        }
    

}

//cargar todos los personajes
cargarDatos(url)
//carga solo el personaje 2
//cargarDatos(url + '2')
//carga pagina dos
//cargarDatos(url + '?page=2')
//filtrar por vivos y muertos
//cargarDatos(url + '?status=dead')

//-----------------------------------------


/*
<article>
    <figure>
        <img src="" alt="">
    </figure>
    <h3>Nombre personaje</h3>
    <p>Estatus: Vivo</p>
</article> 
*/
/*
const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites['front_default'],
    type: result.types.map((type) => type.type.name).join(', '),
    id: result.id
}))
*/
                

const sectionCharacters = document.querySelector('.characters');

function pintarCharacters(lista, lugar) {
    for (let character of lista) {
        pintarUnCharacter(character, lugar)
        //console.log(character)
    }
}

async function pintarUnCharacter(character, lugar) {
    //console.log(character.url);
    const pokemon = character.url;
    //console.log(pokemon);
    const pokemon1 = await fetch(pokemon, { method: 'GET' })
    //console.log(pokemon1);
    const infoPoke = await pokemon1.json()
    //console.log(infoPoke);
    const article = document.createElement('article'); //<article></article>
    const figure = document.createElement('figure');  //<figure></figure>
    const img = document.createElement('img'); //<img>
    //const imagePoke = infoPoke.sprites.other['official-artwork']['front_default'], 
    img.src = infoPoke.sprites.other['official-artwork']['front_default'],
    img.alt = infoPoke.name
    img.classList.add("picture")
    const h3 = document.createElement('h3');
    h3.classList.add("name")
    h3.textContent = character.name
    const p = document.createElement('p');
    p.textContent = `Nº: ${infoPoke.id}`;
    const p2 = document.createElement('p');
    p2.textContent = "Type: ";
    p2.classList.add("type")
    const p3 = document.createElement('p');
    p3.textContent = infoPoke.types.map((type)=> type.type.name)//[0].type.name //+ infoPoke.types[1].type.name;
    p3.classList.add("capi");
    p3.classList.add("border")
    // const p4 = document.createElement('p');
    // //p4.textContent = infoPoke.types[1].type.name;
    // p4.classList.add("type")
    //     console.log(infoPoke.types[0].type.name);

    figure.appendChild(img)
    article.append(figure, h3, p, p2,p3, /*p4*/);

    lugar.appendChild(article)
}
