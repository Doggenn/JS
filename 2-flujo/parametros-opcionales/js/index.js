function saludar(nombre, apellidos = '') {
    return `Hola ${nombre} ${apellidos}`;
}
document.write(`<p>${saludar('Adrian', 'Rodriguez')}</p>`);
const saludo = saludar('Adrian', 'Rodriguez');
document.write(`<p>${saludar('Roberta')}</p>`);
const saludo2 = saludar('Roberta');

document.write(`<p>${saludar('Adrian', 'Rodriguez')}</p><p>${saludar('Roberta')}</p>`);