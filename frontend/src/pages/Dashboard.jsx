import { useEffect, useState, useMemo } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import OpportunityCard from "../components/OpportunityCard"
import { getOpportunities } from "../services/opportunity.service"

export default function Dashboard() {
  const [opportunities, setOpportunities] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const load = async () => {
      const data = await getOpportunities()
      setOpportunities(data)
    }
    load()
  }, [])

  // 🔥 Toggle Apply / De-Apply
  const handleApplyToggle = (id) => {
    setOpportunities((prev) =>
      prev.map((op) =>
        op.id === id
          ? {
              ...op,
              status: op.status === "applied" ? "saved" : "applied",
            }
          : op
      )
    )
  }

  const filteredOpportunities = useMemo(() => {
    if (activeFilter === "all") return opportunities
    return opportunities.filter((op) => op.type === activeFilter)
  }, [opportunities, activeFilter])

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-72 flex-shrink-0">
          <Sidebar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        <main className="flex-1 px-12 py-10 overflow-auto">

          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold">Dashboard</h1>

            <div className="bg-gray-900 px-5 py-2 rounded-xl border border-gray-800 text-sm text-gray-300">
              Total: {filteredOpportunities.length}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredOpportunities.map((op) => (
              <OpportunityCard
                key={op.id}
                opportunity={op}
                onApplyToggle={handleApplyToggle}
              />
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}