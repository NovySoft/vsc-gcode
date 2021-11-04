
const content = `# M502 - Factory Reset
## Restore all settings to factory defaults.
### Usage
\`\`\`plaintext
 M502 
\`\`\`


### Description

Reset all configurable settings to their factory defaults.

To also reset settings in EEPROM, follow with [M500](https://marlinfw.org/docs/gcode/M500.html).


### Notes
- This command can be used even if \`EEPROM_SETTINGS\` is disabled.

### Examples
Reset settings and save them to EEPROM
\`\`\`gcode

       M502 ; reset
       M500 ; saved
\`\`\`
`;

export default content;
