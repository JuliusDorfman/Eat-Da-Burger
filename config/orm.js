var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


module.exports = orm = {
    all: function(table, cb) {
        var queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [table], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, colToInput, newInput) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, colToInput, newInput], function(err, result) {
            console.log(result);
        });
    },
    updateOne: function(table, oldValue, id, newInput) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        connection.query(queryString, [table, oldValue, id, newInput], function(err, result) {
            console.log(result);
        });
    }
};


// Am I putting my app.get here? or in my server.js