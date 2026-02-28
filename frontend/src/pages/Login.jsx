import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../services/auth.service"

export default function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" })
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
      const data = await loginUser(form)

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-10 shadow-2xl text-white">

        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 tech-font mb-8">
          Login to access your dashboard
        </p>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full tech-font bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full tech-font bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full tech-font bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-gray-400 tech-font text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}