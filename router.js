const express = require("express");

const sqlDbconnect = require("./dbconnect");

const Router = express.Router();

Router.get('/', (req, res) => {
    const userData = [{ name: "Akhila", email: "akhila@gmail.com", age: 20 },
    { name: "Amul", email: "amul@gmail.com", age: 21 }
    ];
    res.send(userData);
})

Router.get("/api/employee", (req, res) => {
    sqlDbconnect.query("select * from employee", (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})


module.exports = Router
