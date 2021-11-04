
const content = `# M22 - Release SD card
## Simulate ejection of the SD card
### Usage
\`\`\`plaintext
 M22 
\`\`\`


### Description

If Marlin gets confused about the state of the SD card, this command can be used to simulate an ejection of the SD card.

Re-insert the SD card or use [M21](https://marlinfw.org/docs/gcode/M021.html) to enable the SD card following [M22](https://marlinfw.org/docs/gcode/M022.html).


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card)

### Examples
`;

export default content;
