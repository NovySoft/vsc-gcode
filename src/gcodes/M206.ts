
const content = `# M206 - Set Home Offsets
## Apply a persistent offset
### Usage
\`\`\`plaintext
 M206  [P<offset>] [T<offset>] [X<offset>] [Y<offset>] [Z<offset>]
\`\`\`

- \`[P<offset>]\`: SCARA Psi offset (Requires \`MORGAN_SCARA\`)
- \`[T<offset>]\`: SCARA Theta offset (Requires \`MORGAN_SCARA\`)
- \`[X<offset>]\`: X home offset
- \`[Y<offset>]\`: Y home offset
- \`[Z<offset>]\`: Z home offset

### Description

Use [M206](https://marlinfw.org/docs/gcode/M206.html) to apply a persistent offset to the native home position and coordinate space. This effectively shifts the coordinate space in the negative direction. See examples below.

- The current position is adjusted to align to the new home offset values.
- The home offset is persistent — added to the current position until changed.
- Some uses include fine adjustment of Z position (without moving endstops) and shifting the coordinate space to print on a different part of the bed.


### Notes
- This command isn't available on \`DELTA\`. (For delta use \`M665 H\`.)
- This G-code can be disabled with \`NO_WORKSPACE_OFFSETS\` to optimize movement.
- Changing the home offsets will not invalidate bed leveling or other saved data.
- View the current offsets with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, the home offsets are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).
- [M428](https://marlinfw.org/docs/gcode/M428.html) sets home offsets so the current position aligns to the native home position.

### Examples
'Raise Z up a little bit on the first layer:'
\`\`\`gcode
 M206 Z-0.2
  
\`\`\`
'Shift the print area 10mm to the left:'
\`\`\`gcode
 M206 X10
\`\`\`
`;

export default content;
