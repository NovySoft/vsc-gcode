
const content = `# M204 - Set Starting Acceleration
## Set the starting acceleration for moves by type.
### Usage
\`\`\`plaintext
 M204  [P<accel>] [R<accel>] [S<accel>] [T<accel>]
\`\`\`

- \`[P<accel>]\`: Printing acceleration. Used for moves that include extrusion (i.e., which employ the current tool).
- \`[R<accel>]\`: Retract acceleration. Used for extruder retraction moves.
- \`[S<accel>]\`: Legacy parameter for move acceleration. Set both printing and travel acceleration.
- \`[T<accel>]\`: Travel acceleration. Used for moves that include no extrusion.

### Description

Set the preferred starting acceleration (in units/s/s) for moves of different types. Send \`M204\` with no parameters to get current settings.


### Notes
- View the current setting with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, these are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).
- Legacy \`M204 S<accel>\` is deprecated. Use separate paremeters \`M204 P<accel> T<accel>\` instead.

### Examples
Set acceleration for printing moves to 2400mm/s/s
\`\`\`gcode
 M204 P2400

\`\`\`
`;

export default content;
