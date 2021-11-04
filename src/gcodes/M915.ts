
const content = `# M915 - TMC Z axis calibration
## Align ends of the Z axis and test torque
### Usage
\`\`\`plaintext
 M915  [S<int (mA)>] [Z<float (linear)>]
\`\`\`

- \`[S<int (mA)>]\`: "Current value to use for the raise move. (Default: \`CALIBRATION_CURRENT\`)"
- \`[Z<float (linear)>]\`: "Extra distance past \`Z_MAX_POS\` to move the Z axis. (Default: \`CALIBRATION_EXTRA_HEIGHT\`)"

### Description

The command aims to align the ends of the X gantry (for a Průša i3-style printer). Here's a [video demonstration](https://www.youtube.com/watch?v=JqH41K2vq0g&t=300s).

Using the given current, Marlin will move the Z axis (at homing speed) to the top plus a given extra distance. _Since this intentionally stalls the Z steppers, you should use the minimum current required to move the axis._

Z is then re-homed to correct the position.


### Notes
- This command is deprecated. Use \`Z_STEPPER_AUTO_ALIGN\` instead.
- Requires \`TMC_Z_CALIBRATION\` and at least one TMC driver for Z axis.
- If \`Z_DUAL_STEPPER_DRIVERS\` is used, both should be TMC drivers.

### Examples
Set a 300mA current and press the gantry against the top for 5 extra mm.
\`\`\`gcode

       G21 ; Units to mm
       M915 S300 Z5
\`\`\`
`;

export default content;
