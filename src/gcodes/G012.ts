
const content = `# G12 - Clean the Nozzle
## Perform the nozzle cleaning procedure.
### Usage
\`\`\`plaintext
 G12  [P<0|1|2>] [R<radius>] [S<count>] [T<count>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[P<0|1|2>]\`: 
  - \`P0\`: Stroke straight back and forth
  - \`P1\`: Move in a zigzag pattern
  - \`P2\`: Move in a circular pattern

- \`[R<radius>]\`: Radius of nozzle cleaning circle
- \`[S<count>]\`: Number of repetitions of the pattern
- \`[T<count>]\`: Number of triangles in the zigzag pattern
- \`[X<flag>]\`: Include X motion when cleaning with limited axes. (Leave out \`X\`, \`Y\`, and \`Z\` for non-limited cleaning.)
- \`[Y<flag>]\`: Include Y motion when cleaning with limited axes. (Leave out \`X\`, \`Y\`, and \`Z\` for non-limited cleaning.)
- \`[Z<flag>]\`: Include Z motion when cleaning with limited axes. (Leave out \`X\`, \`Y\`, and \`Z\` for non-limited cleaning.)

### Description

Start the nozzle cleaning process. Three types of cleaning patterns are supported: straight strokes, zigzags and circles. This feature requires a dedicated cleaning area on or outside the bed, but within reach of the nozzle. The pattern may be repeated as many times as desired.


### Notes
- Default behavior is defined by \`NOZZLE_CLEAN_STROKES\`, \`NOZZLE_CLEAN_START_POINT\`, \`NOZZLE_CLEAN_END_POINT\`, \`NOZZLE_CLEAN_TRIANGLES\`, \`NOZZLE_CLEAN_CIRCLE_MIDDLE\`, \`NOZZLE_CLEAN_CIRCLE_RADIUS\` and \`NOZZLE_CLEAN_GOBACK\`.
- With \`NOZZLE_CLEAN_GOBACK\` enabled, the nozzle automatically returns to the XYZ position before \`G12\`.

### Examples
The most basic example is to use the command without any arguments, this will default to a stroke based pattern which will be stroked \`NOZZLE_CLEAN_STROKES\` times.
\`\`\`gcode
 G12 ; stroke pattern (default)
  
\`\`\`
To generate a three triangle zig-zag pattern which will be stroked one time use the following command.
\`\`\`gcode
 G12 P1 S1 T3 ; zig-zag pattern with 3 triangles
  
\`\`\`
To generate a 10mm radius circle which will be stroked one time use the following command.
\`\`\`gcode
 G12 P2 S1 R10 ; 10mm circle
\`\`\`
`;

export default content;
