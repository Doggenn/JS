/*
Pedir por promt años de experiencia y el departamento
Quiero comprobar si se pertenenece al departamente "desarrollo" y si tiene mas de 10 años de experiencia.
*/

const años = Number(prompt('Introduce los años de experiencias'));
const departamento = prompt('Introduce tu departamente (todo en minusculas)')

if ((años >= 10) && (departamento == 'desarrollo')) {
    console.log('Eres un veterano')
} else {
    console.log('Te falta experiencia')
}