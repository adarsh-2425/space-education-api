const express = require('express');
const starsController = require('./stars.controller');

const router = express.Router();

router.get('/stars', starsController.getStars);

module.exports = router;