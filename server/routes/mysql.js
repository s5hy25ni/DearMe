var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'dmadmin',
    password : '1234qwer',
    database : 'dearme',
    port : '3306',
});

module.exports = connection;