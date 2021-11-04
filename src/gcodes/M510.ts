
const content = `# M510 - Lock Machine
## Lock the machine if it has a passcode
### Usage
\`\`\`plaintext
 M510 
\`\`\`


### Description
Lock the machine. When the machine is locked a passcode is required to unlock it. Use \`M511 P\` with your passcode to unlock the machine.option.


### Notes
- Requires \`PASSWORD_FEATURE\`.

### Examples
Lock the machine now
\`\`\`gcode
 M510
--
\`\`\`
`;

export default content;
