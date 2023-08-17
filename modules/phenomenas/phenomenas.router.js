const express = require('express');
const phenomenasController = require('./phenomenas.controller');

const router = express.Router();

router.get('/phenomenas', phenomenasController.getPhenomenas);

module.exports = router;