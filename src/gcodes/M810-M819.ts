
const content = `# M810/M811/M812/M813/M814/M815/M816/M817/M818/M819 - G-code macros
## Set/execute one of ten G-code macros
### Usage
\`\`\`plaintext
 M810/M811/M812/M813/M814/M815/M816/M817/M818/M819  [undefined>]
\`\`\`

- \`[undefined>]\`: 


### Description

Use the \`M810\`-\`M819\` commands to set and execute 10 distinct G-code "macros." Put anything after the command to define its macro. To run the macro just send \`M810\`-\`M819\` by itself. Multiple commands in one macro are separated by the pipe character ('\`|\`').


### Notes
- Requires \`GCODE_MACROS\`.

### Examples
Define Macro 5 to do some moves and make a beep
\`\`\`gcode

       M815 G0 X0 Y0|G0 Z10|M300 S440 P50
  
\`\`\`
Run Macro 5
\`\`\`gcode

       M815
---
\`\`\`
`;

export default content;
