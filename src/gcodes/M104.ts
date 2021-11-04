
const content = `# M104 - Set Hotend Temperature
## Set a new target hot end temperature.
### Usage
\`\`\`plaintext
 M104  [B<temp>] [F<flag>] [I<index>] [S<temp>] [T<index>]
\`\`\`

- \`[B<temp>]\`: '\`AUTOTEMP\`: The max auto-temperature.'
- \`[F<flag>]\`: '\`AUTOTEMP\`: Autotemp flag. Omit to disable autotemp.'
- \`[I<index>]\`: Material preset index. Overrides \`S\`.
- \`[S<temp>]\`: 'Target temperature.<br/>\`AUTOTEMP\`: the min auto-temperature.'
- \`[T<index>]\`: Hotend index. If omitted, the currently active hotend will be used.

### Description

Set a new target hot end temperature and continue without waiting. The firmware will continue to try to reach and hold the temperature in the background.

Use [M109](https://marlinfw.org/docs/gcode/M109.html) to wait for the hot end to reach the target temperature.


### Notes
- With \`PRINTJOB_TIMER_AUTOSTART\` this command will stop the print job timer if the temperature is set at or below half of \`EXTRUDE_MINTEMP\`.

### Examples
Set target temperature for the active hotend
\`\`\`gcode
 M104 S185
  
\`\`\`
Set target temperature for E1
\`\`\`gcode
 M104 T1 S205
  
\`\`\`
'\`AUTOTEMP\`: Set autotemp range'
\`\`\`gcode
 M104 F S180 B190
  
\`\`\`
'\`AUTOTEMP\`: Disable autotemp'
\`\`\`gcode
 M104
\`\`\`
`;

export default content;
