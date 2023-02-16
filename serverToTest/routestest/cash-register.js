const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/cash-register');


router.get('/', bookController.allCashRegister);
router.put('/:id', bookController.updateBuy);


module.exports = router;