module.exports = (userSkills, requiredSkills) => {
  const matched = userSkills.filter(skill =>
    requiredSkills.includes(skill)
  );

  const score = (matched.length / requiredSkills.length) * 100;

  return {
    score: Math.round(score),
    matchedSkills: matched,
    missingSkills: requiredSkills.filter(
      skill => !matched.includes(skill)
    )
  };
};