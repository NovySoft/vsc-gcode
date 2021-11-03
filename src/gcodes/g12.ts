const content = `
## G12 - Clean the Nozzle
### Usage
\`\`\`plaintext
G12 [P<0|1|2>] [R<radius>] [S<count>] [T<count>] [X] [Y] [Z]
\`\`\`

- \`[P<0|1|2>]\`: Pattern style selection
    - \`P0\`: Stroke straight back and forth
    - \`P1\`: Move in a zigzag pattern
    - \`P2\`: Move in a circular pattern

- \`[R<radius>]\`: Radius of nozzle cleaning circle
- \`[S<count>]\`: Number of repetitions of the pattern
- \`[T<count>]\`: Number of triangles in the zigzag pattern
- \`[X]\`: Include X motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)
- \`[Y]\`: Include Y motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)
- \`[Z]\`: Include Z motion when cleaning with limited axes. (Leave out X, Y, and Z for non-limited cleaning.)

### Description

Start the nozzle cleaning process. Three types of cleaning patterns are supported: straight strokes, zigzags and circles. This feature requires a dedicated cleaning area on or outside the bed, but within reach of the nozzle. The pattern may be repeated as many times as desired.

### Notes

- Default behavior is defined by \`NOZZLE_CLEAN_STROKES\`, \`NOZZLE_CLEAN_START_POINT\`, \`NOZZLE_CLEAN_END_POINT\`, \`NOZZLE_CLEAN_TRIANGLES\`, \`NOZZLE_CLEAN_CIRCLE_MIDDLE\`, \`NOZZLE_CLEAN_CIRCLE_RADIUS\` and \`NOZZLE_CLEAN_GOBACK\`.
- With \`NOZZLE_CLEAN_GOBACK\` enabled, the nozzle automatically returns to the XYZ position before \`G12\`.
`;
export default content;