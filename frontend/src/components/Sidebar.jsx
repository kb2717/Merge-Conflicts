export default function Sidebar({ activeFilter, setActiveFilter }) {
  const filters = [
    { label: "All Opportunities", value: "all" },
    { label: "Internships", value: "internship" },
    { label: "Fellowships", value: "fellowship" },
    { label: "Hackathons", value: "hackathon" },
    { label: "Scholarships", value: "scholarship" },
  ]

  return (
    <aside className="h-full bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 p-8">

      <h2 className="text-xl font-semibold mb-8 tracking-wide">
        Filters
      </h2>

      <div className="space-y-4">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`w-full text-left px-5 py-3 rounded-2xl transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-indigo-600 tech-font text-white shadow-lg shadow-indigo-600/30"
                : "bg-gray-800 tech-font text-gray-300 hover:bg-gray-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

    </aside>
  )
}