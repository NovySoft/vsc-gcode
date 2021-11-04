
const content = `# M112 - Emergency Stop
## Shut everything down and halt the machine.
### Usage
\`\`\`plaintext
 M112 
\`\`\`


### Description

Used for emergency stopping, [M112](https://marlinfw.org/docs/gcode/M112.html) shuts down the machine, turns off all the steppers and heaters, and if possible, turns off the power supply. A reset is required to return to operational mode.


### Examples
Shut down now!
\`\`\`gcode
 M112
\`\`\`
`;

export default content;
