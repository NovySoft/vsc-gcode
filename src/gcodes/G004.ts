
const content = `# G4 - Dwell
## Pause the planner
### Usage
\`\`\`plaintext
 G4  [P<time (ms)>] [S<time (sec)>]
\`\`\`

- \`[P<time (ms)>]\`: Amount of time to dwell
- \`[S<time (sec)>]\`: Amount of time to dwell

### Description

Dwell pauses the command queue and waits for a period of time.


### Notes
- If both \`S\` and \`P\` are included, \`S\` takes precedence.
- '[M0](https://marlinfw.org/docs/gcode/M000-M001.html)/[M1](https://marlinfw.org/docs/gcode/M000-M001.html) provides an interruptible "dwell" (Marlin 1.1.0 and up).'
- '\`G4\` with no arguments is effectively the same as [M400](https://marlinfw.org/docs/gcode/M400.html).'

### Examples
\`\`\`gcode

       G4 P500 ; Dwell for 1/2 second

\`\`\`
`;

export default content;
