// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Login from "../pages/Login"
// import Register from "../pages/Register"
// import Dashboard from "../pages/Dashboard"
// import AddOpportunity from "../pages/AddOpportunity"
// import NotFound from "../pages/NotFound"

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/add-opportunity" element={<AddOpportunity />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import AddOpportunity from "../pages/AddOpportunity"
import NotFound from "../pages/NotFound"
import ProtectedRoute from "../components/ProtectedRoute"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-opportunity"
          element={
            <ProtectedRoute>
              <AddOpportunity />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}