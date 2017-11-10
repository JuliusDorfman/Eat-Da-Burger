var express = require("express");

var router = express.Router();

// Import our burger model(which contains our database functions)
var burger = require("../models/burger.js");

var TESTING = false;

// creating routes and logic 

// router.get will provide the entire database of pre-existing burgers
router.get("/", function(req, res) {
    if (TESTING) { console.log("req, res, burgers_controller.js", res) }
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


// app.post("/", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// app.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;