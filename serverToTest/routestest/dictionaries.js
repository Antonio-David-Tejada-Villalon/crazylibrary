const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/dictionaries');
const validation = require('../../midware/validate');

router.get('/', bookController.allDictionaries);
router.get('/:id',bookController.oneDictionaries);
router.post('/', validation.checkInfo, bookController.createADictionaries);
router.put('/:id', validation.checkInfo, bookController.updateDictionaries);
router.delete('/:id', bookController.deleteDictionaries);


module.exports = router;