const query = require('./queries');
const send = require('../communs/sendProvider');
const db = require('../communs/db');

var sendStatus = true;

const prepareSendMessage = async () => {
    const lastValue = await db.pool.query(query.WATER_LAST_VALUE);
    const supplierActive = await db.pool.query(query.MESSAGE_CONFIG_STATUS_ACTIVE);
    let resultValue = lastValue[0].value;
    if (sendStatus && resultValue <= 1){
        let message = supplierActive[0].message;
        let phoneNumber = supplierActive[0].phoneNumber;
        send.sendMessage(message, phoneNumber);
        sendStatus = false;
    }
}

module.exports = prepareSendMessage;