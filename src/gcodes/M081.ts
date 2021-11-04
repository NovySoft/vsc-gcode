
const content = `# M81 - Power Off
## Turn off the power supply.
### Usage
\`\`\`plaintext
 M81 
\`\`\`


### Description

Turn off the high-voltage power supply. If the board is not powered from another source, this may also shut down the electronics.


### Notes
- A \`PS_ON_PIN\` is also required. Check your board's pins file for the default.
- For Marlin 1.1.9 and earlier this feature is enabled by \`POWER_SUPPLY\`.

### Examples
\`\`\`gcode
 M81 ; power off
\`\`\`
`;

export default content;
