const sql = require("mysql");

const sqlconnet = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employees",
    multipleStatements: true
});

sqlconnet.connect((err) => {
    if (!err) {
        console.log("Databse conneted")

    } else {
        console.log(err)
    }
});

module.exports = sqlconnet
