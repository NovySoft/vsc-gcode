
const content = `# M512 - Set Passcode
## Set a numeric passcode for locking the machine
### Usage
\`\`\`plaintext
 M512  P<password> [S<password>]
\`\`\`

- \`P<password>\`: Current passcode. This must be correct to clear or change the passcode.
- \`[S<password>]\`: If \`S\` is included the new passcode will be set to this value.

### Description
Check the passcode given with \`P\` and if it is correct clear the passcode. If a new passcode is given with \`S\` then set a new passcode.


### Notes
- Requires \`PASSWORD_FEATURE\`.
- Use \`PASSWORD_LENGTH\` to configure the length, up to 9 digits.

### Examples
Change passcode from '1234' to '9090'
\`\`\`gcode
 M512 P1234 S9090
--
\`\`\`
`;

export default content;
