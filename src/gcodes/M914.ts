
const content = `# M914 - TMC Bump Sensitivity
## Set sensorless homing sensitivity
### Usage
\`\`\`plaintext
 M914  [I<int (index)>] [X<int>] [Y<int>] [Z<int>]
\`\`\`

- \`[I<int (index)>]\`: (>=1.1.9) Index for dual steppers. Use \`I1\` for X2, Y2, and/or Z2.
- \`[X<int>]\`: Sensitivity of the X stepper driver.
- \`[Y<int>]\`: Sensitivity of the Y stepper driver.
- \`[Z<int>]\`: Sensitivity of the Z stepper driver.

### Description

Some TMC stepper drivers can detect when they bump into something that causes them to stop moving. This feature is so sensitive that it can actually take the place of traditional endstops. Use this command to set the bump sensitivity for the X, Y, and Z stepper drivers.


### Notes
- Set all \`*_HOME_BUMP_MM\` values to 0 for best results.
- Set the default stall thresholds with \`*_STALL_SENSITIVITY\`.
- |
    Compatible with TMC2130 and TMC2209.
`;

export default content;
