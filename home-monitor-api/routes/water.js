const express = require("express");
const router = express.Router();
const water = require("../services/water");

router.get("/", async function (req, res, next) {
  try {
    res.json(await water.getAll(req.query.page));
  } catch (err) {
    console.error(`Error getAll water `, err.message);
    next(err);
  }
});

module.exports = router;