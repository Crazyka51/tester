import Link from "next/link"
import { Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} / Matěj Hrabák / Build by UI
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:matej@example.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

