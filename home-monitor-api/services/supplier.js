let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

const query = require('./queries');

// GET 
router.get("/", async (req, res, next) => {
  let conn;
  try {
      const result = await db.pool.query(query.SUPPLIER_GET_ALL);
      res.send(result);
  } catch (err) {
      throw err;
  } finally {
      if (conn) return conn.release();
  }
});

// POST 
router.post("/", async (req, res, next) => {
    let supplier = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.SUPPLIER_CREATE, [supplier.name, supplier.phoneNumber, supplier.message, supplier.status]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// PUT 
router.put("/", async (req, res, next) => {
    let supplier = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.SUPPLIER_UPDATE, [supplier.name, supplier.phoneNumber, supplier.message, supplier.status, supplier.id]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// DELETE
router.delete("/", async (req, res, next) => {
    console.log(req.query)
    let id = req.query.id;
    let conn;
    try {
        const result = await db.pool.query(query.SUPPLIER_DELETE, [id]);
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

module.exports = router;