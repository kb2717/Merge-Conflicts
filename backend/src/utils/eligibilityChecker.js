module.exports = (user, opportunity) => {
  if (opportunity.minCgpa && user.cgpa < opportunity.minCgpa)
    return false;

  if (
    opportunity.allowedBranches &&
    !opportunity.allowedBranches.includes(user.branch)
  )
    return false;

  return true;
};