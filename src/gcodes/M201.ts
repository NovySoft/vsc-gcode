
const content = `# M201 - Set Print Max Acceleration
## Set maximum acceleration for print moves one or more axes.
### Usage
\`\`\`plaintext
 M201  [E<accel>] [T<index>] [X<accel>] [Y<accel>] [Z<accel>]
\`\`\`

- \`[E<accel>]\`: E axis max acceleration
- \`[T<index>]\`: Target extruder (Requires \`DISTINCT_E_FACTORS\`)
- \`[X<accel>]\`: X axis max acceleration
- \`[Y<accel>]\`: Y axis max acceleration
- \`[Z<accel>]\`: Z axis max acceleration

### Description

Set the max acceleration for one or more axes (in current units-per-second squared).


### Notes
- View the current setting with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, these are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
'Set max acceleration lower so it sounds like a robot:'
\`\`\`gcode
 M201 X50 Y50
---
\`\`\`
`;

export default content;
