
const content = `# M211 - Software Endstops
## Set and/or get the software endstops state
### Usage
\`\`\`plaintext
 M211  [S<flag>]
\`\`\`

- \`[S<flag>]\`: Software endstops state (S1=enable S0=disable)

### Description

Optionally enable/disable software endstops, then report the current state.

With software endstops enabled, moves will be clipped to the physical boundaries from \`[XYZ]_MIN_POS\` to \`[XYZ]_MAX_POS\`.


### Notes
- Requires either \`MIN_SOFTWARE_ENDSTOPS\` or \`MAX_SOFTWARE_ENDSTOPS\` for the enable option.

### Examples
`;

export default content;
