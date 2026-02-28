import { useEffect, useState } from "react"
import { getApplications } from "../services/application.service"

const columns = ["Saved", "Applied", "Interview", "Rejected", "Offer"]

export default function ApplicationBoard() {
  const [apps, setApps] = useState([])

  useEffect(() => {
    const load = async () => {
      const data = await getApplications()
      setApps(data)
    }
    load()
  }, [])

  return (
    <div className="grid grid-cols-5 gap-4">
      {columns.map((col) => (
        <div key={col} className="bg-gray-900 p-4 rounded-xl">
          <h3 className="font-semibold mb-3">{col}</h3>

          <div className="space-y-2">
            {apps
              .filter((a) => a.status === col)
              .map((a) => (
                <div key={a._id} className="bg-gray-800 p-3 rounded-lg text-sm">
                  {a.opportunityTitle}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}