var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Sets up the Express App
// =============================================================
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000 ;

app.get('/', function(req, res) {
    res.send('burger');
})
// parse application
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });

app.use(express.static(process.cwd() + '/public'));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('hbs', exphbs({
    defaultLayout: 'main'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);

});