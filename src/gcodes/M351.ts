
const content = `# M351 - Set Microstep Pins
## Directly set the micro-stepping pins
### Usage
\`\`\`plaintext
 M351  [B<0|1>] [E<0|1>] S<1|2> [X<0|1>] [Y<0|1>] [Z<0|1>]
\`\`\`

- \`[B<0|1>]\`: 
  - \`B0\`: undefined
  - \`B1\`: undefined

- \`[E<0|1>]\`: 
  - \`E0\`: undefined
  - \`E1\`: undefined

- \`S<1|2>\`: 
  - \`S1\`: Select pin MS1 for all axes being set.
  - \`S2\`: Select pin MS2 for all axes being set.

- \`[X<0|1>]\`: 
  - \`X0\`: undefined
  - \`X1\`: undefined

- \`[Y<0|1>]\`: 
  - \`Y0\`: undefined
  - \`Y1\`: undefined

- \`[Z<0|1>]\`: 
  - \`Z0\`: undefined
  - \`Z1\`: undefined


### Description

If your board has digital micro-stepping pins (\`X_MS1\`, \`Y_MS1\`, etc.), use this command to set the micro-steps.

At the time of this writing, the only boards which have digital micro-stepping pins are:

- MINIRAMBO
- RAMBO
- SCOOVO_X9H
- MKS_BASE_common
- ALLIGATOR_R2
- ARCHIM1
- PRINTRBOARD_G2
- 5DPRINT


### Examples
Set the \`X_MS1\` pin and clear the \`E0_MS1\` pin
\`\`\`gcode
 M351 S1 X1 E0

\`\`\`
`;

export default content;
