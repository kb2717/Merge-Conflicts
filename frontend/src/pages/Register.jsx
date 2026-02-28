import { useState } from "react"
import AuthLayout from "../components/AuthLayout"
import { registerUser } from "../services/auth.service"

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
    resume: null,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key])
      })

      await registerUser(formData)
      alert("🎉 Registration successful!")
      window.location.href = "/login"
    } catch (err) {
      console.error(err)
      alert("❌ Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create Student Profile">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* BASIC INFO */}
        <input name="name" placeholder="Full Name" className="input" onChange={handleChange} required />
        <input name="email" placeholder="Email" className="input" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} required />

        {/* ACADEMIC */}
        <select name="branch" className="input" onChange={handleChange} required>
          <option value="">Select Branch</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>ME</option>
          <option>CE</option>
        </select>

        <select name="year" className="input" onChange={handleChange} required>
          <option value="">Select Year</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <input
          name="cgpa"
          type="number"
          step="0.01"
          placeholder="CGPA"
          className="input"
          onChange={handleChange}
          required
        />

        {/* SKILLS */}
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          className="input"
          onChange={handleChange}
        />

        <input
          name="interests"
          placeholder="Interests"
          className="input"
          onChange={handleChange}
        />

        <input
          name="careerGoal"
          placeholder="Career Goal"
          className="input"
          onChange={handleChange}
        />

        {/* RESUME */}
        <div className="text-sm text-gray-400">
          Upload Resume (PDF)
        </div>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          className="block w-full text-sm"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl font-semibold transition"
        >
          {loading ? "Creating Profile..." : "Create Profile"}
        </button>
      </form>
    </AuthLayout>
  )
}