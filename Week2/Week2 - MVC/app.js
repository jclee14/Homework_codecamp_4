var express = require('express');
var bodyParser = require('body-parser');
var listRoute = require('./route/listRoute');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/list', listRoute);

app.listen(3000);