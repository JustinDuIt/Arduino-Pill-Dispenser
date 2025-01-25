import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CodeModal from "./CodeModal"

export default function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCode, setSelectedCode] = useState("")

  const schedules = [
    {
      interval: "3 hours",
      code: `#include <Servo.h> // Include the Servo library

// Pin Definitions
int FSR = A0; // FSR connected to analog pin A0
int buzzer = 8; // Passive buzzer connected to digital pin 8
Servo servo; // Create a servo object

// Constants and Variables
int fsrThreshold = 600; // Adjust this based on FSR sensitivity
bool alarmOn = false; // Alarm state
unsigned long lastAlarmTime = 0; 
const unsigned long alarmInterval = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

// Für Elise Melody and Durations
int melody[] = { 659, 622, 659, 622, 659, 494, 587, 523, 440, 440, 523, 659, 440, 523, 494 }; 
int noteDurations[] = { 200, 200, 200, 200, 200, 200, 200, 200, 400, 200, 200, 400, 200, 200, 400 }; 

void setup() {
 pinMode(FSR, INPUT); // FSR as input
 servo.attach(10); // Attach servo to pin 10
 servo.write(0); // Initialize servo position (0 degrees)
 Serial.begin(9600); // Start serial communication
}

void loop() {
 unsigned long currentTime = millis(); 
 
 // Trigger alarm every 3 hours
 if (currentTime - lastAlarmTime >= alarmInterval) {
   alarmOn = true;
   lastAlarmTime = currentTime;
   startAlarm(); // Start playing the melody
   Serial.println("Alarm is ON! Touch the FSR to stop it.");
 }

 // Check FSR state when the alarm is on
 if (alarmOn) {
   int fsrValue = analogRead(FSR); // Read the FSR value
   Serial.print("FSR Value: ");
   Serial.println(fsrValue);
   
   // Stop the alarm if FSR is touched
   if (fsrValue > fsrThreshold) {
     alarmOn = false;
     stopAlarm(); // Stop the buzzer sound
     Serial.println("Alarm stopped. Dispensing pill...");
     
     // Activate servo to dispense pill
     servo.write(50); // Rotate servo to 60 degrees
     delay(100); // Hold for a shorter time
     servo.write(0); // Reset servo to 0 degrees quickly
     Serial.println("Pill dispensed.");
   }
 }
 
 delay(100); // Small delay for stability
}

// Function to play the "Für Elise" melody on repeat
void startAlarm() {
 while (alarmOn) {
   // Keep playing the melody as long as the alarm is active
   for (int i = 0; i < sizeof(melody) / sizeof(melody[0]); i++) {
     int noteDuration = noteDurations[i];
     tone(buzzer, melody[i], noteDuration);
     delay(noteDuration * 1.3); // Pause between notes
     
     // Check if the FSR is pressed during the melody
     int fsrValue = analogRead(FSR);
     if (fsrValue > fsrThreshold) {
       alarmOn = false; // Stop the alarm
       stopAlarm(); // Stop the buzzer
       Serial.println("Alarm stopped. Dispensing pill...");
       
       // Activate servo to dispense pill
       servo.write(65); // Rotate servo to 60 degrees
       delay(200); // Hold for a shorter time
       servo.write(0); // Reset servo to 0 degrees quickly
       Serial.println("Pill dispensed.");
       return; // Exit the melody loop
     }
   }
 }
}

// Function to stop the buzzer alarm
void stopAlarm() {
 noTone(buzzer); // Stop the tone on the buzzer
}`,
    },
    {
      interval: "6 hours",
      code: `#include <Servo.h> // Include the Servo library

// Pin Definitions
int FSR = A0; // FSR connected to analog pin A0
int buzzer = 8; // Passive buzzer connected to digital pin 8
Servo servo; // Create a servo object

// Constants and Variables
int fsrThreshold = 600; // Adjust this based on FSR sensitivity
bool alarmOn = false; // Alarm state
unsigned long lastAlarmTime = 0; 
const unsigned long alarmInterval = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// Für Elise Melody and Durations
int melody[] = { 659, 622, 659, 622, 659, 494, 587, 523, 440, 440, 523, 659, 440, 523, 494 }; 
int noteDurations[] = { 200, 200, 200, 200, 200, 200, 200, 200, 400, 200, 200, 400, 200, 200, 400 }; 

void setup() {
 pinMode(FSR, INPUT); // FSR as input
 servo.attach(10); // Attach servo to pin 10
 servo.write(0); // Initialize servo position (0 degrees)
 Serial.begin(9600); // Start serial communication
}

void loop() {
 unsigned long currentTime = millis(); 
 
 // Trigger alarm every 6 hours
 if (currentTime - lastAlarmTime >= alarmInterval) {
   alarmOn = true;
   lastAlarmTime = currentTime;
   startAlarm(); // Start playing the melody
   Serial.println("Alarm is ON! Touch the FSR to stop it.");
 }

 // Check FSR state when the alarm is on
 if (alarmOn) {
   int fsrValue = analogRead(FSR); // Read the FSR value
   Serial.print("FSR Value: ");
   Serial.println(fsrValue);
   
   // Stop the alarm if FSR is touched
   if (fsrValue > fsrThreshold) {
     alarmOn = false;
     stopAlarm(); // Stop the buzzer sound
     Serial.println("Alarm stopped. Dispensing pill...");
     
     // Activate servo to dispense pill
     servo.write(50); // Rotate servo to 60 degrees
     delay(100); // Hold for a shorter time
     servo.write(0); // Reset servo to 0 degrees quickly
     Serial.println("Pill dispensed.");
   }
 }
 
 delay(100); // Small delay for stability
}

// Function to play the "Für Elise" melody on repeat
void startAlarm() {
 while (alarmOn) {
   // Keep playing the melody as long as the alarm is active
   for (int i = 0; i < sizeof(melody) / sizeof(melody[0]); i++) {
     int noteDuration = noteDurations[i];
     tone(buzzer, melody[i], noteDuration);
     delay(noteDuration * 1.3); // Pause between notes
     
     // Check if the FSR is pressed during the melody
     int fsrValue = analogRead(FSR);
     if (fsrValue > fsrThreshold) {
       alarmOn = false; // Stop the alarm
       stopAlarm(); // Stop the buzzer
       Serial.println("Alarm stopped. Dispensing pill...");
       
       // Activate servo to dispense pill
       servo.write(65); // Rotate servo to 60 degrees
       delay(200); // Hold for a shorter time
       servo.write(0); // Reset servo to 0 degrees quickly
       Serial.println("Pill dispensed.");
       return; // Exit the melody loop
     }
   }
 }
}

// Function to stop the buzzer alarm
void stopAlarm() {
 noTone(buzzer); // Stop the tone on the buzzer
}`,
    },
    {
      interval: "12 hours",
      code: `#include <Servo.h> // Include the Servo library

// Pin Definitions
int FSR = A0; // FSR connected to analog pin A0
int buzzer = 8; // Passive buzzer connected to digital pin 8
Servo servo; // Create a servo object

// Constants and Variables
int fsrThreshold = 600; // Adjust this based on FSR sensitivity
bool alarmOn = false; // Alarm state
unsigned long lastAlarmTime = 0; 
const unsigned long alarmInterval = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

// Für Elise Melody and Durations
int melody[] = { 659, 622, 659, 622, 659, 494, 587, 523, 440, 440, 523, 659, 440, 523, 494 }; 
int noteDurations[] = { 200, 200, 200, 200, 200, 200, 200, 200, 400, 200, 200, 400, 200, 200, 400 }; 

void setup() {
 pinMode(FSR, INPUT); // FSR as input
 servo.attach(10); // Attach servo to pin 10
 servo.write(0); // Initialize servo position (0 degrees)
 Serial.begin(9600); // Start serial communication
}

void loop() {
 unsigned long currentTime = millis(); 
 
 // Trigger alarm every 12 hours
 if (currentTime - lastAlarmTime >= alarmInterval) {
   alarmOn = true;
   lastAlarmTime = currentTime;
   startAlarm(); // Start playing the melody
   Serial.println("Alarm is ON! Touch the FSR to stop it.");
 }

 // Check FSR state when the alarm is on
 if (alarmOn) {
   int fsrValue = analogRead(FSR); // Read the FSR value
   Serial.print("FSR Value: ");
   Serial.println(fsrValue);
   
   // Stop the alarm if FSR is touched
   if (fsrValue > fsrThreshold) {
     alarmOn = false;
     stopAlarm(); // Stop the buzzer sound
     Serial.println("Alarm stopped. Dispensing pill...");
     
     // Activate servo to dispense pill
     servo.write(50); // Rotate servo to 60 degrees
     delay(100); // Hold for a shorter time
     servo.write(0); // Reset servo to 0 degrees quickly
     Serial.println("Pill dispensed.");
   }
 }
 
 delay(100); // Small delay for stability
}

// Function to play the "Für Elise" melody on repeat
void startAlarm() {
 while (alarmOn) {
   // Keep playing the melody as long as the alarm is active
   for (int i = 0; i < sizeof(melody) / sizeof(melody[0]); i++) {
     int noteDuration = noteDurations[i];
     tone(buzzer, melody[i], noteDuration);
     delay(noteDuration * 1.3); // Pause between notes
     
     // Check if the FSR is pressed during the melody
     int fsrValue = analogRead(FSR);
     if (fsrValue > fsrThreshold) {
       alarmOn = false; // Stop the alarm
       stopAlarm(); // Stop the buzzer
       Serial.println("Alarm stopped. Dispensing pill...");
       
       // Activate servo to dispense pill
       servo.write(65); // Rotate servo to 60 degrees
       delay(200); // Hold for a shorter time
       servo.write(0); // Reset servo to 0 degrees quickly
       Serial.println("Pill dispensed.");
       return; // Exit the melody loop
     }
   }
 }
}

// Function to stop the buzzer alarm
void stopAlarm() {
 noTone(buzzer); // Stop the tone on the buzzer
}`,
    },
  ]

  const handleViewCode = (code: string) => {
    setSelectedCode(code)
    setIsModalOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dispensing Schedules</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          You can modify the pill dispenser to work on different schedules. Click the buttons below to view the Arduino
          code for each schedule:
        </p>
        <div className="space-y-2">
          {schedules.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>Every {schedule.interval}</span>
              <Button onClick={() => handleViewCode(schedule.code)}>View Code</Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} code={selectedCode} />
    </Card>
  )
}

