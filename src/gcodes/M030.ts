
const content = `# M30 - Delete SD file
## Delete a specified file from SD.
### Usage
\`\`\`plaintext
 M30  filename<string>
\`\`\`

- \`filename<string>\`: The filename of the file to delete.

### Description

Delete a file from the SD card.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)

### Examples
Delete the file "/path/to/file.gco"
\`\`\`gcode
 M30 /path/to/file.gco
\`\`\`
`;

export default content;
