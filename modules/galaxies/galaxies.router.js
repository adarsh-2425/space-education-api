const express = require('express');
const galaxiesController = require('./galaxies.controller');

const router = express.Router();

router.get('/galaxies', galaxiesController.getGalaxies);

module.exports = router;