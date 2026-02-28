import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

// Connect to database
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend Running Successfully")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`)
})