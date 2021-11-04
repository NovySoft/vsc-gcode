
const content = `# G35 - Tramming Assistant
## Run a procedure to tram the bed
### Usage
\`\`\`plaintext
 G35  [S<30|31|40|41|50|51>]
\`\`\`

- \`[S<30|31|40|41|50|51>]\`: 
  - \`S30\`: M3 clockwise
  - \`S31\`: M3 counterclockwise
  - \`S40\`: M4 clockwise
  - \`S41\`: M4 counterclockwise
  - \`S50\`: M5 clockwise
  - \`S51\`: M5 counterclockwise


### Description

This command runs an interactive procedure to help you adjust the bed corners so that the bed is as true to the machine frame as possible. This is an important step in calibrating your printer and getting the best first layer results.


### Notes
- Requires \`ASSISTED_TRAMMING\`.

### Examples
'Tram a bed with M4 clockwise screws'
\`\`\`gcode

       G35 S40

\`\`\`
`;

export default content;
