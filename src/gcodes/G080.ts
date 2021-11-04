
const content = `# G80 - Cancel Current Motion Mode
## Cancel the current motion mode
### Usage
\`\`\`plaintext
 G80 
\`\`\`


### Description

Cancels the current motion mode (G0 G1 G2 G3 G5 G38.X). With \`GCODE_MOTION_MODES\` enabled, Marlin will remember the last used motion mode which can then be canceled with \`G80\`.


### Notes
- Requires \`GCODE_MOTION_MODES\`.

### Examples
'Cancel motion mode G1'
\`\`\`gcode

       G0 ; sets motion mode to G0
       X10 Y10 ; moves to X10 Y10 in motion mode G0
       G80 ; cancels the current motion mode
       X20 Y20 ; returns unknown command
---
\`\`\`
`;

export default content;
