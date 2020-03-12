var express = require('express');
var bodyParser = require('body-parser');
var numberRoute = require('./route/numberRoute');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/number', numberRoute);

app.listen(3000);