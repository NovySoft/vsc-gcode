
const content = `# G27 - Park toolhead
## Park the current toolhead
### Usage
\`\`\`plaintext
 G27  [P<0|undefined|undefined|undefined|1|undefined|undefined|2|undefined>]
\`\`\`

- \`[P<0|undefined|undefined|undefined|1|undefined|undefined|2|undefined>]\`: 
  - \`P0\`: If current Z
  - \`Pundefined\`: undefined
  - \`Pundefined\`: undefined
  - \`Pundefined\`: undefined
  - \`P1\`: No matter the current Z
  - \`Pundefined\`: undefined
  - \`Pundefined\`: undefined
  - \`P2\`: The nozzle height will be raised by Z
  - \`Pundefined\`: undefined


### Description

Park the nozzle at a predefined XYZ position.


### Notes
- Requires \`NOZZLE_PARK_FEATURE\`.
- The park position is defined by \`NOZZLE_PARK_POINT\`.

### Examples
The most basic example is to use the command without any arguments, which raises Z by the default distance and moves to the parking position.
\`\`\`gcode
 G27 ; Raise Z if lower
  
\`\`\`
This one is useful as an end script, simply raising Z and parking.
\`\`\`gcode
 G27 P2 ; Always raise Z
\`\`\`
`;

export default content;
