
const content = `# M913 - Set Hybrid Threshold Speed
## TMC driver switching to spreadCycle
### Usage
\`\`\`plaintext
 M913  [E<int>] [I<int (index)>] [T<int (index)>] [X<int>] [Y<int>] [Z<int>]
\`\`\`

- \`[E<int>]\`: Set \`E0_HYBRID_THRESHOLD\` and \`E1_HYBRID_THRESHOLD\` and \`E2_HYBRID_THRESHOLD\` and \`E3_HYBRID_THRESHOLD\` to the provided value.
- \`[I<int (index)>]\`: (>=1.1.9) Index for dual steppers. Use \`I1\` for X2, Y2, and/or Z2.
- \`[T<int (index)>]\`: (>=1.1.9) Index (tool) number for the E axis. If not specified, the E0 extruder.
- \`[X<int>]\`: Set \`X_HYBRID_THRESHOLD\` and \`X2_HYBRID_THRESHOLD\` to the provided value.
- \`[Y<int>]\`: Set \`Y_HYBRID_THRESHOLD\` and \`Y2_HYBRID_THRESHOLD\` to the provided value.
- \`[Z<int>]\`: Set \`Z_HYBRID_THRESHOLD\` and \`Z2_HYBRID_THRESHOLD\` to the provided value.

### Description

When \`HYBRID_THRESHOLD\` is enabled, the TMC driver is switched from the quieter StealthChop to spreadCycle when the feed rate for a given stepper motor is over its \`_HYBRID_THRESHOLD\`.

### Individual Threshold Values
- \`X_HYBRID_THRESHOLD\`
- \`X2_HYBRID_THRESHOLD\`
- \`Y_HYBRID_THRESHOLD\`
- \`Y2_HYBRID_THRESHOLD\`
- \`Z_HYBRID_THRESHOLD\`
- \`Z2_HYBRID_THRESHOLD\`
- \`E0_HYBRID_THRESHOLD\`
- \`E1_HYBRID_THRESHOLD\`
- \`E2_HYBRID_THRESHOLD\`
- \`E3_HYBRID_THRESHOLD\`
- \`E4_HYBRID_THRESHOLD\`


### Notes
- At least one parameter must be used.
- Setting \`X\`, \`Y\`, \`Z\`, or \`E\` will set the hybrid threshold for all motors that fall under that category that have the \`_IS_TRINAMIC\` flag set.  See examples below.

### Examples
'In this case, assume that \`X_IS_TRINAMIC\` and \`X2_IS_TRINAMIC\` are both enabled in \`Configuration_adv.h\`. '
\`\`\`gcode
 M913 X100
\`\`\`
'Both \`X_HYBRID_THRESHOLD\` and \`X2_HYBRID_THRESHOLD\` are set to 100.'

`;

export default content;
