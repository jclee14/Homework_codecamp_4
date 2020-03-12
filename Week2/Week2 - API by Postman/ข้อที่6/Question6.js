var express = require('express');
var app = express();

app.get('/plus/:numA/:numB', function (req, res) {
    let numA = req.params.numA;
    let numB = req.params.numB;
    let result = parseInt(numA) + parseInt(numB);
    res.send(`The sum of ${numA} + ${numB}, which is ${result}.`);
});

app.listen(3000);