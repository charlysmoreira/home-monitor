const query = require('./queries');
const send = require('../communs/sendProvider');
const db = require('../communs/db');

const prepareSendMessage = async () => {
    const twoLastValue = await db.pool.query(query.WATER_TWO_LAST_VALUE);
    const supplierActive = await db.pool.query(query.SUPPLIER_STATUS_ACTIVE);
    let resultValue = (twoLastValue[0].value + twoLastValue[1].value) / 2;
    console.log(resultValue);
    if (resultValue <= 3){
        let message = supplierActive[0].message;
        let phoneNumber = supplierActive[0].phoneNumber;
        send.sendMessage(message, phoneNumber);
    }
}

module.exports = prepareSendMessage;