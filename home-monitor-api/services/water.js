const db = require("../communs/db");
const helper = require("../communs/helper");
const config = require("../config");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT value, created_at FROM water LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  //const meta = { page };

  return { data };
}

module.exports = {
    getAll
};