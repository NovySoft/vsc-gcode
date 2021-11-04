
const content = `# M908 - Set Trimpot Pins
## Set a digital trimpot directly
### Usage
\`\`\`plaintext
 M908  P<address> S<current>
\`\`\`

- \`P<address>\`: Pin (i.e., Address, Channel)
- \`S<current>\`: Current value

### Description

Set the digital trimpot current directly by address/channel/pin index. \`DAC_STEPPER_CURRENT\` pertains to the MCP4728.

`;

export default content;
