
const content = `# M413 - Power-loss Recovery
## Enable / disable power-loss recovery
### Usage
\`\`\`plaintext
 M413  [S<bool>]
\`\`\`

- \`[S<bool>]\`: Flag to enable or disable Power-loss Recovery. If omitted, the current enabled state will be reported.

### Description

Enable or disable the **Power-loss Recovery** feature. When this feature is enabled, the state of the current print job (SD card only) will be saved to a file on the SD card. If the machine crashes or a power outage occurs, the firmware will present an option to Resume the interrupted print job. In Marlin 2.0 the \`POWER_LOSS_RECOVERY\` option must be enabled.

This feature operates without a power-loss detection circuit by writing to the recovery file periodically (e.g., once per layer), or if a \`POWER_LOSS_PIN\` is configured then it will write the recovery info only when a power-loss is detected. The latter option is preferred, since constant writing to the SD card can shorten its life, and the print will be resumed where it was interrupted rather than repeating the last layer. (Future implementations may allow use of the EEPROM or the on-board SD card.)


### Notes
- Requires \`POWER_LOSS_RECOVERY\` and an LCD controller.

### Examples
Enable power-loss recovery
\`\`\`gcode
 M413 S1
  
\`\`\`
Disable power-loss recovery
\`\`\`gcode
 M413 S0
  
\`\`\`
Report power-loss recovery state
\`\`\`gcode
 |
      M413
      Power-loss recovery ON
\`\`\`
`;

export default content;
