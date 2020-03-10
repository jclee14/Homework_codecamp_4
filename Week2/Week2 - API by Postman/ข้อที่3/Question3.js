var express = require('express');
var app = express();

app.get('/echo', function (req, res) {
  var text = req.query.text;
  res.send(text);
});

app.listen(3000);