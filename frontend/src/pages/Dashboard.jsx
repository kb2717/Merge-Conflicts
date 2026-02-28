import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import OpportunityCard from "../components/OpportunityCard"
import { getOpportunities } from "../services/opportunity.service"

export default function Dashboard() {
  const [opportunities, setOpportunities] = useState([])

  useEffect(() => {
    const load = async () => {
      const data = await getOpportunities()
      setOpportunities(data)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      
      {/* TOP NAVBAR */}
      <Navbar />

      {/* BODY */}
      <div className="flex flex-1 w-full">

        {/* SIDEBAR — FIXED WIDTH */}
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>

        {/* MAIN CONTENT — FULL WIDTH */}
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((op) => (
              <OpportunityCard
                key={op._id || op.id}
                opportunity={op}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  )
}