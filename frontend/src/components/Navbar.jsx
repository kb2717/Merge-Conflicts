import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkStyle =
    "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"

  const activeStyle = "bg-blue-600 text-white"
  const inactiveStyle =
    "text-gray-300 hover:text-white hover:bg-gray-800"

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800 w-full">
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-blue-500">
          Opportunity OS
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/add-opportunity"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Add Opportunity
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  )
}