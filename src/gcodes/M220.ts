
const content = `# M220 - Set Feedrate Percentage
## Set the global feedrate percentage.
### Usage
\`\`\`plaintext
 M220  [B<flag>] [R<flag>] [S<percent>]
\`\`\`

- \`[B<flag>]\`: Back up current factor
- \`[R<flag>]\`: Restore the last-saved factor
- \`[S<percent>]\`: Feedrate percentage

### Description
Set speed percentage factor, aka "Feed Rate" which applies to all G-code-based moves in all (X, Y, Z, and E) axes. Report the current speed percentage factor if no parameter is specified.


### Examples
Set feedrate to 80%
\`\`\`gcode
 M220 S80

\`\`\`
Report feedrate
\`\`\`gcode
 M220

\`\`\`
Back up current feedrate
\`\`\`gcode
 M220 B
--
\`\`\`
`;

export default content;
