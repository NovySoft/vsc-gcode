
const content = `# G61 - Return to Saved Position
## Return to saved position of specified slot
### Usage
\`\`\`plaintext
 G61  [E<flag>] [F<rate>] [S<slot>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<flag>]\`: Flag to restore the E axis
- \`[F<rate>]\`: Move feedrate
- \`[S<slot>]\`: Memory slot (0 if omitted)
- \`[X<flag>]\`: Flag to restore the X axis
- \`[Y<flag>]\`: Flag to restore the Y axis
- \`[Z<flag>]\`: Flag to restore the Z axis

### Description

Use this command to move to a saved position. To limit the move to only some axes, include one or more axis letters. Otherwise all axes will be included.


### Examples
Move to the XY coordinates stored in slot 0
\`\`\`gcode

       G61 XY S0

\`\`\`
`;

export default content;
