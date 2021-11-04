
const content = `# M73 - Set Print Progress
## Set current print progress percentage for LCD.
### Usage
\`\`\`plaintext
 M73  P<percent> [R<minutes>]
\`\`\`

- \`P<percent>\`: Current print progress percentage
- \`[R<minutes>]\`: Set remaining time.

### Description

Set current print progress percentage and/or remaining time for display on the LCD.


### Examples
Set print progress to 25% and remaining time to 43.0 minutes
\`\`\`gcode
 M73 P25 R43
\`\`\`
`;

export default content;
