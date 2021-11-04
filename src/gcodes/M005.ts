
const content = `# M5 - Spindle / Laser Off
## Turn off spindle or laser
### Usage
\`\`\`plaintext
 M5 
\`\`\`


### Description

Wait for moves to complete, then turn off the spindle / laser power and PWM.


### Notes
- 'With \`LASER_MOVE_G0_OFF\` and \`LASER_MOVER_G28_OFF\` enabled, [G0](https://marlinfw.org/docs/gcode/G000-G001.html) and [G28](https://marlinfw.org/docs/gcode/G028.html) will also turn the laser off'
parameters:

### Examples
Turn off the spindle or laser
\`\`\`gcode
 M5
\`\`\`
`;

export default content;
