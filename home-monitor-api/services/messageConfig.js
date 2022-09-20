let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

const query = require('./queries');

// GET 
router.get("/", async (req, res, next) => {
  let conn;
  try {
      const result = await db.pool.query(query.MESSAGE_CONFIG_GET_ALL);
      res.send(result);
  } catch (err) {
      throw err;
  } finally {
      if (conn) return conn.release();
  }
});

// POST 
router.post("/", async (req, res, next) => {
    let user = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.MESSAGE_CONFIG_CREATE, [user.name, user.phoneNumber, user.message]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// PUT 
router.put("/", async (req, res, next) => {
    let user = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.MESSAGE_CONFIG_UPDATE, [user.name, user.phoneNumber, user.message, user.id]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// DELETE
router.delete("/", async (req, res, next) => {
    let id = req.query.id;
    let conn;
    try {
        const result = await db.pool.query(query.MESSAGE_CONFIG_DELETE, [id]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

module.exports = router;