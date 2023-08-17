const express = require('express');
const planetsController = require('./planets.controller');

const router = express.Router();

router.get('/planets', planetsController.getPlanets);

module.exports = router;
