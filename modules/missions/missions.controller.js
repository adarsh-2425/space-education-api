const missionsData = require('./missions.data');

exports.getMissions = (req, res) => {
  res.json(missionsData);
};