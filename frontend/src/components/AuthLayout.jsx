import Navbar from "./Navbar"

export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}