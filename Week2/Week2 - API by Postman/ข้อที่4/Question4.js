var express = require('express');
var app = express();

app.get('/plus', function (req, res) {
  let numA = parseInt(req.query.a);
  let numB = parseInt(req.query.b);
  let result = numA + numB;
  res.send("the sum of " + numA + " + " + numB + " = " + result);
});

app.listen(3000);