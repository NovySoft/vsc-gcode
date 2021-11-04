
const content = `# M422 - Set Z Motor XY
## Set a Z motor position for G34 Auto-Alignment
### Usage
\`\`\`plaintext
 M422  undefined> [undefined>] [undefined>]
\`\`\`

- \`undefined>\`: 

- \`[undefined>]\`: 

- \`[undefined>]\`: 


### Description

Set the XY probe position for a given Z Stepper. See [G34](https://marlinfw.org/docs/gcode/G034.html) for Z-Stepper automatic alignment.


### Notes
- Requires \`Z_STEPPER_AUTO_ALIGN\`.

### Examples
'Set probe position for Z stepper 0'
\`\`\`gcode

       M422 S0 X10 Y10
---
\`\`\`
`;

export default content;
