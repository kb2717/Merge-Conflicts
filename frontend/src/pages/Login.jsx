import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Login Successful (Mock)")
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-10 shadow-2xl text-white">

        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400 mb-8">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}