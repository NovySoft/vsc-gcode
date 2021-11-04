
const content = `# M7219 - MAX7219 Control
## Control Max7219 Segmented LEDs
### Usage
\`\`\`plaintext
 M7219  [C<column>] [D<row>] [F<flag>] [I<flag>] [P<flag>] [R<row>] [U<index>] [V<bits>] [X<index>] [Y<index>]
\`\`\`

- \`[C<column>]\`: Set the column specified by \`C\` to bit pattern \`V\`.
- \`[D<row>]\`: Directly set a Max7219 native row (on the unit specified by \`U\`) to the 8-bit pattern \`V\`.
- \`[F<flag>]\`: Fill the matrix by turning on all LEDs.
- \`[I<flag>]\`: Initialize (clear) all matrixes.
- \`[P<flag>]\`: Print the LED array state for debugging.
- \`[R<row>]\`: Set the row specified by \`R\` to bit pattern \`V\`.
- \`[U<index>]\`: Used with \`D\` to specify which matrix unit to set.
- \`[V<bits>]\`: Value to apply when using the \`C\`, \`R\`, or \`X\`/\`Y\` parameters.
- \`[X<index>]\`: Set a matrix LED at the given \`X\` position to the \`V\` value. If no \`V\` is given, toggle the LED state.
- \`[Y<index>]\`: Set a matrix LED at the given \`Y\` position to the \`V\` value. If no \`V\` is given, toggle the LED state.

### Description

Set the state of one or more Max7219 matrix displays or 7-segment digital displays.

`;

export default content;
