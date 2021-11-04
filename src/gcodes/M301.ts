
const content = `# M301 - Set Hotend PID
## Set PID values for a hotend.
### Usage
\`\`\`plaintext
 M301  [C<value>] [D<value>] [E<index>] [F<value>] [I<value>] [L<value>] [P<value>]
\`\`\`

- \`[C<value>]\`: C term (requires \`PID_EXTRUSION_SCALING\`)
- \`[D<value>]\`: Derivative value
- \`[E<index>]\`: Extruder index to set. Default 0.
- \`[F<value>]\`: F term (requires \`PID_FAN_SCALING\`)
- \`[I<value>]\`: Integral value
- \`[L<value>]\`: Extrusion scaling queue length (requires \`PID_EXTRUSION_SCALING\`)
- \`[P<value>]\`: Proportional value

### Description

Set the values that control the PID loop for a hotend.


### Notes
- Requires \`PIDTEMP\`.
- View current PID values with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, all hotend PID values are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
`;

export default content;
