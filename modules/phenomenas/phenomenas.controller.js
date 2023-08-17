const phenomenasData = require('./phenomenas.data');

exports.getPhenomenas = (req, res) => {
  res.json(phenomenasData);
};