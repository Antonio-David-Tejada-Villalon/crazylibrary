const express = require('express');

const router = express.Router();


router.use('/', require('./swagger'));

//requiring books
router.use('/books', require('./books'));
//requiring magazines
router.use('/magazines', require('./magazine'));
//requiring dictionaries
router.use('/dictionary', require('./dictionaries'));
//requiring Cash Register
router.use('/cash-register', require('./cash-register'));



module.exports = router;