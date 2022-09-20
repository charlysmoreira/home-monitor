let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

    const query = require('./queries');

const cron = require("node-cron");

// GET 
router.get("/", async (req, res, next) => {
  let conn;
  try {
      const result = await db.pool.query(query.WATER_LAST_VALUE);
      res.send(result);
  } catch (err) {
      throw err;
  } finally {
      if (conn) return conn.release();
  }
});

cron.schedule("* * * * *", () => {
  console.log("Envia mensagem para o fornecedor.");
});

module.exports = router;