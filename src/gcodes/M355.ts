
const content = `# M355 - Case Light Control
## Turn the case light on or off, set brightness
### Usage
\`\`\`plaintext
 M355  [P<byte>] [S<bool>]
\`\`\`

- \`[P<byte>]\`: Set the brightness factor from 0 to 255.
- \`[S<bool>]\`: Turn the case light on or off.

### Description

Set the case light power state and/or brightness.


### Examples
Turn the case light on at half brightness
\`\`\`gcode
 M355 S1 P128
\`\`\`
`;

export default content;
