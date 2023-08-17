const express = require('express');
const missionsController = require('./missions.controller');

const router = express.Router();

router.get('/missions', missionsController.getMissions);

module.exports = router;