
const content = `# M110 - Set Line Number
## Set the current line number.
### Usage
\`\`\`plaintext
 M110  N<line>
\`\`\`

- \`N<line>\`: Line number

### Description

Hosts can use [M110](https://marlinfw.org/docs/gcode/M110.html) to set the current line number in a print job. Each line number sent by a host must be one higher than the previous line number, or the firmware will ignore the line and send an error requesting a resend of the missing line. This is one technique Marlin uses to keep in sync with hosts.


### Notes
- 'All these are valid: \`N100 M110\`, \`M110 N100\`, \`N101 M110 N100\`.'
`;

export default content;
