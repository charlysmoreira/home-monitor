let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

const query = require('./queries');

// GET 
router.get("/lastValue", async (req, res, next) => {
  let conn;
  try {
      const result = await db.pool.query(query.WATER_TWO_LAST_VALUE);
      res.send([result[0]]);
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

module.exports = router;