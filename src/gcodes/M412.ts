
const content = `# M412 - Filament Runout
## Get/set filament runout detection parameters
### Usage
\`\`\`plaintext
 M412  [D<linear>] [H<bool>] [S<bool>]
\`\`\`

- \`[D<linear>]\`: Set the filament runout distance.
- \`[H<bool>]\`: Flag to enable or disable host handling of a filament runout.
- \`[S<bool>]\`: Flag to enable or disable Filament Runout Detection. If omitted, the current enabled state will be reported.

### Description

Get or set filament runout status and distance. Omit all parameters to get a report of the current stats. Enable or disable filament runout detection with \`S\` and set distance with \`D\`. When filament sensors are enabled, Marlin will respond to a filament runout by running the configured G-code (usually [M600\` Filament Change](https://marlinfw.org/docs/gcode/M600.html)). When filament runout detection is disabled, Marlin will take no action for filament runout.


### Notes
- Requires \`FILAMENT_RUNOUT_SENSOR\`.
- Parameter \`D\` requires \`FILAMENT_RUNOUT_DISTANCE_MM\`.
- Parameter \`H\` requires \`HOST_ACTION_COMMANDS\`.

### Examples
Enable (and reset) filament runout detection
\`\`\`gcode
 M412 S1
  
\`\`\`
Disable filament runout detection
\`\`\`gcode
 M412 S0
  
\`\`\`
Report filament runout state
\`\`\`gcode
 |
      M412
      Filament runout ON
  
\`\`\`
Set filament runout distance
\`\`\`gcode
 |
      M412 D35 ; requires FILAMENT_RUNOUT_DISTANCE_MM
      M412
      Filament runout ON
      Filament runout distance (mm): 35
\`\`\`
`;

export default content;
