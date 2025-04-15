const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController.js');

router.get('/', movieController.index);

module.exports = router;