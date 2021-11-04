
const content = `# M190 - Wait for Bed Temperature
## Wait for the bed to reach target temperature.
### Usage
\`\`\`plaintext
 M190  [I<index>] [R<temp>] [S<temp>]
\`\`\`

- \`[I<index>]\`: Material preset index. Overrides \`S\`.
- \`[R<temp>]\`: Target temperature (wait for cooling or heating).
- \`[S<temp>]\`: Target temperature (wait only when heating).

### Description

This command optionally sets a new target temperature for the heated bed and waits for the target temperature to be reached before proceeding. If the temperature is set with \`S\` then it waits *only when heating*.


### Notes
- This command may block the command queue. Enable \`EMERGENCY_PARSER\` so that hosts can break in using [M108](https://marlinfw.org/docs/gcode/M108.html).
- Use [M140](https://marlinfw.org/docs/gcode/M140.html) to set the bed temperature and proceed without waiting.
- Requires one (1) of the parameters listed below.

### Examples
\`\`\`gcode

       M190 S80
  
\`\`\`
\`\`\`gcode

       M190 R40
\`\`\`
`;

export default content;
