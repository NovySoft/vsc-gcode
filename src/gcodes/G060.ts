
const content = `# G60 - Save Current Position
## Save current position to specified slot
### Usage
\`\`\`plaintext
 G60  [S<slot>]
\`\`\`

- \`[S<slot>]\`: Memory slot. If omitted, the first slot (0) is used.

### Description

Save the current position of all axes in an SRAM buffer for later recall with [G61](https://marlinfw.org/docs/gcode/G061.html).


### Notes
- The total number of slots is configured with the \`SAVED_POSITIONS\` option.
- All slots are initially set to 0, 0, 0.

### Examples
Save current position to slot 0
\`\`\`gcode

       G60 S0
---
\`\`\`
`;

export default content;
