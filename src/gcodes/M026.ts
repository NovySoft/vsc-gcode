
const content = `# M26 - Set SD position
## Set the SD read position
### Usage
\`\`\`plaintext
 M26  [S<pos>]
\`\`\`

- \`[S<pos>]\`: Next file read position to set

### Description

Set the next read position in the open SD file.


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card)
`;

export default content;
