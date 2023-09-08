document.getElementById('sendPost').addEventListener('click', function() {
    // Daten, die Sie senden möchten (falls zutreffend)
    const dataToSend = {
        key: 'value'
    };

    fetch('/.netlify/functions/handlePost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        // Die Antwort in das HTML-Element einfügen
        document.getElementById('postResponse').innerText = data.message;
    })
    .catch(error => {
        console.error('Es gab einen Fehler beim Senden des POST-Requests:', error);
    });
});
