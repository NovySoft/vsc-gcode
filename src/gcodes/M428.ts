
const content = `# M428 - Home Offsets Here
## Set home offsets based on current position
### Usage
\`\`\`plaintext
 M428 
\`\`\`


### Description

Use [M428](https://marlinfw.org/docs/gcode/M428.html) to set a persistent offset to the native home position and coordinate space by assigning the current position as the native home position. See the example below.

- The current position must be within 2cm from 0 or an endstop.
- The current position is set to the native home position.
- Any previous position shift from [G92](https://marlinfw.org/docs/gcode/G092.html) is cleared.
- The home offset is persistent — added to the current position until changed.
- Some uses include fine adjustment of Z position (without moving endstops) and shifting the coordinate space to print on a different part of the bed.


### Notes
- Only the Z offset can be altered on \`DELTA\`.
- This G-code can be disabled with \`NO_WORKSPACE_OFFSETS\` to optimize movement.
- Changing the home offsets will not invalidate bed leveling or other saved data.
- If \`EEPROM_SETTINGS\` is enabled, the home offsets are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).
- Use [M206](https://marlinfw.org/docs/gcode/M206.html) to set the home offsets directly.

### Examples
What was X=10 becomes X=0. So the X home offset becomes -10.
\`\`\`gcode

       G1 X10
       M428
\`\`\`
`;

export default content;
