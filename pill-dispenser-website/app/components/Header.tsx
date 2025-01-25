import Link from "next/link"
import { Cpu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-blue-200 transition-colors">
          <Cpu size={32} />
          <span>Arduino Smart Dispenser</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/components" className="hover:text-blue-200 transition-colors">
                Components
              </Link>
            </li>
            <li>
              <Link href="/schedules" className="hover:text-blue-200 transition-colors">
                Schedules
              </Link>
            </li>
            <li>
              <Link href="/instructions" className="hover:text-blue-200 transition-colors">
                Instructions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

