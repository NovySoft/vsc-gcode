const content = `
## G11 - Recover
### Usage
\`G11\`

### Description
Unretract (i.e., recover, prime) the filament according to settings of [\`M208\`](https://marlinfw.org/docs/gcode/M208.html).
Multiple consecutive \`G11\` or \`G11 S1\` commands without a corresponding [\`G10\`](https://marlinfw.org/docs/gcode/G010.html) or \`G10 S1\` will be ignored.
"Performs two moves: An optional Z lower at the maximum Z feedrate (travel acceleration), and a recovery move at the recover feedrate (retract acceleration)."

### Notes
Requires \`FWRETRACT\`.
`;

export default content;