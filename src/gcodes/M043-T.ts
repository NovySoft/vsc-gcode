
const content = `# M43 T - Toggle Pins
## Get information about pins.
### Usage
\`\`\`plaintext
 M43 T  [I<bool>] [L<pin>] [R<count>] [S<pin>] [W<time>]
\`\`\`

- \`[I<bool>]\`: Flag to ignore Marlin's pin protection. **Use with caution!!!!**
- \`[L<pin>]\`: End Pin number. If not given, will default to last pin defined for this board
- \`[R<count>]\`: Repeat pulses on each pin this number of times before continuing to next pin. If not given will default to 1.
- \`[S<pin>]\`: Start Pin number. If not given, will default to 0
- \`[W<time>]\`: Wait time (in milliseconds) transitions. If not given will default to 500.

### Description

The \`M43 T\` command toggles one or more pins.


### Notes
- Requires \`PINS_DEBUGGING\`. This feature should be disabled for production use.
- See [M43](https://marlinfw.org/docs/gcode/M043.html) for other pins debug options.

### Examples
Toggle pins 3-6 five times with 1 second low and 1 second high pulses but only if the pin isn't in the protected list.
\`\`\`gcode
 M43 T S3 L6 R5 W1000
\`\`\`
`;

export default content;
