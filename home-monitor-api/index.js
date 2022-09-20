const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const water = require("./services/water");
const config = require("./services/messageConfig");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message });
});

app.use("/api/waters", water);

app.use("/api/messages", config);

app.listen(port, () => {
  console.log(`Run server in: http://localhost:${port}`);
});