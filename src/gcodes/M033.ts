
const content = `# M33 - Get Long Path
## Convert a short pathname to a long pathname.
### Usage
\`\`\`plaintext
 M33  undefined>
\`\`\`

- \`undefined>\`: 


### Description

Get the long name for a file based on the DOS 8.3 path.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card) and \`LONG_FILENAME_HOST_SUPPORT\`

### Examples
\`\`\`gcode

       M33 funstuff/mask.gco
  
\`\`\`
\`\`\`gcode

       FunStuff/Mask.gcode
\`\`\`
`;

export default content;
