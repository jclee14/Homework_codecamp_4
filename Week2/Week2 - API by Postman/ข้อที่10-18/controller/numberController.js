var { numberArr } = require('../model/numberModel');

module.exports.getNumber = function(req, res) {
  let jsonNum = JSON.stringify(numberArr);
  res.send(jsonNum);
}

module.exports.addNumber = function(req, res) {
  let newNumber = parseInt(req.body.num)

  if(isNaN(newNumber)) {
    res.status(400).send('Wrong Input (400)');
  } else {
    numberArr.push(newNumber);
    let jsonNum = JSON.stringify(numberArr);
    res.send(jsonNum);
  }
}

module.exports.updateNumber = function(req, res) {
  let oldNumber = parseInt(req.params.oldNum);
  let newNumber = parseInt(req.params.newNum);

  let index = numberArr.indexOf(oldNumber);
  if (index !== -1) {
    if(isNaN(newNumber)) {
      res.status(400).send('Wrong Input (400)');
    } else {
      numberArr[index] = newNumber;
      let jsonNum = JSON.stringify(numberArr);
      res.status(200).send(jsonNum);
    }
  } else {
    res.status(400).send('Wrong input (400)');
  }
}

module.exports.deleteNumber = function(req, res) {
  let index = numberArr.indexOf(parseInt(req.params.num));
  if (index !== -1) {
    numberArr.splice(index, 1);
    let jsonNum = JSON.stringify(numberArr);
    res.status(200).send(jsonNum);
  } else {
    res.status(400).send('Error input (400)');
  }

}