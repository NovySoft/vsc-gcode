
const content = `# G54/G55/G56/G57/G58/G59/G59.1/G59.2/G59.3 - Workspace Coordinate System
## Select a workspace coordinate system
### Usage
\`\`\`plaintext
 G54/G55/G56/G57/G58/G59/G59.1/G59.2/G59.3 
\`\`\`


### Description

A workspace is an XYZ offset to the native machine space. All workspaces default to 0,0,0 at start, or with EEPROM support they may be restored from a previous session. See [G53](https://marlinfw.org/docs/gcode/G053.html) for native space.
- "[G92](https://marlinfw.org/docs/gcode/G092.html) is used to set the current workspace's offset."
- "\`G54\` - use coordinate system 1"
- "\`G55\` - use coordinate system 2"
- "\`G56\` - use coordinate system 3"
- "\`G57\` - use coordinate system 4"
- "\`G58\` - use coordinate system 5"
- "\`G59\` - use coordinate system 6"
- "\`G59.1\` - use coordinate system 7"
- "\`G59.2\` - use coordinate system 8"
- "\`G59.3\` - use coordinate system 9"


### Notes
- Requires \`CNC_COORDINATE_SYSTEMS\`.

### Examples
'Use coordinate system 2 and rapid move to workspace offset origin:'
\`\`\`gcode

       G55 ; Select workspace 1
       G0 X0 Y0 X0

\`\`\`
`;

export default content;
