/*
Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```
*/
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const editados = users.map(user => {
  // Si el nombre empieza por 'A', cambiarlo a 'Anacleto'
  if (user.name.startsWith('A')) {
    return { ...user, name: 'Anacleto' };
  }
  // De lo contrario, mantener el nombre original
  return user;
});

console.log(editados);