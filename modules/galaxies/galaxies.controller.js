const galaxiesData = require('./galaxies.data');

exports.getGalaxies = (req, res) => {
  res.json(galaxiesData);
};