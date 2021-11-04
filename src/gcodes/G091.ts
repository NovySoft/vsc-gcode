
const content = `# G91 - Relative Positioning
## Set the interpreter to relative positions
### Usage
\`\`\`plaintext
 G91 
\`\`\`


### Description

Set relative position mode. In this mode all coordinates are interpreted as relative to the last position. This includes the extruder position unless overridden by [M82](https://marlinfw.org/docs/gcode/M082.html).


### Examples
Enable relative mode
\`\`\`gcode

       G91 ; Set all axes to relative
\`\`\`
`;

export default content;
