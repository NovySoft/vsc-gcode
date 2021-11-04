
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
- Enabled using [FILAMENT_LOAD_UNLOAD_GCODES](/docs/configuration/configuration.html#advanced-pause).
- Uses the minimum temperature for safe extrusion as set by [M302](https://marlinfw.org/docs/gcode/M302.html).
parameters:
-
    tag: T
    optional: true
    description: Optional extruder index. Current extruder if omitted.
    values:
-
        tag: extruder
        type: int
-
    tag: Z
    optional: true
    description: Move the Z axis by this distance
    values:
-
        tag: distance
        type: float
-
    tag: L
    optional: false
    description: Extrude distance for insertion (positive value) (manual reload)
    values:
-
        tag: distance
        type: float

### Examples
Load filament into the active extruder
\`\`\`gcode
 M701
\`\`\`
`;

export default content;
