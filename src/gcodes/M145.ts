
const content = `# M145 - Set Material Preset
## Set material presets in the LCD menu.
### Usage
\`\`\`plaintext
 M145  [B<temp>] [F<speed>] [H<temp>] [S<index>]
\`\`\`

- \`[B<temp>]\`: Bed temperature
- \`[F<speed>]\`: Fan speed
- \`[H<temp>]\`: Hotend temperature
- \`[S<index>]\`: Material index

### Description

Set the preheating presets for materials in the LCD menu.


### Notes
- Requires an LCD controller.
- View the current settings with [M503](https://marlinfw.org/docs/gcode/M503.html).
- If \`EEPROM_SETTINGS\` is enabled, these settings are saved with [M500](https://marlinfw.org/docs/gcode/M500.html), loaded with [M501](https://marlinfw.org/docs/gcode/M501.html), and reset with [M502](https://marlinfw.org/docs/gcode/M502.html).

### Examples
Set heatup presets for material 1
\`\`\`gcode
 M145 S0 H190 B70 F50
\`\`\`
`;

export default content;
