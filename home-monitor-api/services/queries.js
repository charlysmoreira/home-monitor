const WATER_GETALL = "SELECT value, created_at FROM water";
const WATER_LAST_VALUE = "SELECT value, created_at FROM water WHERE created_at = (SELECT MAX(created_at) FROM water)";

const MESSAGE_CONFIG_GET_ALL = "SELECT * FROM messageconfig";
const MESSAGE_CONFIG_CREATE = "INSERT INTO messageconfig (name, phoneNumber, message) VALUES (?, ?, ?)";
const MESSAGE_CONFIG_UPDATE = "UPDATE messageconfig SET name = ?, phoneNumber = ?, message = ? WHERE id = ?";
const MESSAGE_CONFIG_DELETE = "DELETE FROM messageconfig WHERE id = ?";

module.exports = { 
    WATER_GETALL,
    WATER_LAST_VALUE, 
    MESSAGE_CONFIG_GET_ALL,
    MESSAGE_CONFIG_CREATE,
    MESSAGE_CONFIG_UPDATE,
    MESSAGE_CONFIG_DELETE
};