export default function Sidebar({ selectedFilter, onFilterChange }) {
  const filters = ["all", "internship", "fulltime"]

  const buttonStyle = (filter) =>
    `block w-full text-left px-3 py-2 rounded-lg transition ${
      selectedFilter === filter
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`

  return (
    <aside className="w-64 h-full bg-gray-900 border-r border-gray-800 p-6 flex-shrink-0">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="space-y-2">
        <button
          className={buttonStyle("all")}
          onClick={() => onFilterChange("all")}
        >
          All Opportunities
        </button>

        <button
          className={buttonStyle("internship")}
          onClick={() => onFilterChange("internship")}
        >
          Internships
        </button>

        <button
          className={buttonStyle("fulltime")}
          onClick={() => onFilterChange("fulltime")}
        >
          Full Time
        </button>
      </div>
    </aside>
  )
}