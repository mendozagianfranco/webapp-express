const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

//index
router.get('/', moviesController.index);

//show
router.get('/:id', moviesController.show);

module.exports = router;