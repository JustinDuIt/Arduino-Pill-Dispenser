import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InstructionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Instructions</h1>
      <Card>
        <CardHeader>
          <CardTitle>How to Use the Pill Dispenser</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Adjust the Code:</strong> Use the Arduino IDE to modify the code according to your desired
              schedule. You can find the code for different schedules in the "Schedules" section of this website.
            </li>
            <li>
              <strong>Upload the Code:</strong> Connect your Arduino Uno R3 to your computer and upload the adjusted
              code using the Arduino IDE.
            </li>
            <li>
              <strong>Power the Device:</strong> To run the pill dispenser continuously, connect the 9V battery cable to
              the Arduino's power input.
            </li>
            <li>
              <strong>Test the Device:</strong> Ensure that the alarm sounds at the scheduled time and that the servo
              motor turns when the touch sensor is activated.
            </li>
            <li>
              <strong>Regular Maintenance:</strong> Periodically check the battery level and refill the pill compartment
              as needed.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

