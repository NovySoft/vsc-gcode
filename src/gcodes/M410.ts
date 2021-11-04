
const content = `# M410 - Quickstop
## Stop all steppers instantly
### Usage
\`\`\`plaintext
 M410 
\`\`\`


### Description

Stop all steppers instantly. Since there will be no deceleration, steppers are expected to be out of position after this command.


### Notes
- This command is intended only for emergency situations.
- If \`EMERGENCY_PARSER\` is not enabled, this will be delayed.

### Examples
Stop all steppers now.
\`\`\`gcode
 M410
\`\`\`
`;

export default content;
