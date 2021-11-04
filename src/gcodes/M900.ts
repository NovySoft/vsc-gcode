
const content = `# M900 - Linear Advance Factor
## Get and set Linear Advance K value
### Usage
\`\`\`plaintext
 M900  [undefined>]
\`\`\`

- \`[undefined>]\`: 


### Description

This command sets and/or reports the Linear Advance K factors.

Setting the K factor to 0 disables Linear Advance.

With the \`EXTRA_LIN_ADVANCE_K\` option Marlin maintains two slots for each extruder. The first slot is set with \`K\` and the second slot is set with \`L\`, then select the first using \`S0\` and the second using \`S1\`.


### Examples
Fetch the K factor
\`\`\`gcode
 M900
  
\`\`\`
Set the K factor
\`\`\`gcode
 M900 K0.18
  
\`\`\`
Disable Linear Advance
\`\`\`gcode
 M900 K0
  
\`\`\`
"\`EXTRA_LIN_ADVANCE_K\` adds an extra storage slot."
\`\`\`gcode
 |
      M900 S0            ; Select main K factor and apply it
      M900 T2 K0.22 L0.4 ; Set both T2 K factors. K0.22 will be applied.
      M900 T2 S1         ; Select extra K factor. L0.4 will be applied.
      M900 T2 S1         ; (does nothing this time)
      M900 T2 L0.3       ; Set T2 extra (and active) K factor
      ...
      M900 T2 S0         ; Select main K factor (0.22)
\`\`\`
`;

export default content;
