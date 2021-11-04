
const content = `# M302 - Cold Extrude
## Set minimum extrusion temperature, allow cold extrusion.
### Usage
\`\`\`plaintext
 M302  [P<flag>] [S<temp>]
\`\`\`

- \`[P<flag>]\`: Flag to allow extrusion at any temperature
- \`[S<temp>]\`: Minimum temperature for safe extrusion

### Description

Set the minimum extrusion temperature, potentially allowing E movement at temperatures below the melting point of the material.


### Examples
Some common uses...
\`\`\`gcode
 |
      M302         ; report current cold extrusion state
      M302 P0      ; enable cold extrusion checking
      M302 P1      ; disable cold extrusion checking
      M302 S0      ; always allow extrusion (disable checking)
      M302 S170    ; only allow extrusion above 170
      M302 S170 P1 ; set min extrude temp to 170 but leave disabled
\`\`\`
`;

export default content;
