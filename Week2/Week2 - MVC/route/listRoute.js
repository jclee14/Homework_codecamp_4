var express = require('express');
var router = express.Router();
var listController = require('../controller/listController');

router.get('/', listController.getList);
router.post('/', listController.addList);

module.exports = router;