import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    cgpa: "",
    skills: "",
    interests: "",
    careerGoal: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    alert("Account Created (Mock)")
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-2xl text-white">

        <h1 className="text-3xl font-bold mb-2">
          Create Your Profile
        </h1>

        <p className="text-gray-400 mb-8">
          Build your student profile to receive personalized opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-style"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="input-style"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="input-style"
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch (e.g., CSE, ECE)"
              value={form.branch}
              onChange={handleChange}
              required
              className="input-style"
            />

            <input
              type="number"
              name="year"
              placeholder="Year (1-4)"
              value={form.year}
              onChange={handleChange}
              required
              className="input-style"
            />

            <input
              type="number"
              step="0.01"
              name="cgpa"
              placeholder="CGPA"
              value={form.cgpa}
              onChange={handleChange}
              required
              className="input-style"
            />

          </div>

          {/* Skills */}
          <textarea
            name="skills"
            placeholder="Skills (comma separated: React, Python, ML)"
            value={form.skills}
            onChange={handleChange}
            required
            className="input-style h-24"
          />

          {/* Interests */}
          <textarea
            name="interests"
            placeholder="Interests (e.g., AI Research, Web Dev, FinTech)"
            value={form.interests}
            onChange={handleChange}
            className="input-style h-24"
          />

          {/* Career Goal */}
          <textarea
            name="careerGoal"
            placeholder="Career Goal (optional)"
            value={form.careerGoal}
            onChange={handleChange}
            className="input-style h-24"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}