
const content = `# M380 - Activate Solenoid
## Activate
### Usage
\`\`\`plaintext
 M380  [S<index>]
\`\`\`

- \`[S<index>]\`: Solenoid index (Requires \`MANUAL_SOLENOID_CONTROL\`)

### Description

Activate the solenoid on the active extruder.


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
       T0   ; Extruder 0
       M380 ; Activate the E0 solenoid
  
\`\`\`
\`\`\`gcode
 M381 S1 ; Activate solenoid 1
\`\`\`
`;

export default content;
