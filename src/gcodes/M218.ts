
const content = `# M218 - Set Hotend Offset
## Set the offset of a hotend (from hotend 0).
### Usage
\`\`\`plaintext
 M218  [T<index>] [X<offset>] [Y<offset>] [Z<offset>]
\`\`\`

- \`[T<index>]\`: Hotend index. Active extruder by default.
- \`[X<offset>]\`: Hotend X offset
- \`[Y<offset>]\`: Hotend Y offset
- \`[Z<offset>]\`: Hotend Z offset. Requires \`DUAL_X_CARRIAGE\` or \`SWITCHING_NOZZLE\`.

### Description

To keep nozzles aligned to the work area between tool-changes, the firmware needs to know how they relate to each other.


### Notes
- Requires 2 or more nozzles.
- The default hotend offsets are set with \`HOTEND_OFFSET_[XYZ]\`.
- Z hotend offset only available with \`DUAL_X_CARRIAGE\` or \`SWITCHING_NOZZLE\`.
- View current hotend offsets with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, these offsets are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
`;

export default content;
