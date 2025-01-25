import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Cpu, Zap } from "lucide-react"

export default function ProjectOverview() {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="text-3xl">Arduino-based Smart Dispenser</CardTitle>
        <CardDescription className="text-blue-100">Automated dispensing with precision timing</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="mb-4">
          This project showcases an Arduino Uno R3-based smart dispenser, integrating a microservo motor, touch sensor,
          and alarm system. It demonstrates the capabilities of microcontroller-based automation and sensor integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <FeatureCard
            icon={<Clock size={24} />}
            title="Precise Timing"
            description="Customizable dispensing intervals using Arduino's timing functions"
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Touch Activated"
            description="Utilizes a touch sensor for user interaction and dispensing activation"
          />
          <FeatureCard
            icon={<Cpu size={24} />}
            title="Arduino Powered"
            description="Leverages the versatility and reliability of the Arduino platform"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

