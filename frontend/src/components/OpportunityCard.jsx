export default function OpportunityCard({ opportunity, onApplyToggle }) {
  const isApplied = opportunity.status === "applied"

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div>

        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">
            {opportunity.title}
          </h2>

          <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-medium">
            {opportunity.matchScore}%
          </span>
        </div>

        <p className="text-gray-400 mb-1">
          {opportunity.company}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          Deadline: {opportunity.deadline}
        </p>

        <div className="flex flex-wrap gap-2">
          {opportunity.requiredSkills?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-xs px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      {/* 🔥 APPLY / DE-APPLY BUTTON */}
      <button
        onClick={() => onApplyToggle(opportunity.id)}
        className={`mt-6 py-2 rounded-xl font-medium transition ${
          isApplied
            ? "bg-red-600 hover:bg-red-700"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isApplied ? "Cancel" : "Apply"}
      </button>

    </div>
  )
}