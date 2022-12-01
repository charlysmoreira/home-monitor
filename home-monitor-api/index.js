const express = require("express");
const app = express();
const port = 5002;
const bodyParser = require("body-parser");
const cors = require('cors');
const cron = require("node-cron");

const config = require('./config');
const water = require("./services/water");
const supplier = require("./services/supplier");
const prepareSendMessage = require("./services/sendMessage");

cron.schedule(config.cronValue, async () => {
    try {
        prepareSendMessage();
    } catch (error) {
        console.error(error);
    }
});

app.use(cors(config.corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use((err, req, res, next) => {
    res.status(422).send({ error: err._message });
});

app.use("/api/waters", water);
app.use("/api/suppliers", supplier);

app.listen(port, () => {
    console.log(`Run server in: http://localhost:${port}`);
});