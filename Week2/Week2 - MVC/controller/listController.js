var listModel = require('../model/listModel');

module.exports.getList = function(req, res) {
  var list = listModel;
  res.send(list);
}

module.exports.addList = function(req, res) {
  listModel.push(req.body.data);
  
  var list = listModel;
  res.send(list);

  res.status(200).send('Add List Success');
}