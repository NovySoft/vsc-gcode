
const content = `# M381 - Deactivate Solenoids
## Deactivate all extruder solenoids
### Usage
\`\`\`plaintext
 M381  [S<index>]
\`\`\`

- \`[S<index>]\`: Solenoid index (Requires \`MANUAL_SOLENOID_CONTROL\`)

### Description

Deactivate all solenoids on all extruders.


### Notes

parameters:
-
    tag: S
    optional: true
    since: 2.0.0
    requires: MANUAL_SOLENOID_CONTROL
    description: Solenoid index (Requires \`MANUAL_SOLENOID_CONTROL\`)
    values:
-
        tag: index
        type: int

### Examples
\`\`\`gcode
 M381 ; Deactivate all solenoids
  
\`\`\`
\`\`\`gcode
 M381 S1 ; Deactivate solenoid 1
\`\`\`
`;

export default content;
