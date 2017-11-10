var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var routes = require("./controllers/burgers_controller.js");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("/", routes);

app.listen(PORT, function(err, res) {
	if (err) {
		throw err
		console.log(res);
	}
	console.log("App listening on PORT: " + PORT);
});