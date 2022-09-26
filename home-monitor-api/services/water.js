let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

    const query = require('./queries');

const cron = require("node-cron");

// GET 
router.get("/lastValue", async (req, res, next) => {
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

// GET ALL
router.get("/", async (req, res, next) => {
  let conn;
  try {
      const result = await db.pool.query(query.WATER_GETALL);
      res.send(result);
  } catch (err) {
      throw err;
  } finally {
      if (conn) return conn.release();
  }
});

cron.schedule("* * * * *", async () => {
    const response = await db.pool.query(query.WATER_LAST_VALUE);
    let resultValue = response[0].value;
    console.log(resultValue);
    if (resultValue <= 1){
        console.log("Envia mensagem para o fornecedor.");
    }
});

module.exports = router;