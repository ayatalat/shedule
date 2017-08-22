
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "sql8.freemysqlhosting.net",
    user: "sql8189643",
    password: "wnjTT7FmfV",
    database: "sql8189643"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports =con;

/**
 * Created by ayatalat on 8/21/2017.
 */




