var express = require('express');
var router = express.Router();
var numberController = require('../controller/numberController');

router.get('/', numberController.getNumber);
router.post('/', numberController.addNumber);
router.put('/:oldNum/:newNum', numberController.updateNumber);
router.delete('/:num', numberController.deleteNumber);

module.exports = router;