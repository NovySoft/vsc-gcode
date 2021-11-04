
const content = `# M80 - Power On
## Turn on the power supply
### Usage
\`\`\`plaintext
 M80  [undefined>]
\`\`\`

- \`[undefined>]\`: 


### Description

Turn on the high-voltage power supply. Requires a board that's powered from USB or another 5V source.


### Notes
- A \`PS_ON_PIN\` is also required. Check your board's pins file for the default.
- For Marlin 1.1.9 and earlier this feature is enabled by \`POWER_SUPPLY\`.
- Some octoprint plugins filter out M80/M81. If M80 does not work, use a plain serial terminal first prior reporting a bug.

### Examples
\`\`\`gcode
 M80 ; power on
\`\`\`
`;

export default content;
