"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, FileText, Image } from "lucide-react"

const navItems = [
  { name: "Domů", path: "/", icon: <Home className="h-4 w-4" /> },
  { name: "O mně", path: "/o-mne", icon: <User className="h-4 w-4" /> },
  { name: "Služby", path: "/sluzby", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Blog", path: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Galerie", path: "/galerie", icon: <Image className="h-4 w-4" /> },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <nav className="bg-[#1a1a2e]/60 backdrop-blur-md rounded-full px-2 py-1.5">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm transition-colors ${pathname === item.path
                        ? "bg-red-600/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

