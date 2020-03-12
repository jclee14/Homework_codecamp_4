var express = require('express');
var bodyParser = require('body-parser');
var countRoute = require('./route/countRoute');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/countFields', countRoute);

app.listen(3000);