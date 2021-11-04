
const content = `# M665 - Delta Configuration
## Set delta geometry values
### Usage
\`\`\`plaintext
 M665  [A<float>] [B<linear>] [B<float>] [C<float>] [H<linear>] [L<linear>] [R<linear>] [S<float>] [X<float>] [Y<float>] [Z<float>]
\`\`\`

- \`[A<float>]\`: Alpha (Tower 1) diagonal rod trim
- \`[B<linear>]\`: Delta calibration radius
- \`[B<float>]\`: Beta  (Tower 2) diagonal rod trim
- \`[C<float>]\`: Gamma (Tower 3) diagonal rod trim
- \`[H<linear>]\`: Delta height
- \`[L<linear>]\`: Diagonal rod
- \`[R<linear>]\`: Delta radius
- \`[S<float>]\`: Segments per second
- \`[X<float>]\`: Alpha (Tower 1) angle trim
- \`[Y<float>]\`: Beta (Tower 2) angle trim
- \`[Z<float>]\`: Gamma (Tower 3) angle trim

### Description

Delta machines are very fast and accurate when tuned. The first key is to make sure all your dimensions are set correctly. Even small errors in these values can lead to curved movements and failed prints. To ensure the best delta experience, use this command in conjunction with [G33](https://marlinfw.org/docs/gcode/G033.html) to get these dimensions set perfectly before beginning to print.

`;

export default content;
