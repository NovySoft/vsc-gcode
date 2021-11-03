const content = `
## G4 - Dwell
### Usage

\`\`\`text
G4 [P<time \(ms\)>] [S<time \(sec\)>]
\`\`\`

- \`[P<time (ms)>]\`: Amount of time to dwell
- \`[S<time (sec)>]\`: Amount of time to dwell

### Description

Dwell pauses the command queue and waits for a period of time.

### Notes

- If both \`S\` and \`P\` are included, \`S\` takes precedence.
- \`M0\`/\`M1\` provides an interruptible "dwell" (Marlin 1.1.0 and up).'
- \`G4\` with no arguments is effectively the same as \`M400\`.
`;

export default content;