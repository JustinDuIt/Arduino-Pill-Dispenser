# Automated Pill Dispenser

## Overview
An Arduino-based pill dispenser that uses a Force-Sensitive Resistor (FSR) and servo motor to manage medication scheduling with a musical alarm.

## Features
- Alarm triggers every 12 hours
- "Für Elise" melody alarm
- FSR-based pill confirmation
- Servo-powered pill dispensing
- Serial monitoring of system status

## Hardware Requirements
- Arduino board
- Servo motor
- Force-Sensitive Resistor (FSR)
- Passive buzzer
- Breadboard and jumper wires

## Pin Configuration
- FSR: Analog Pin A0
- Buzzer: Digital Pin 8
- Servo: Digital Pin 10

## Customization
Easily modify:
- Alarm interval (currently set to 12 hours)
- FSR sensitivity threshold
- Servo rotation angles

## Alarm Mechanism
1. Plays "Für Elise" melody
2. Waits for FSR touch to confirm
3. Dispenses pill upon confirmation

## Troubleshooting
- Check wire connections
- Verify FSR threshold
- Monitor Serial output for diagnostic information

## Note
Adjust code parameters to match specific medication schedules and hardware setup.
