

function cargarNota() {

    const promesa = new Promise((resolve, reject)=> {
    
        setTimeout(() => {
            const nota = Math.ceil(Math.random() * 15)
            if (nota >= 0 && nota < 5) {
                resolve('Suspenso')
            } else if (nota >= 5 && nota <= 10) {
                resolve('Aprobado')
            } else if (nota > 10) {
                reject('Nota no esperada')
            }
        }, 2000)
    })
    return promesa
}
//Consumicion de la promesa

/*
try{

}catch(err){

}
*/
async function init() {
    try{
        const miNota = await cargarNota()
        alert(miNota);
    } catch (error) {
        alert(error)
    }
}

init()
console.log('Cargando el footer, productos');