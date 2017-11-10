var orm = require("../config/orm.js");

var TESTING = false;

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
            if (TESTING) { console.log("burger.js", res) }
        });
    },
    create: function(table, colToInput, newInput, cd) {
        orm.selectAll("burgers", table, colToInput, newInput, function(res) {
            cb(res);
        });
    },
    update: function(table, oldValue, id, newInput, cd) {
        orm.updateOne("burgers", table, oldValue, id, newInput, cd, function(res) {
            cd(res);
        });
    }
};

// Exporting these sql database functions to the burgers_controller.js
module.exports = burger;