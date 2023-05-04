#include <Servo.h>
#include <Stepper.h>

// Pins entered in sequence IN1-IN3-IN2-IN4
Stepper stepper_Hori = Stepper(stepsPerRevolution, 8, 10, 9, 11);
Servo servo;  // servo object

// variables
int pos = 0;    // servo position
const int oneFullRevolution = 2038; // number of steps for 1 full revolution

// pin setup
void setup() {
  servo.attach(12);
}

// ------------- MAIN -------------
void loop() {

  //------------- STEPPER CODE -------------
  // CW is negative, CWW is positive
	stepper_Hori.setSpeed(10);
	stepper_Hori.step(-oneFullRevolution);
	delay(1000);

  //------------- SERVO CODE -------------
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    servo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    servo.write(pos);
    delay(15);
  }
}