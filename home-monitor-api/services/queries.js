const WATER_GETALL = "SELECT value, created_at FROM water";
const WATER_TWO_LAST_VALUE = "SELECT value, created_at FROM water ORDER BY created_at DESC LIMIT 2";

const SUPPLIER_STATUS_ACTIVE = "SELECT * FROM supplier WHERE status = 1";
const SUPPLIER_GET_ALL = "SELECT * FROM supplier";
const SUPPLIER_CREATE = "INSERT INTO supplier (name, phoneNumber, message, status) VALUES (?, ?, ?, ?)";
const SUPPLIER_UPDATE = "UPDATE supplier SET name = ?, phoneNumber = ?, message = ?, status = ? WHERE id = ?";
const SUPPLIER_DELETE = "DELETE FROM supplier WHERE id = ?";

module.exports = { 
    WATER_GETALL,
    WATER_TWO_LAST_VALUE,
    SUPPLIER_STATUS_ACTIVE,
    SUPPLIER_GET_ALL,
    SUPPLIER_CREATE,
    SUPPLIER_UPDATE,
    SUPPLIER_DELETE
};