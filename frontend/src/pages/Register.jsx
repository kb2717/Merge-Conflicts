import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../services/auth.service"

export default function Register() {
  const navigate = useNavigate()

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

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const data = await registerUser(form)

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
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

        {error && (
          <div className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

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
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              className="input-style"
            />

            <input
              type="number"
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleChange}
              className="input-style"
            />

            <input
              type="number"
              step="0.01"
              name="cgpa"
              placeholder="CGPA"
              value={form.cgpa}
              onChange={handleChange}
              className="input-style"
            />

          </div>

          <textarea
            name="skills"
            placeholder="Skills"
            value={form.skills}
            onChange={handleChange}
            className="input-style h-24"
          />

          <textarea
            name="interests"
            placeholder="Interests"
            value={form.interests}
            onChange={handleChange}
            className="input-style h-24"
          />

          <textarea
            name="careerGoal"
            placeholder="Career Goal"
            value={form.careerGoal}
            onChange={handleChange}
            className="input-style h-24"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Creating..." : "Create Account"}
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