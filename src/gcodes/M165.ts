
const content = `# M165 - Set Mix
## Set all mix factors for the mixing extruder.
### Usage
\`\`\`plaintext
 M165  [A<factor>] [B<factor>] [C<factor>] [D<factor>] [H<factor>] [I<factor>]
\`\`\`

- \`[A<factor>]\`: Mix factor 1
- \`[B<factor>]\`: Mix factor 2
- \`[C<factor>]\`: Mix factor 3
- \`[D<factor>]\`: Mix factor 4
- \`[H<factor>]\`: Mix factor 5
- \`[I<factor>]\`: Mix factor 6

### Description

Set the mix for the active virtual extruder all at once. Any factors left out are set to 0.0. This is based on a reference implementation by Pìa Taubert.


### Examples
Set a colorful mix
\`\`\`gcode
 M165 A0.2 B0.4 C0.3 D0.1
\`\`\`
`;

export default content;
