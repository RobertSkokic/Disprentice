document.getElementById('myButton').addEventListener('click', async () => {
    const dataToSend = "test"

    const response = await fetch('/.netlify/functions/handlePost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    });

    const responseData = await response.json();
    document.getElementById('postData').innerText = responseData.message;
});
