
const content = `# M117 - Set LCD Message
## Set the message line on the LCD.
### Usage
\`\`\`plaintext
 M117  [undefined>]
\`\`\`

- \`[undefined>]\`: 


### Description

Set the status line message on the LCD.


### Notes
- Requires an LCD controller.
- The message should appear immediately, but it will depend on LCD settings.

### Examples
Set the message to "Hello World!"
\`\`\`gcode
 M117 Hello World!
\`\`\`
`;

export default content;
