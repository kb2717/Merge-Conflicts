const calculateUrgencyScore = (deadline) => {
  const hoursLeft =
    (new Date(deadline) - new Date()) / (1000 * 60 * 60);

  if (hoursLeft < 24) return 15;
  if (hoursLeft < 72) return 8;
  return 0;
};

export default calculateUrgencyScore;