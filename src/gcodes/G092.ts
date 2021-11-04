
const content = `# G92 - Set Position
## Set the current position of one or more axes.
### Usage
\`\`\`plaintext
 G92  [E<pos>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[E<pos>]\`: New extruder position
- \`[X<pos>]\`: New X axis position
- \`[Y<pos>]\`: New Y axis position
- \`[Z<pos>]\`: New Z axis position

### Description

Set the current position to the values specified. In Marlin 1.1.0 and up, the software endstops are adjusted to preserve the physical movement limits. Thus you could use \`G92\` to set the middle of the bed to 0,0 and then run .gcode that was sliced for a Deltabot.

The [CNC_COORDINATE_SYSTEMS](https://marlinfw.org/docs/gcode/G054-G059.html) option enables use of \`G92.1\` to reset the selected workspace to native machine space. See [G54-G59](https://marlinfw.org/docs/gcode/G054-G059.html) and [G53'](https://marlinfw.org/docs/gcode/G053.html).


### Notes
- In earlier versions of Marlin \`G92\` doesn't update the software endstops, so it was unsupported to set coordinates outside these boundaries. In Marlin 1.1.0 and up, the physical boundaries are maintained. This means you can no longer use \`G92\` to move below the bed, for example.

### Examples
\`\`\`gcode

       G92 X10 E90
  
\`\`\`
\`\`\`gcode

       G92 X0 Y0 Z0
  
\`\`\`
\`\`\`gcode

       G92.1
\`\`\`
`;

export default content;
