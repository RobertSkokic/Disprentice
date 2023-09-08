exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const payload = JSON.parse(event.body);
    console.log(payload);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Empfangene Daten: ${JSON.stringify(payload)}` }),
    };
};
