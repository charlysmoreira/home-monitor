const getLastValue = "SELECT value, created_at FROM water WHERE created_at = (SELECT MAX(created_at) FROM water)";

module.exports = { getLastValue };