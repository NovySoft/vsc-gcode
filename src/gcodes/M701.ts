
const content = `# M701 - Load filament
## Load filament
### Usage
\`\`\`plaintext
 M701  L<distance> [T<extruder>] [Z<distance>]
\`\`\`

- \`L<distance>\`: Extrude distance for insertion (positive value) (manual reload)
- \`[T<extruder>]\`: Optional extruder index. Current extruder if omitted.
- \`[Z<distance>]\`: Move the Z axis by this distance

### Description

Load filament into the active extruder. By default this will use the configured \`ADVANCED_PAUSE_FEATURE\` settings.


### Notes
- Enabled using [FILAMENT_LOAD_UNLOAD_GCODES](https://marlinfw.org/docs/configuration/configuration.html#advanced-pause).
- Uses the minimum temperature for safe extrusion as set by [M302](https://marlinfw.org/docs/gcode/M302.html).

### Examples
Load filament into the active extruder
\`\`\`gcode
 M701
\`\`\`
`;

export default content;
