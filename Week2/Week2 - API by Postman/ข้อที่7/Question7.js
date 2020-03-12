var express = require('express');
var app = express();

app.get('/checkEvenNumber/:num', function (req, res) {
    let number = parseInt(req.params.num);
    if(number % 2 === 0) {
        res.send(`${number} is an EVEN number.`);
    } else {
        res.send(`${number} is an ODD number.`);
    }
});

app.listen(3000);