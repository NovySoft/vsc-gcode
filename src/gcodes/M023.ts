
const content = `# M23 - Select SD file
## Select an SD file to be executed
### Usage
\`\`\`plaintext
 M23  filename<string>
\`\`\`

- \`filename<string>\`: The filename of the file to open.

### Description

Select an SD file for printing or processing. Follow with [M24](https://marlinfw.org/docs/gcode/M024.html) to run the selected file.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)

### Examples
Select a file and start it
\`\`\`gcode
 |
      > M23 /musicg\~1/jingle.gco
      Now fresh file: /musicg\~1/jingle.gco
      > M24
\`\`\`
`;

export default content;
