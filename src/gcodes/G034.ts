
const content = `# G34 - Z Steppers Auto-Alignment
## Align multiple Z steppers using a bed probe
### Usage
\`\`\`plaintext
 G34  [undefined>] [undefined>] [undefined>] [undefined>]
\`\`\`

- \`[undefined>]\`: 

- \`[undefined>]\`: 

- \`[undefined>]\`: 

- \`[undefined>]\`: 


### Description

Align multiple Z stepper motors using a bed probe by probing one position per stepper. See [M422](https://marlinfw.org/docs/gcode/M422.html) for Z-Stepper automatic alignment parameter selection.


### Notes
- Requires \`Z_STEPPER_AUTO_ALIGN\`.

### Examples
'Align Z steppers:'
\`\`\`gcode

       G34
---
\`\`\`
`;

export default content;
