var express = require('express');
var router = express.Router();
var countController = require('../controller/countController');

router.post('/', countController.countNumber);

module.exports = router;