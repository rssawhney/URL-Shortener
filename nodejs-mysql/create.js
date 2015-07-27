var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "007",
    database: "sitepoint"
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

var employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, function(err,res){
    if(err) throw err;

    console.log('Last insert ID:', res.insertId);
});

con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});