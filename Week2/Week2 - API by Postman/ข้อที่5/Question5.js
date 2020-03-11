var express = require('express');
var app = express();

app.get('/plusByJson', function (req, res) {
  txtObj = req.query.jsonText;
  let startP = 0;
  let endP = 0;
  let numA, numB;
  let isNumA = true;
  for(let i = 0 ; i < txtObj.length ; i++) {
    if(txtObj.charAt(i) === ':') {
      startP = i+1;
      if(!isNumA) {
        numB = txtObj.substring(startP, txtObj.length-1);
        break;
      }
    }
    if(txtObj.charAt(i) === ',') {
      endP = i;
      numA = txtObj.substring(startP, endP);
      isNumA = false;
    }
  }
  result = parseInt(numA) + parseInt(numB);

  res.send('The sum of ' + numA + ' + ' + numB + ' is ' + result);
});

app.listen(3000);