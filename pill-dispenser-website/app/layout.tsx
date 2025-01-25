import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arduino Pill Dispenser",
  description: "Smart pill dispenser using Arduino Uno R3, microservo motor, touch sensor, and alarm",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow bg-white bg-opacity-50 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-8">{children}</div>
          </div>
          <Footer />
        </div>
        <div className="fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </body>
    </html>
  )
}

