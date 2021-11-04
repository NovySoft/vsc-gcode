
const content = `# M282 - Detach Servo
## Detach a servo until its next move
### Usage
\`\`\`plaintext
 M282  P<index>
\`\`\`

- \`P<index>\`: Index of the servo to detach.

### Description

Detach a servo, which turns off its power. The servo will be attached (powered up) before its next move.


### Examples
Detach servo at index 1
\`\`\`gcode
 M282 P1
\`\`\`
`;

export default content;
