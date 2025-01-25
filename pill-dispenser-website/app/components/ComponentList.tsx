import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComponentList() {
  const components = [
    "Arduino Uno R3",
    "Microservo Motor",
    "Touch Sensor",
    "Alarm (Buzzer)",
    "Breadboard",
    "Jumper Wires",
    "Resistors",
    "Power Supply",
    "3D Printed Cover",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Components Used</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {components.map((component, index) => (
            <li key={index} className="mb-2">
              {component}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

