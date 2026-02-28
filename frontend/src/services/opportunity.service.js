export const getOpportunities = async () => {
  const types = ["internship", "fellowship", "hackathon", "scholarship"]

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "IBM",
    "TCS",
    "Infosys",
    "Meta",
    "Tesla",
    "OpenAI"
  ]

  const titles = {
    internship: "Software Engineering Intern",
    fellowship: "Tech Fellowship Program",
    hackathon: "National Hackathon",
    scholarship: "Merit Scholarship Award"
  }

  const skillsPool = [
    "React",
    "Node",
    "MongoDB",
    "Python",
    "Machine Learning",
    "Leadership",
    "Teamwork"
  ]

  const data = []
  let id = 1

  types.forEach((type) => {
    for (let i = 0; i < 6; i++) {
      data.push({
        id: id++,
        title: `${titles[type]} ${i + 1}`,
        company:
          companies[Math.floor(Math.random() * companies.length)],
        deadline: `2026-0${Math.floor(Math.random() * 4) + 3}-${Math.floor(Math.random() * 20) + 10}`,
        matchScore: Math.floor(Math.random() * 40) + 60,
        status: "saved",
        type: type,
        requiredSkills: skillsPool.slice(
          0,
          Math.floor(Math.random() * 4) + 1
        ),
      })
    }
  })

  return data
}