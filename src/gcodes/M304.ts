
const content = `# M304 - Set Bed PID
## Set PID values for the heated bed.
### Usage
\`\`\`plaintext
 M304  [D<value>] [I<value>] [P<value>]
\`\`\`

- \`[D<value>]\`: Derivative value
- \`[I<value>]\`: Integral value
- \`[P<value>]\`: Proportional value

### Description

Set the values that control the PID loop for the heated bed.


### Notes
- Requires \`PIDTEMPBED\`.
- View current bed PID values with [M503](https://marlinfw.org/docs/gcode/M503.html)
- If \`EEPROM_SETTINGS\` is enabled, bed PID values are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html)
`;

export default content;
