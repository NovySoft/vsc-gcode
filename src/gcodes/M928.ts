
const content = `# M928 - Start SD Logging
## Log serial input to an SD file
### Usage
\`\`\`plaintext
 M928  filename<string>
\`\`\`

- \`filename<string>\`: File name of log file

### Description

Use this command to start logging all console and host input to an SD file while still operating the machine.


### Examples
Start logging to log.txt
\`\`\`gcode
 M928 log.txt
\`\`\`
`;

export default content;
