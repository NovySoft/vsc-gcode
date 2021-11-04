
const content = `# G90 - Absolute Positioning
## Set the interpreter to absolute positions
### Usage
\`\`\`plaintext
 G90 
\`\`\`


### Description

In absolute mode all coordinates given in G-code are interpreted as positions in the logical coordinate space. This includes the extruder position unless overridden by [M83](https://marlinfw.org/docs/gcode/M083.html).


### Notes
- Absolute positioning is the default.

### Examples
Enable absolute mode
\`\`\`gcode

       G90 ; Set all axes to absolute
\`\`\`
`;

export default content;
