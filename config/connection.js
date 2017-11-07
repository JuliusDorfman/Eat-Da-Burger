var mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burger_db"
});



// connection.connect will connect to the server

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("Connected as id " + connection.threadId);

});


module.exports = connection;