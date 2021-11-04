
const content = `# M290 - Babystep
## Babystep one or more axes
### Usage
\`\`\`plaintext
 M290  [P<bool>] [S<pos>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[P<bool>]\`: Use \`P0\` to leave the Probe Z Offset unaffected. (Requires \`BABYSTEP_ZPROBE_OFFSET\`)
- \`[S<pos>]\`: Alias for Z
- \`[X<pos>]\`: A distance on the X axis
- \`[Y<pos>]\`: A distance on the Y axis
- \`[Z<pos>]\`: A distance on the Z axis

### Description

Apply babysteps to one or more axes using current units. Offsets applied with [M290](https://marlinfw.org/docs/gcode/M290.html) aren't added to the current coordinates, but are intended for making small adjustments, especially in the Z axis, at the start of a print.

Note that when \`BABYSTEP_ZPROBE_OFFSET\` is enabled, [M290](https://marlinfw.org/docs/gcode/M290.html) also modifies the Probe Z Offset (with no immediate effects). The new Z offset applies to successive probing operations, and can be saved with [M500](https://marlinfw.org/docs/gcode/M500.html). This behavior is means to coincide with the LCD Menu replacing "Z Babystepping" with "Babystep Z Probe Offset." To avoid this side-effect, use \`M290 P0\` or leave \`BABYSTEP_ZPROBE_OFFSET\` disabled.


### Examples
Babystep the Z axis by 0.25mm (in mm units mode)
\`\`\`gcode

       M290 Z0.25 ; move up 0.25mm on the Z axis
\`\`\`
`;

export default content;
