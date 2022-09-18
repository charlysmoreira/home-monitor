var mariadb = require('mariadb');
const config = require("../config");

var pool = 
  mariadb.createPool({
    host: config.db.host, 
    port : config.db.port,
    user: config.db.user, 
    password: config.db.password,
    database : config.db.database
  });

module.exports = { pool: pool };