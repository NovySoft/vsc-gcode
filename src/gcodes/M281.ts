
const content = `# M281 - Edit Servo Angles
## Set servo deploy and/or stow angles
### Usage
\`\`\`plaintext
 M281  [L<degrees>] P<index>
\`\`\`

- \`[L<degrees>]\`: Deploy angle in degrees.
- \`P<index>\`: Servo index to update / report.

### Description

Set or get the position of a servo. Without \`L\` or \`U\` the current values will be reported.


### Examples
Set 90° deploy and 0° stow angles for servo 0.
\`\`\`gcode
 M281 P0 L90 U0
\`\`\`
`;

export default content;
