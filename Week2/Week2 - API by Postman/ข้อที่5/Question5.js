var express = require('express');
var app = express();

app.get('/plusByJson', function (req, res) {
  txtObj = req.query.jsonText;
  //result = txtObj.a + txtObj.b;
  //res.send("the sum of " + txtObj.a + " + " + txtObj.b + " = " + result);
  res.send(txtObj);
});

app.listen(3000);