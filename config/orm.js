var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [table], function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(table, colToInput, newInput) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, colToInput, newInput], function(err, result) {
            console.log(result);
        });
    },
    updateOne: function(table, oldvalue, id, newInput) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, oldvalue, id, newInput], function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;

// Am I putting my app.get here? or in my server.js