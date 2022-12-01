let express = require("express"),
    router = express.Router(),
    db = require('../communs/db');

const query = require('./queries');

// GET 
router.get("/", async (req, res) => {
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
router.post("/", async (req, res) => {
    let supplier = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.SUPPLIER_CREATE, [supplier.name, supplier.phoneNumber, supplier.message, supplier.status]);
        res.json({ id: result.insertId, ...supplier });
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// PUT 
router.put("/", async (req, res) => {
    let supplier = req.body;
    let conn;
    try {
        const result = await db.pool.query(query.SUPPLIER_UPDATE, [supplier.name, supplier.phoneNumber, supplier.message, supplier.status, supplier.id]);
        res.json({ id: result.insertId, ...supplier });
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let conn;
    try {
        await db.pool.query(query.SUPPLIER_DELETE, [id]);
        res.status(204).send();
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

module.exports = router;