
const content = `# M500 - Save Settings
## Save settings to EEPROM.
### Usage
\`\`\`plaintext
 M500 
\`\`\`


### Description

Save all configurable settings to EEPROM.


### Notes
- Requires \`EEPROM_SETTINGS\`.
- Since Marlin 1.1.0 only changed bytes are written to prolong EEPROM life.

### Examples
Save settings
\`\`\`gcode
 M500
\`\`\`
`;

export default content;
