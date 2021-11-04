
const content = `# M191 - Wait for Chamber Temperature
## Wait for the chamber to reach target temperature.
### Usage
\`\`\`plaintext
 M191  [R<temp>] [S<temp>]
\`\`\`

- \`[R<temp>]\`: Target temperature (wait for cooling or heating).
- \`[S<temp>]\`: Target temperature (wait only when heating).

### Description

This command optionally sets a new target chamber temperature and waits for the target temperature to be reached before proceeding. If the temperature is set with \`S\` then it waits *only when heating*.


### Notes
- This command (as well as [M109](https://marlinfw.org/docs/gcode/M109.html) and [M190](https://marlinfw.org/docs/gcode/M190.html)) can block new commands from the host. To break out of wait for temperature using [M108](https://marlinfw.org/docs/gcode/M108.html) from the host, enable \`EMERGENCY_PARSER\`.
- Use [M141](https://marlinfw.org/docs/gcode/M141.html) to set the chamber temperature and proceed without waiting.

### Examples
Set target chamber temperature and wait (if heating)
\`\`\`gcode
 M191 S80
  
\`\`\`
Set target chamber temperature, wait even if cooling
\`\`\`gcode
 M191 R40
\`\`\`
`;

export default content;
