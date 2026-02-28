import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { createOpportunity } from "../services/opportunity.service"

export default function AddOpportunity() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    requiredSkills: "",
    preferredSkills: "",
    eligibleBranches: "",
    minCgpa: "",
    deadline: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // convert comma strings → arrays
      const payload = {
        ...form,
        requiredSkills: form.requiredSkills.split(",").map(s => s.trim()),
        preferredSkills: form.preferredSkills.split(",").map(s => s.trim()),
        eligibleBranches: form.eligibleBranches.split(",").map(s => s.trim()),
      }

      await createOpportunity(payload)

      alert("✅ Opportunity added successfully!")

      // reset form
      setForm({
        title: "",
        company: "",
        description: "",
        requiredSkills: "",
        preferredSkills: "",
        eligibleBranches: "",
        minCgpa: "",
        deadline: "",
      })
    } catch (err) {
      console.error(err)
      alert("❌ Failed to add opportunity")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <div className="flex flex-1 w-full">
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>

        {/* MAIN */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">
            Add Opportunity
          </h1>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl space-y-4"
          >
            <input
              name="title"
              placeholder="Role Title"
              value={form.title}
              onChange={handleChange}
              className="input"
              required
            />

            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="input"
              required
            />

            <textarea
              name="description"
              placeholder="Job Description"
              value={form.description}
              onChange={handleChange}
              className="input min-h-[120px]"
              required
            />

            <input
              name="requiredSkills"
              placeholder="Required Skills (comma separated)"
              value={form.requiredSkills}
              onChange={handleChange}
              className="input"
            />

            <input
              name="preferredSkills"
              placeholder="Preferred Skills (comma separated)"
              value={form.preferredSkills}
              onChange={handleChange}
              className="input"
            />

            <input
              name="eligibleBranches"
              placeholder="Eligible Branches (CSE, IT...)"
              value={form.eligibleBranches}
              onChange={handleChange}
              className="input"
            />

            <input
              type="number"
              step="0.01"
              name="minCgpa"
              placeholder="Minimum CGPA"
              value={form.minCgpa}
              onChange={handleChange}
              className="input"
            />

            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              className="input"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl font-semibold transition"
            >
              {loading ? "Adding..." : "Add Opportunity"}
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}