
const content = `# G53 - Move in Machine Coordinates
## Apply native workspace to the current move.
### Usage
\`\`\`plaintext
 G53 
\`\`\`


### Description

\`G53\` applies native workspace to the current move. See [G54-G59.3](https://marlinfw.org/docs/gcode/G054-G059.html) for workspace coordinate system.
In CNC G-code \`G53\` is a modifier. It precedes a movement command (or other modifiers) on the same line.
Marlin also accepts \`G53\` on a line by itself as the command to return to the native workspace.


### Notes
- Requires \`CNC_COORDINATE_SYSTEMS\`.

### Examples
Rapid linear move to the machine origin in native space
\`\`\`gcode
 G53 G0 X0 Y0 Z0
  
\`\`\`
Rapid linear move to absolute coordinate X20 in native space
\`\`\`gcode
 G53 G1 X20
  
\`\`\`
Use native space
\`\`\`gcode
 G53

\`\`\`
`;

export default content;
