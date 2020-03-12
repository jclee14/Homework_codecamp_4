var express = require('express');
var app = express();

app.get('/inputNumber/:num', function (req, res) {
    let number = parseInt(req.params.num);
    if(number % 2 === 0) {
        res.status(200).send('Success (200)');
    } else {
        res.status(400).send('Bad input (400)');
    }
});

app.listen(3000);