
const content = `# M4 - Spindle CCW / Laser On
## Set the spindle CCW speed or laser power
### Usage
\`\`\`plaintext
 M4  [I<mode>] [O<power>] [S<power>]
\`\`\`

- \`[I<mode>]\`: Inline mode ON / OFF.
- \`[O<power>]\`: Spindle speed or laser power in PWM 0-255 value range
- \`[S<power>]\`: Spindle speed or laser power in the configured value range (see \`CUTTER_POWER_UNIT\`). (PWM 0-255 by default)

### Description

Wait for moves to complete, then set the spindle speed (counter-clockwise) or laser power.


### Notes
- 'S is interpeted as the configured value range: PWM (default), Percentage, or RPM. (See \`CUTTER_POWER_UNIT\`)'
- "[M3](https://marlinfw.org/docs/gcode/M003.html) and [M4](https://marlinfw.org/docs/gcode/M004.html) aren't needed with \`LASER_POWER_INLINE\` and \`LASER_MOVE_POWER\` enabled. Power is set directly in [G1](https://marlinfw.org/docs/gcode/G000-G001.html)…[G5](https://marlinfw.org/docs/gcode/G005.html)"

### Examples
Set spindle rotation counter-clockwise at 50% with \`CUTTER_POWER_UNIT\` set to \`PERCENT\`
\`\`\`gcode
 M4 S50
  
\`\`\`
Set spindle rotation counter-clockwise at 50% with \`CUTTER_POWER_UNIT\` set to \`PWM\`
\`\`\`gcode
 M4 S128
  
\`\`\`
Set spindle rotation counter-clockwise at 80% in \`PWM\`
\`\`\`gcode
 M4 O204
  
\`\`\`
Turn on the laser at full / \`SPEED_POWER_STARTUP\` power
\`\`\`gcode
 M4
  
\`\`\`
Fire laser at 80% on next G1,G2 and G3 move
\`\`\`gcode
 M4 S204 I
\`\`\`
`;

export default content;
