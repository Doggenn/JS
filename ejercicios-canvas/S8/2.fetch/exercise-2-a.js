const baseUrl = 'https://api.nationalize.io?name=';

document.getElementById('submitButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
        fetch(`${baseUrl}${name}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Aquí puedes manejar la respuesta de la API según tus necesidades
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        console.log('Por favor, ingrese un nombre antes de consultar.');
    }
});
