const extractSkills = require("./skillExtractor");

module.exports = (resumeText) => {
  return extractSkills(resumeText);
};