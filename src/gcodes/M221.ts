
const content = `# M221 - Set Flow Percentage
## Set the flow percentage, which applies to all E moves.
### Usage
\`\`\`plaintext
 M221  S<percent> [T<index>]
\`\`\`

- \`S<percent>\`: Feedrate percentage
- \`[T<index>]\`: Target extruder (requires multi-extruder). Default is the active extruder.

### Description

Set the flow percentage, which applies to all E moves added to the planner.


### Examples
Set the flow rate to 150%.
\`\`\`gcode
 M221 S150
\`\`\`
`;

export default content;
