// console.log("welcome")

const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const RouterPath = require("./router");
const app = express();

const port = 7000;

app.use(bodyParser.json())

app.use(cors())
app.use("/", RouterPath)
app.use("/api/employee", RouterPath)
app.listen(port, () => console.log(`server running on port ${port}`))
