const baseUrl = 'https://api.nationalize.io?name=';

document.getElementById('submitButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
        fetch(`${baseUrl}${name}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('OK');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.log('Introduce un nombre.');
    }
});
