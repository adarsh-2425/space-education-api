const planetsData = require('./planets.data');

exports.getPlanets = (req, res) => {
  res.json(planetsData);
};