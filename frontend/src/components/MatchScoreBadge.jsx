export default function MatchScoreBadge({ score }) {
  if (!score) return null;

  return (
    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
      Match: {score}%
    </span>
  );
}