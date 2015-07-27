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

con.query(
    'UPDATE employees SET location = ? Where ID = ?',
    ["South Africa", 5],
    function (err, result) {
        if (err) throw err;

        console.log('Changed ' + result.changedRows + ' rows');
    }
);

con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});