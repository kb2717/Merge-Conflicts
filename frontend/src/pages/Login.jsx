import { useState } from "react"
import AuthLayout from "../components/AuthLayout"
import { loginUser } from "../services/auth.service"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await loginUser(form)
      window.location.href = "/dashboard"
    } catch {
      alert("Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" placeholder="Email" className="input" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} required />

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl font-semibold">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  )
}