import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0"> Arduino Pill Dispenser Project. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/JustinDuIt/Arduino-Pill-Dispenser" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

