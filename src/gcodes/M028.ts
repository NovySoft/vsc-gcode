
const content = `# M28 - Start SD write
## Start writing to a file on the SD card
### Usage
\`\`\`plaintext
 M28  [B1<flag>] filename<string>
\`\`\`

- \`[B1<flag>]\`: Set an optimized binary file transfer mode. (Requires \`BINARY_FILE_TRANSFER\`)
- \`filename<string>\`: File name to write

### Description

This command starts a file write. All commands received by Marlin are written to the file and are not executed until [M29](https://marlinfw.org/docs/gcode/M029.html) closes the file.

With 'B1', set an optimized binary file transfer mode. (Requires \`BINARY_FILE_TRANSFER\`)


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card)
- Use [M928](https://marlinfw.org/docs/gcode/M928.html) to log commands to a file during printing.

### Examples
Start writing to file.txt
\`\`\`gcode
 M28 file.txt
  
\`\`\`
Start binary writing to file.txt
\`\`\`gcode
 M28 B1 file.txt
\`\`\`
`;

export default content;
