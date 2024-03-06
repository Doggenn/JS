/*
Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```
*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');//            <------- Creamos las variables que solo vamos a necesitar usar una vez y que no se se le va a añadir nada dentro

for (let i = 0; i < apps.length; i++) {//               <------- Creamos un bucle para ir añadiendo en la variable que esta dentro declarada los <li>y que se vayan añadiendo.
    const li$$ = document.createElement('li');//        <------- Esta es la variable mencionada arriba en ella se añade el elemento <li>
    li$$.textContent = apps[i];//                       <------- Aqui vamos añadiendo en la variable anterior (li$$) el texto del array de apps segun el valor de la [i]
    ul$$.appendChild(li$$);//                           <------- Aqui volcamos el contenido de la variable de li$$ en la variable que esta fuera declarada(ul$$) para hacer el <ul>
}

document.body.appendChild(ul$$);//                      <------- Aqui ya es cuando inyectamos el codigo atacando al body todo lo que este en la variable de ul$$