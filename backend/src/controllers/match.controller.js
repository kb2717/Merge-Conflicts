const matchService = require("../services/match.service");

exports.getMatches = async (req, res) => {
  const { user, opportunities } = req; // injected or mocked
  const matches = matchService(user, opportunities);
  res.json(matches);
};