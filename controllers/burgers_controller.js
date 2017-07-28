// Controller setup
// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file,
// import the following:
// Express
// burger.js
// Create the router
// for the app, and
// export the router at the end of your file.

var express = require('express');
var burger_router = express.Router();
var burger_call = require('../models/burger.js');
var bodyParser = require('body-parser');

burger_router.use(bodyParser.json());
burger_router.use(bodyParser.urlencoded({ extended: false }));
burger_router.use(bodyParser.text());
burger_router.use(bodyParser.json({ type: 'application/vnd.api+json' }));

burger_router.get('/', function(req, res) {
    res.redirect('/burger');
});

burger_router.post('/add', function(req, res) {
    res.redirect('/burger');
});

burger_router.put('/update', function(req, res) {
    res.redirect('/burger');
});

burger_router.delete('/devoured', function(re, res) {
    res.redirect('/burger');
});

module.exports = burger_router;