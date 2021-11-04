
const content = `# M511 - Unlock Machine
## Unlock the machine if it has a passcode
### Usage
\`\`\`plaintext
 M511  P<passcode>
\`\`\`

- \`P<passcode>\`: The passcode to try.

### Description
Check the given passcode and unlock the machine if it is correct. Otherwise, delay for a period of time before allowing another attempt.


### Notes
- Requires \`PASSWORD_FEATURE\`.

### Examples
Unlock a machine with passcode '12345'
\`\`\`gcode
 M511 P12345
--
\`\`\`
`;

export default content;
