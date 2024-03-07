const apiUrl = 'https://api.agify.io?name=michael';

fetch(apiUrl)
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
