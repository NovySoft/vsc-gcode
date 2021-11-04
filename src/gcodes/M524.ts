
const content = `# M524 - Abort SD print
## Abort an SD print started with [M24](https://marlinfw.org/docs/gcode/M024.html)
### Usage
\`\`\`plaintext
 M524 
\`\`\`


### Description

Abort an SD print in progress and turn off all heaters.


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card)

### Examples
Abort an SD print
\`\`\`gcode
 M524
\`\`\`
`;

export default content;
