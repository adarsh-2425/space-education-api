const starsData = require('./stars.data');

exports.getStars = (req, res) => {
  res.json(starsData);
};