
const content = `# M192 - Wait for Probe temperature
## Wait for the probe temperature sensor to reach a target
### Usage
\`\`\`plaintext
 M192  [R<temp>] [S<temp>]
\`\`\`

- \`[R<temp>]\`: Temperature to wait for, whether heating or cooling.
- \`[S<temp>]\`: A minimum temperature to wait for. No wait if already higher.

### Description

Use this command to dwell until the probe reaches a given target temperature.


### Examples
\`\`\`gcode

       M192 S44 ; Wait for probe temperature to go above 44C
       M192 R28 ; Wait for probe temperature to get close to 28C

\`\`\`
`;

export default content;
