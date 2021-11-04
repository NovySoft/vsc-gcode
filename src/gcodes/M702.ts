
const content = `# M702 - Unload filament
## Unload filament
### Usage
\`\`\`plaintext
 M702  [T<extruder>] U<distance> [Z<distance>]
\`\`\`

- \`[T<extruder>]\`: Optional extruder number. If omitted, current extruder (or ALL extruders with [FILAMENT_UNLOAD_ALL_EXTRUDERS](/docs/configuration/configuration.html#advanced-pause)).
- \`U<distance>\`: Retract distance for removal (manual reload)
- \`[Z<distance>]\`: Move the Z axis by this distance

### Description

Unload filament. By default this command will use the configured \`ADVANCED_PAUSE_FEATURE\` settings.


### Notes
- Enabled using [FILAMENT_LOAD_UNLOAD_GCODES](/docs/configuration/configuration.html#advanced-pause).
- Uses the minimum temperature for safe extrusion as set by [M302](https://marlinfw.org/docs/gcode/M302.html).
parameters:
-
    tag: T
    optional: true
    description: Optional extruder number. If omitted, current extruder (or ALL extruders with [FILAMENT_UNLOAD_ALL_EXTRUDERS](/docs/configuration/configuration.html#advanced-pause)).
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
    tag: U
    optional: false
    description: Retract distance for removal (manual reload)
    values:
-
        tag: distance
        type: float

### Examples
Unload filament from current extruder
\`\`\`gcode
 M702
\`\`\`
`;

export default content;
