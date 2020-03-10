var express = require('express');
var app = express();

app.get('/staticJSON', function (req, res) {
  txtObj = {text: 'Hello World'};
  res.send(JSON.stringify(txtObj))
});

app.listen(3000);