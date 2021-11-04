
const content = `# M33 - Get Long Path
## Convert a short pathname to a long pathname.
### Usage
\`\`\`plaintext
 M33  path<string>
\`\`\`

- \`path<string>\`: DOS 8.3 path to a file or folder

### Description

Get the long name for a file based on the DOS 8.3 path.


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card) and \`LONG_FILENAME_HOST_SUPPORT\`

### Examples
Get the long path for a file
\`\`\`gcode

       M33 funstuff/mask.gco
  
\`\`\`
Output
\`\`\`gcode

       FunStuff/Mask.gcode
\`\`\`
`;

export default content;
