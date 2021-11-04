
const content = `# M0/M1 - Unconditional stop
## Stop and wait for user
### Usage
\`\`\`plaintext
 M0/M1  [P<ms>] [S<sec>]
\`\`\`

- \`[P<ms>]\`: Expire time, in milliseconds
- \`[S<sec>]\`: Expire time, in seconds

### Description

The \`M0\` and \`M1\` commands pause after the last movement and wait for the user to continue. \`M1\` is a deprecated alias for \`M0\`.


### Notes
- If both \`S\` and \`P\` are included, \`S\` takes precedence.
- Without an LCD controller or \`EMERGENCY_PARSER\` this command is ignored.
- With \`EMERGENCY_PARSER\` enabled the [M108](https://marlinfw.org/docs/gcode/M108.html) command can be used to continue.

### Examples
\`\`\`gcode

       M0
\`\`\`
`;

export default content;
