const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/magazine');
const validation = require('../../midware/validate');




router.get('/', bookController.allMagazine);
router.get('/:id',bookController.oneMagazine);
router.post('/', validation.checkInfo, bookController.createAMagazine);
router.put('/:id', validation.checkInfo, bookController.updateMagazine);
router.delete('/:id', bookController.deleteMagazine);


module.exports = router;