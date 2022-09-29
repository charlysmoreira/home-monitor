const venom = require('venom-bot');

let config = {
    session: 'session-water',
    multidevice: true
}

function start(client, textMessage, phoneNumber) {
    client.sendText(`55${phoneNumber}@c.us`, textMessage);
}

const sendMessage = async (textMessage, phoneNumber) => {
    venom.create(config).then((client) => start(client, textMessage, phoneNumber));
}

exports.sendMessage = sendMessage;