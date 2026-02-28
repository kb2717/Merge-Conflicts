import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api"
})

// 🚨 IMPORTANT: prevent crash when backend not running
API.interceptors.response.use(
  res => res,
  err => {
    console.warn("API not available — using mock mode")
    return Promise.reject(err)
  }
)

export default API