import extractSkills from "../utils/skillExtractor.js";

const process = async ({ text }) => {
  return extractSkills(text);
};

export default { process };