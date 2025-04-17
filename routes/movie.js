const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController.js');

router.get('/', movieController.index);
router.get('/:id', movieController.show);
router.post('/:id/reviews', movieController.create);


module.exports = router;