import formatDate from "../utils/formatDate";
import calculateUrgency from "../utils/calculateUrgency";

export default function DeadlineBadge({ deadline }) {
  if (!deadline) return null;

  const urgency = calculateUrgency(deadline);

  const color =
    urgency === "high"
      ? "text-red-500"
      : urgency === "medium"
      ? "text-yellow-500"
      : "text-gray-500";

  return (
    <p className={`text-sm mt-2 ${color}`}>
      Deadline: {formatDate(deadline)}
    </p>
  );
}