
const content = `# M42 - Set Pin State
## Set an analog or digital pin to a specified state.
### Usage
\`\`\`plaintext
 M42  [I<bool>] [M<0|1|2|3>] [P<pin>] S<state>
\`\`\`

- \`[I<bool>]\`: Ignore protection on pins that Marlin is using.
- \`[M<0|1|2|3>]\`: 
  - \`M0\`: '\`INPUT\`'
  - \`M1\`: '\`OUTPUT\`'
  - \`M2\`: '\`INPUT_PULLUP\`'
  - \`M3\`: '\`INPUT_PULLDOWN\`'

- \`[P<pin>]\`: A digital pin number (even for analog pins) to write to. (\`LED_PIN\` if omitted)
- \`S<state>\`: The state to set. PWM pins may be set from 0-255.

### Description

For custom hardware not officially supported in Marlin, you can often just connect up an unused pin and use [M42](https://marlinfw.org/docs/gcode/M042.html) to control it.


### Notes

parameters:
-
    tag: I
    optional: true
    since: 1.1.9.1
    description: Ignore protection on pins that Marlin is using.
    values:
-
        type: bool
-
    tag: M
    optional: true
    since: 2.0.5.2
    description: Set the pin mode.
    values:
-
        tag: 0
        description: '\`INPUT\`'
-
        tag: 1
        description: '\`OUTPUT\`'
-
        tag: 2
        description: '\`INPUT_PULLUP\`'
-
        tag: 3
        description: '\`INPUT_PULLDOWN\`'
-
    tag: P
    optional: true
    description: A digital pin number (even for analog pins) to write to. (\`LED_PIN\` if omitted)
    values:
-
        tag: pin
        type: int
-
    tag: S
    optional: false
    description: The state to set. PWM pins may be set from 0-255.
    values:
-
        tag: state
        type: int

### Examples
Turn the LED pin on
\`\`\`gcode
 M42 S1
  
\`\`\`
Turn on pin 33
\`\`\`gcode
 M42 P33 S1
  
\`\`\`
Set pin 44 to do PWM with 50% DC
\`\`\`gcode
 M42 P44 S128
\`\`\`
`;

export default content;
