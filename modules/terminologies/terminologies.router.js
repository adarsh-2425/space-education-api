const express = require('express');
const terminologiesController = require('./terminologies.controller');

const router = express.Router();

router.get('/terminologies', terminologiesController.getTerminologies);

module.exports = router;