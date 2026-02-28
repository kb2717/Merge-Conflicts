export default function calculateUrgency(deadline) {
  if (!deadline) return "low";

  const days =
    (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24);

  if (days <= 3) return "high";
  if (days <= 7) return "medium";
  return "low";
}