import MatchScoreBadge from "./MatchScoreBadge"
import DeadlineBadge from "./DeadlineBadge"

export default function OpportunityCard({ opportunity }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-indigo-500 transition">

      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{opportunity.title}</h3>
        {opportunity.matchScore !== undefined && (
          <MatchScoreBadge score={opportunity.matchScore} />
        )}
      </div>

      <p className="text-gray-400 mb-3">{opportunity.company}</p>

      {opportunity.deadline && (
        <DeadlineBadge deadline={opportunity.deadline} />
      )}

      {/* REQUIRED SKILLS */}
      {opportunity.requiredSkills?.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-400 mb-1">Required Skills</p>
          <div className="flex flex-wrap gap-2">
            {opportunity.requiredSkills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-gray-800 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* MISSING SKILLS */}
      {opportunity.missingSkills?.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-red-400 mb-1">Missing Skills</p>
          <div className="flex flex-wrap gap-2">
            {opportunity.missingSkills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-red-900/40 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl font-medium">
        Apply
      </button>
    </div>
  )
}