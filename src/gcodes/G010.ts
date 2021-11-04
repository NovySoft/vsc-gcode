
const content = `# G10 - Retract
## Retract the filament
### Usage
\`\`\`plaintext
 G10  [S<bool>]
\`\`\`

- \`[S<bool>]\`: Use \`G10 S1\` to do a swap retraction, before changing extruders. The subsequent [G11](https://marlinfw.org/docs/gcode/G011.html) (after tool change) will do a swap recover. (Requires \`EXTRUDERS\` > 1)

### Description

Retract the filament according to settings of [M207](https://marlinfw.org/docs/gcode/M207.html).

Firmware retraction allows you to tune retraction at the machine level and can significantly reduce the size of G-code files.

Multiple consecutive \`G10\` or \`G10 S1\` commands without a corresponding [G11](https://marlinfw.org/docs/gcode/G011.html) or \`G11 S1\` will be ignored.

Performs two moves: a retract move at the retract feedrate/acceleration, and an optional Z lift at the maximum Z feedrate (travel acceleration).


### Notes
- Requires \`FWRETRACT\`.
- See related codes [G11](https://marlinfw.org/docs/gcode/G011.html), [M207](https://marlinfw.org/docs/gcode/M207.html), [M208](https://marlinfw.org/docs/gcode/M208.html), and [M209](https://marlinfw.org/docs/gcode/M209.html).

### Examples
\`\`\`gcode

       G10 ; retract
---
\`\`\`
`;

export default content;
