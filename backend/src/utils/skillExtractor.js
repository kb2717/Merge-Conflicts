const SKILLS = require("../constants/skills");

module.exports = (text) => {
  const lowerText = text.toLowerCase();
  return SKILLS.filter(skill => lowerText.includes(skill));
};