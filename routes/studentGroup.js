var express = require('express');
var router = express.Router();


var connection= require('../dbconnection/config.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM  student_group", function (err, result, fields) {
        if (err) res.json(err);
        res.json(result);
    });
});

router.post('/',function (req,res,next) {
    console.log(req.body);
    var sql = "INSERT INTO student_group (name) VALUES  ('"+ req.body.name +"') ";
    connection.query(sql, function (err, result) {
        if (err) res.json(err);
        res.json({err:false,errMsg:'student group created',data:result.insertId})
    });
});
module.exports = router;
/**
 * Created by ayatalat on 8/21/2017.
 */
