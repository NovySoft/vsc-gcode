
const content = `# M303 - PID autotune
## Auto-tune the PID system to find stable values.
### Usage
\`\`\`plaintext
 M303  C<count> D<flag> D<action> [E<index>] S<temp> U<flag>
\`\`\`

- \`C<count>\`: Cycles. At least 3 cycles are required. Default 5.
- \`D<flag>\`: Toggle activation of \`PID_DEBUG\` output.
- \`D<action>\`: Toggle PID debug output on / off (and take no further action). (Requires \`PID_DEBUG\`)
- \`[E<index>]\`: Hotend index (-1 for heated bed). Default 0.
- \`S<temp>\`: Target temperature
- \`U<flag>\`: Use PID result. (Otherwise just print it out.)

### Description

This command initiates a process of heating and cooling to determine the proper PID values for the specified hotend or the heated bed.


### Notes
- Requires \`PIDTEMP\` or \`PIDTEMPBED\`.
- View current PID values with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, all PID values are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
'Auto-tune hotend at 210 °C for 8 cycles:'
\`\`\`gcode

     M303 E0 C8 S210

\`\`\`
'Auto-tune bed at 60 °C for 8 cycles:'
\`\`\`gcode

     M303 E-1 C8 S60
---
\`\`\`
`;

export default content;
