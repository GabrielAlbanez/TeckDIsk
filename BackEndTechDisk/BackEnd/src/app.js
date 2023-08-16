const express = require("express");
const router = require("./routes");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(router);



module.exports = app;
