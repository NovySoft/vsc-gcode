
const content = `# M205 - Set Advanced Settings
## Set some advanced settings related to movement.
### Usage
\`\`\`plaintext
 M205  [B<µs>] [E<jerk>] [J<deviation>] [S<units/s>] [T<units/s>] [X<jerk>] [Y<jerk>] [Z<jerk>]
\`\`\`

- \`[B<µs>]\`: Minimum segment time (µs)
- \`[E<jerk>]\`: E max jerk (units/s)
- \`[J<deviation>]\`: Junction deviation (requires \`JUNCTION_DEVIATION\`)
- \`[S<units/s>]\`: Minimum feedrate for print moves (units/s)
- \`[T<units/s>]\`: Minimum feedrate for travel moves (units/s)
- \`[X<jerk>]\`: X max jerk (units/s)
- \`[Y<jerk>]\`: Y max jerk (units/s)
- \`[Z<jerk>]\`: Z max jerk (units/s)

### Description

Set various motion settings. See parameters for details.


### Notes
- View the current setting with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, these are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
Set some advanced settings.
\`\`\`gcode
 M205 T40 ; Travel feedrate = 40mm/s
\`\`\`
`;

export default content;
