const scoreCalc = require("../utils/scoreCalculator");
const eligible = require("../utils/eligibilityChecker");
const deadlineBoost = require("../utils/deadlineScore");

module.exports = (user, opportunities) => {
  return opportunities
    .filter(op => eligible(user, op))
    .map(op => {
      const scoreData = scoreCalc(user.skills, op.requiredSkills);
      const urgency = deadlineBoost(op.deadline);

      return {
        opportunityId: op._id,
        title: op.title,
        matchScore: scoreData.score + urgency,
        ...scoreData,
        deadline: op.deadline
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
};