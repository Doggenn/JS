// Funcion que me diga que numero es mayor. El punto de partida son dos numeros.
const numero1 = Number(prompt('Pon un numero'))
const numero2 = Number(prompt('Pon otro numero'))
function mayor(numero1, numero2) {

    if (numero1 > numero2) {
        document.write(`${numero1} es mayor que ${numero2}`)
    } else if (numero1 < numero2) {
        document.write(`${numero1} es menor que ${numero2}`)
    } else if (numero1 === numero2) {
        document.write(`${numero1} es igual que ${numero2}`)
    } else {
        document.write(`No has introducido ningun numero`)
    }
}
function mayorv2(numero1, numero2) {
    let mensaje;
    if (numero1 > numero2) {
        mensaje =`${numero1} es mayor que ${numero2}`
    } else if (numero1 < numero2) {
        mensaje = `${numero1} es menor que ${numero2}`
    } else if (numero1 === numero2) {
        mensaje = `${numero1} es igual que ${numero2}`
    } else {
        mensaje = `No has introducido ningun numero`
    }
    return mensaje;
}
function mayorv3(numero1, numero2) {
    let mensaje;
    if (numero1 > numero2) {
        return `${numero1} es mayor que ${numero2}`
    } else if (numero1 < numero2) {
        return  `${numero1} es menor que ${numero2}`
    } else if (numero1 === numero2) {
        return  `${numero1} es igual que ${numero2}`
    } else {
        return  `No has introducido ningun numero`
    }
}
mayor(numero1, numero2);
mayorv2(numero1, numero2);
mayorv3(numero1, numero2);