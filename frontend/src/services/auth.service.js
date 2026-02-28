// import api from "./api";

// export const loginUser = async (data) => {
//   const res = await api.post("/auth/login", data);
//   return res.data;
// };

// export const registerUser = async (data) => {
//   const res = await api.post("/auth/register", data);
//   return res.data;
// };

// export const getCurrentUser = async () => {
//   const res = await api.get("/auth/me");
//   return res.data;
// };
import api from "./api"

/* REGISTER */
export const registerUser = async (formData) => {
  const response = await api.post("/auth/register", {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  })

  return response.data
}

/* LOGIN */
export const loginUser = async (formData) => {
  const response = await api.post("/auth/login", {
    email: formData.email,
    password: formData.password,
  })

  return response.data
}

/* GET CURRENT USER (from localStorage) */
export const getCurrentUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

/* LOGOUT */
export const logoutUser = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}