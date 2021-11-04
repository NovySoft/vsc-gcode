
const content = `# G17/G18/G19 - CNC Workspace Planes
## Select CNC workspace plane
### Usage
\`\`\`plaintext
 G17/G18/G19 
\`\`\`


### Description

Select workspace plane XY, ZX, or YZ. Allows [G2/G3](https://marlinfw.org/docs/gcode/G002-G003.html) and [G5](https://marlinfw.org/docs/gcode/G005.html) to operate in the selected plane when \`CNC_WORKSPACE_PLANES\` is enabled.


### Notes
- Requires \`CNC_WORKSPACE_PLANES\`.

### Examples
Select Plane XY
\`\`\`gcode
 G17
  
\`\`\`
Select Plane ZX
\`\`\`gcode
 G18
  
\`\`\`
Select Plane YZ
\`\`\`gcode
 G19
\`\`\`
`;

export default content;
