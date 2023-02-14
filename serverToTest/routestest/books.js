const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/books');
const validation = require('../../midware/validate');

router.get('/', bookController.allBooks);
router.get('/:id',bookController.oneBook);
router.post('/', validation.checkInfo, bookController.createABook);
router.put('/:id', validation.checkInfo, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);


module.exports = router;