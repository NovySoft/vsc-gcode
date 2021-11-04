
const content = `# M381 - Deactivate Solenoids
## Deactivate all extruder solenoids
### Usage
\`\`\`plaintext
 M381  [S<index>]
\`\`\`

- \`[S<index>]\`: Solenoid index (Requires \`MANUAL_SOLENOID_CONTROL\`)

### Description

Deactivate all solenoids on all extruders.


### Examples
\`\`\`gcode
 M381 ; Deactivate all solenoids
  
\`\`\`
\`\`\`gcode
 M381 S1 ; Deactivate solenoid 1
\`\`\`
`;

export default content;
