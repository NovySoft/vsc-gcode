
const content = `# G27 - Park toolhead
## Park the current toolhead
### Usage
\`\`\`plaintext
 G27  [P<0|1|2>]
\`\`\`

- \`[P<0|1|2>]\`: 
  - \`P0\`: If current Z_pos is lower than Z_park then the nozzle will be raised to reach Z_park height
  - \`P1\`: No matter the current Z_pos, the nozzle will be raised/lowered to reach Z_park height
  - \`P2\`: The nozzle height will be raised by Z_park amount but never going over the machine's limit of \`Z_MAX_POS\`


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
