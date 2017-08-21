
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "schedule"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports =con;

/**
 * Created by ayatalat on 8/21/2017.
 */
