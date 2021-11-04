
const content = `# G28 - Auto Home
## Auto home one or more axes.
### Usage
\`\`\`plaintext
 G28  [L<flag>] [O<flag>] [R<float>] [X<bool>] [Y<bool>] [Z<bool>]
\`\`\`

- \`[L<flag>]\`: Flag to restore bed leveling state after homing. (default \`true\`)
- \`[O<flag>]\`: Flag to skip homing if the position is already trusted
- \`[R<float>]\`: The distance to raise the nozzle before homing
- \`[X<bool>]\`: Flag to home the X axis
- \`[Y<bool>]\`: Flag to home the Y axis
- \`[Z<bool>]\`: Flag to home the Z axis

### Description

When you first start up your machine it has no idea where the toolhead is positioned, so Marlin needs to use a procedure called "homing" to establish a known position. To do this it moves each axis towards one end of its track until it triggers a switch, commonly called an "endstop." Marlin knows where the endstops are, so once all the endstops have been triggered the position is known.

The \`G28\` command is used to home one or more axes. The default behavior with no parameters is to home all axes.

In order to improve positional accuracy, the homing procedure can re-bump at a slower speed according to the \`[XYZ]_HOME_BUMP_MM\` and \`HOMING_BUMP_DIVISOR\` settings.

The position is easy to lose when the steppers are turned off, so homing may be required or advised after the machine has been sitting idle for a period of time. See the Configuration files for all homing options.


### Notes
- Homing is required before [G29](https://marlinfw.org/docs/gcode/G029.html), [M48](https://marlinfw.org/docs/gcode/M048.html), and some other procedures.
- If homing is needed the LCD will blink the X Y Z indicators.
- "\`G28\` disables bed leveling. Follow with \`M420 S\` to turn leveling on, or use \`RESTORE_LEVELING_AFTER_G28\` to automatically keep leveling on after \`G28\`."

### Examples
\`\`\`gcode

       G28 ; Home all axes
  
\`\`\`
\`\`\`gcode

       G28 X Z ; Home the X and Z axes
  
\`\`\`
\`\`\`gcode

       G28 O ; Home all "untrusted" axes
---
\`\`\`
`;

export default content;
