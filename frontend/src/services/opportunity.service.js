// 🔥 Toggle this when backend is ready
const USE_MOCK = true

// ==============================
// 🚀 MOCK DATA
// ==============================
const mockOpportunities = [
  {
    id: 1,
    title: "Frontend Intern",
    company: "Google",
    description: "Work on modern React applications.",
    requiredSkills: ["React", "JavaScript"],
    preferredSkills: ["Tailwind"],
    eligibleBranches: ["CSE", "IT"],
    minCgpa: 7,
    deadline: "2026-03-15",
    matchScore: 82,
    status: "saved",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Microsoft",
    description: "Build scalable UI systems.",
    requiredSkills: ["React", "Redux"],
    preferredSkills: ["TypeScript"],
    eligibleBranches: ["CSE"],
    minCgpa: 7.5,
    deadline: "2026-03-22",
    matchScore: 76,
    status: "applied",
  },
  {
    id: 3,
    title: "Full Stack Intern",
    company: "Amazon",
    description: "Work across MERN stack.",
    requiredSkills: ["Node", "React"],
    preferredSkills: ["MongoDB"],
    eligibleBranches: ["CSE", "IT", "ECE"],
    minCgpa: 8,
    deadline: "2026-03-30",
    matchScore: 91,
    status: "interview",
  },
]

// ==============================
// 📥 GET OPPORTUNITIES
// ==============================
export const getOpportunities = async () => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockOpportunities), 400)
    })
  }

  // 🔌 REAL BACKEND (future)
  const { default: api } = await import("./api")
  const res = await api.get("/opportunities")
  return res.data
}

// ==============================
// ➕ CREATE OPPORTUNITY
// ==============================
export const createOpportunity = async (data) => {
  if (USE_MOCK) {
    const newOpportunity = {
      id: Date.now(),
      matchScore: Math.floor(Math.random() * 40) + 60,
      status: "saved",
      ...data,
    }

    mockOpportunities.unshift(newOpportunity)

    return new Promise((resolve) => {
      setTimeout(() => resolve(newOpportunity), 400)
    })
  }

  // 🔌 REAL BACKEND
  const { default: api } = await import("./api")
  const res = await api.post("/opportunities", data)
  return res.data
}

// ==============================
// ✏️ UPDATE (future ready)
// ==============================
export const updateOpportunity = async (id, data) => {
  if (USE_MOCK) {
    const index = mockOpportunities.findIndex((o) => o.id === id)
    if (index !== -1) {
      mockOpportunities[index] = { ...mockOpportunities[index], ...data }
    }

    return mockOpportunities[index]
  }

  const { default: api } = await import("./api")
  const res = await api.put(`/opportunities/${id}`, data)
  return res.data
}

// ==============================
// 🗑 DELETE (future ready)
// ==============================
export const deleteOpportunity = async (id) => {
  if (USE_MOCK) {
    const index = mockOpportunities.findIndex((o) => o.id === id)
    if (index !== -1) mockOpportunities.splice(index, 1)
    return true
  }

  const { default: api } = await import("./api")
  await api.delete(`/opportunities/${id}`)
  return true
}