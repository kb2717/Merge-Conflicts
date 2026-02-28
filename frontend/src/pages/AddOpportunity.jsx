import { useState } from "react"
import Navbar from "../components/Navbar"

export default function AddOpportunity() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    deadline: "",
    type: "internship",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Opportunity Added (Mock)")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-10 shadow-2xl">

          <h1 className="text-3xl font-bold mb-2">
            Add Opportunity
          </h1>
          <p className="text-gray-400 tech-font mb-8">
            Create a new internship, fellowship, hackathon, or scholarship.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="tech-font block text-sm mb-2 text-gray-300">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="tech-font block text-sm mb-2 text-gray-300">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full tech-font bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className=" tech-font block text-sm mb-2 text-gray-300">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                required
                className="w-full tech-font bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className=" tech-font block text-sm mb-2 text-gray-300">
                Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full tech-font bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="internship">Internship</option>
                <option value="fellowship">Fellowship</option>
                <option value="hackathon">Hackathon</option>
                <option value="scholarship">Scholarship</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full tech-font bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold transition"
            >
              Add Opportunity
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}