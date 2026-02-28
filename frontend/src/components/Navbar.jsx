import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkStyle =
    "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition"

  const activeStyle = "bg-indigo-600 text-white"
  const inactiveStyle =
    "text-gray-300 hover:text-white hover:bg-white/10"

  const links = ["dashboard", "add-opportunity", "login", "register"]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="logo-font text-2xl tracking-wider bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Opportunity OS
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SLIDING MENU */}
          <div
            className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ${open ? "max-w-[600px] opacity-100" : "max-w-0 opacity-0"
              }`}
          >
            {links.map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
              >
                {path.replace("-", " ").toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 cursor-pointer group"
          >
            <span className="w-7 h-[2px] bg-white transition-all duration-300 group-hover:w-8"></span>
            <span className="w-7 h-[2px] bg-white transition-all duration-300 group-hover:w-8"></span>
            <span className="w-7 h-[2px] bg-white transition-all duration-300 group-hover:w-8"></span>
          </button>

        </div>
      </div>
    </header>
  )
}