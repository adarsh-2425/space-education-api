const terminologiesData = require('./terminologies.data');

exports.getTerminologies = (req, res) => {
  res.json(terminologiesData);
};