
const content = `# M207 - Set Firmware Retraction
## Set options for firmware-based retraction.
### Usage
\`\`\`plaintext
 M207  [F<feedrate>] [S<length>] [W<length>] [Z<length>]
\`\`\`

- \`[F<feedrate>]\`: Retract feedrate (units/min)
- \`[S<length>]\`: Retract length
- \`[W<length>]\`: Retract swap length (multi-extruder)
- \`[Z<length>]\`: Z lift on retraction

### Description

Set lengths, feedrate, and Z lift for firmware-based retraction. See parameters below.


### Notes
- Requires \`FWRETRACT\`.
- See related codes [G10](https://marlinfw.org/docs/gcode/G010.html), [G11](https://marlinfw.org/docs/gcode/G010.html), [M208](https://marlinfw.org/docs/gcode/M208.html), and [M209](https://marlinfw.org/docs/gcode/M209.html).
`;

export default content;
