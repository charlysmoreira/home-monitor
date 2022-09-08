const express = require("express");
const router = express.Router();
const gas = require("../services/gas");

router.get("/", async function (req, res, next) {
  try {
    res.json(await gas.getAll(req.query.page));
  } catch (err) {
    console.error(`Error getAll water `, err.message);
    next(err);
  }
});

module.exports = router;