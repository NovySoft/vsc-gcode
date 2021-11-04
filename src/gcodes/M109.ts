
const content = `# M109 - Wait for Hotend Temperature
## Wait for the hot end to reach its target.
### Usage
\`\`\`plaintext
 M109  [B<temp>] [F<flag>] [I<index>] [R<temp>] [S<temp>] [T<index>]
\`\`\`

- \`[B<temp>]\`: With \`AUTOTEMP\`, the max auto-temperature.
- \`[F<flag>]\`: Autotemp flag. Omit to disable autotemp.
- \`[I<index>]\`: Material preset index. Overrides \`S\`.
- \`[R<temp>]\`: Target temperature (wait for cooling or heating).
- \`[S<temp>]\`: 'Target temperature (wait only when heating). Also \`AUTOTEMP\`: The min auto-temperature.'
- \`[T<index>]\`: Hotend index. If omitted, the currently active hotend will be used.

### Description

This command optionally sets a new target hot end temperature and waits for the target temperature to be reached before proceeding. If the temperature is set with \`S\` then [M109](https://marlinfw.org/docs/gcode/M109.html) waits *only when heating*. If the temperature is set with \`R\` then [M109](https://marlinfw.org/docs/gcode/M109.html) will also wait for the temperature to go down.


### Notes
- With \`PRINTJOB_TIMER_AUTOSTART\` this command will start the print job if heating, and stop the print job timer if the temperature is set at or below half of \`EXTRUDE_MINTEMP\`.
- This command (as well as [M190](https://marlinfw.org/docs/gcode/M190.html)) can block new commands from the host, preventing remote shutdown. However, if \`EMERGENCY_PARSER\` is enabled, a host can send [M108](https://marlinfw.org/docs/gcode/M108.html) to break out of the wait loop.
- To set the hot end temperature and proceed without waiting, use [M104](https://marlinfw.org/docs/gcode/M104.html).

### Examples
Set target temperature and wait (if heating up)
\`\`\`gcode
 M109 S180
  
\`\`\`
Set target temperature, wait even if cooling
\`\`\`gcode
 M109 R120
  
\`\`\`
Set target temperature for E1 and wait (if heating up)
\`\`\`gcode
 M109 T1 R205
  
\`\`\`
'\`AUTOTEMP\`: Set autotemp range, wait for temp'
\`\`\`gcode
 M109 F S180 B190
  
\`\`\`
'\`AUTOTEMP\`: Disable autotemp, wait for temp'
\`\`\`gcode
 M109
\`\`\`
`;

export default content;
