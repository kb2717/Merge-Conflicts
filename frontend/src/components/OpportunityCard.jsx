import { useState } from "react"

export default function OpportunityCard({ opportunity, onApplyToggle }) {
  const isApplied = opportunity.status === "applied"
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setExpanded(true)}
        className="relative cursor-pointer bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 flex flex-col justify-between
        transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
      >
        <div>
          {/* TITLE */}
          <h2 className="text-lg font-semibold text-white mb-2">
            {opportunity.title}
          </h2>

          {/* MATCH SCORE BELOW TITLE */}
          <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs px-3 py-1 rounded-full font-bold mb-3 shadow-lg">
            {opportunity.matchScore}% Match
          </span>

          <p className="text-gray-400 mb-1">{opportunity.company}</p>

          <p className="text-sm text-gray-500 mb-4">
            Deadline: {opportunity.deadline}
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2">
            {opportunity.requiredSkills?.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700/60 border border-gray-600 text-xs px-3 py-1 rounded-lg text-gray-300 hover:bg-indigo-600/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onApplyToggle(opportunity.id)
          }}
          className={`mt-6 py-2 rounded-xl font-medium transition-all duration-300 ${
            isApplied
              ? "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/40"
              : "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/40"
          }`}
        >
          {isApplied ? "Applied!" : "Apply"}
        </button>
      </div>

      {/* EXPANDED MODAL */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setExpanded(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500/40 rounded-3xl p-8 w-[450px] shadow-[0_0_50px_rgba(99,102,241,0.7)] animate-scaleIn"
          >
            <h2 className="text-2xl font-bold mb-3">{opportunity.title}</h2>

            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              {opportunity.matchScore}% Match
            </span>

            <p className="text-gray-400 mt-4">{opportunity.company}</p>

            <p className="text-gray-500 mb-6">
              Deadline: {opportunity.deadline}
            </p>

            <button
              onClick={() => setExpanded(false)}
              className="mt-4 w-full bg-indigo-600 py-2 rounded-xl hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}