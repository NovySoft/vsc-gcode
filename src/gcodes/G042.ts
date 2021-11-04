
const content = `# G42 - Move to mesh coordinate
## Move to a specific point in the leveling mesh
### Usage
\`\`\`plaintext
 G42  [F<rate>] [I<pos>] [J<pos>]
\`\`\`

- \`[F<rate>]\`: The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.
- \`[I<pos>]\`: The column of the mesh coordinate
- \`[J<pos>]\`: The row of the mesh coordinate

### Description

The \`G42\` command moves the nozzle to the location corresponding to a specific coordinate in the bed leveling mesh. It operates similarly to the [G0](https://marlinfw.org/docs/gcode/G000-G001.html) and [G1](https://marlinfw.org/docs/gcode/G000-G001.html) commands except that the provided coordinates are a mesh row and column instead of an absolute or relative position on the bed.

The \`G42\` command will determine the bed position that corresponds to the provided mesh row and column and move the nozzle to that position.


### Examples
Move to various points on a 9x9 mesh
\`\`\`gcode

       G42 I0 J0 ; front left corner
       G42 I4 J4 ; center
       G42 I4 J8 ; back center
       G42 I8 J8 ; back right
\`\`\`
`;

export default content;
